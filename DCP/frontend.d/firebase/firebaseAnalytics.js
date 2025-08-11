/**
 * firebase analytics
 */

import { getAnalytics, logEvent, setConsent } from 'firebase/analytics';
import { app } from './firebaseConfig';

const analytics = getAnalytics(app);

// Kenya DPA-compliant analytics initialization
export const initializeAnalytics = (consentPreferences) => {
    // Set consent based on user preference
    setConsent({
        ad_storage: consentPreferences.analytics ? 'granted' : 'denied',
        analytics_storage: consentPreferences.analytics ? 'granted' : 'denied',
        functionality_storage: 'granted',
        security_storage: 'granted'
    });

    // Kenya-specific configuration
     logEvent(analytics, 'analytics_init', {
        country: 'KE',
        platform: 'digital-consent'
     });
};

// Track consent event for kenya DPA compliance
export const logConsentEvent = (service, action) => {
    logEvent(analytics, 'consent-update', {
        service,
        action,
        country: 'KE',
        region: 'Africa',
        legal_basis: 'Kenya_DPA_2019'
    });
};

// Track USSD interaction
export const logUssdInteraction = (menuOption) => {
    logEvent(analytics, 'ussd_interaction', {
        menu_option: menuOption,
        interaction_type: 'USSD',
        country: 'KE',
        device_type: 'feature_phone'
    });
};

// Track authentication events
export const logAuthEvent = (method) => {
    logEvent(analytics, 'authentication', {
        method,
        country: 'KE',
        provider: method === 'phone' ? 'Safaricom' : 'Firebase'
    });
};

// Track ToS view events
export const logTermsView = (service) => {
    logEvent(analytics, 'terms_viewed', {
        service,
        country: 'KE',
        document_type: 'Terms_of_service '
    });
};

// Kenya-specific performance metrics
export const logPagePerformance = (pageName, loadTime) => {
    logEvent(analytics, 'page_performance', {
        page_name: pageName,
        load_time_ms: loadTime,
        country: 'KE',
        network_type: 'mobile_data'
    });
};