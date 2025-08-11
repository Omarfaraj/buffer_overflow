/**
 * firebase Consent
 * arraUnion - will come back to this.
 */

import { db } from './firebaseConfig';
import { doc, updateDoc, getDoc, setDoc } from 'firebase/firestore';
import { logConsentEvent } from './firebaseAnalytics';
// import { formatKenyanPhone } from './utils/formatter';

// Kenya-specific service
const KENYA_SERVICES = ['MPESA', 'SAFARICOM', 'HUDUMA_NAMB', 'ECITIZEN', 'KRA'];

// Update user consent (kenya DPA compliance)
export const updateConsentStatus = async (userId, service, granted, scopes = []) => {
    // Validate kenyan service
    if (!KENYA_SERVICES.includes(service)) {
        throw new Error(`Invalid kenyan service: ${service}`);
    }

    const userRef = doc(db, 'users', userId);

    try {
        // Update consent status
        await updateDoc(userRef, {
            [`consents.${service}`]: {
                granted,
                scopes,
                lastUpdated: new Date().toISOString()
            }
        });

        // Create consent record in audit log
        await createConsentRecord(userId, service, granted ? 'GRANTED' : 'REVOKED');

        // Log analytics event
        logConsentEvent(service, granted ? 'granted' : 'revoked');

        return true;
    } catch (error) {
        console.error('Consent update failed:', error);
        throw error
    }
};

// Create consent audit record (Kenya DPA requirements)
export const createConsentRecord = async (userId, service, action) => {
    const consentRecordRef = doc(db, 'consentRecords', `${userId}_${Date.now()}`);

    await setDoc(consentRecordRef, {
        userId,
        service,
        action,
        timestamp: new Date().toISOString(),
        country: 'KE',
        legal_basis: 'Kenya_DPA_@)!('
    });
};

// Get consent status from Kenyan service
export const getConsentStatus = async (userId) => {
    const userRef = doc(db, 'users', userId);
    const snapshot = await getDoc(userRef);

    if (snapshot.exists()) {
        const consents = snapshot.data().consents || {};

        // Filter only by kenyan service
        return Object.fromEntries(
            Object.entries(consents).filter(([service]) => 
                KENYA_SERVICES.includes(service)
            )
        );
    }

    return {};
};

// Batch update consent (for USSD flow)
export const batchUpdateConsent = async (userId, updates) => {
    const userRef = doc(db, 'users', userId);
    const updateData = {};
 
    for (const [service, status] of Object.entries(updates)) {
        if (KENYA_SERVICES.includes(service)) {
            updateData[`consents.${service}.granted`] = status;
            updateData[`consents.${service}.lastUpdated`] = new Date().toISOString();
            await createConsentRecord(userId, service, status ? 'GRANTED' : 'REVOKED');
        }
    }

    await updateDoc(userRef, updateData);
};

// KEnyan-specific consent check
export const checkServiceConsent = async (userId, service) => {
    if (!KENYA_SERVICES.includes(service)) return false;

    const consents = await getConsentStatus(userId);
    return consents[service]?.granted || false;
};