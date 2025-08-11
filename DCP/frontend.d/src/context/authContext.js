/**
 * State management
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUserConsents, updateConsent } from '../services/consent.js';
import { auth } from '../firebase';

const AuthContext = createContext();

export function useConsent() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [consents, setConsents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Kenya phone login
  const confirmVerificationCode = async (verificationId, code) => {
    const credential = PhoneAuthProvider.credential(verificationId, code);
    return signInWithCredentials(auth, credential)
  };
} 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
      fetchConsent();

      return unsubscribe;
  }, []);

  const fetchConsent = async () => {
    try {
      setLoading(true);
      const data = await getUserConsents();
      setConsents(data);
      setError(null);
    } catch (err) {
      setError('Failed to load consents. Please try again later.');
      console.error('Error fetching consents:', err);
    } finally {
      setLoading(false);
    }
  };

  const toggleConsent = async (serviceId, newStatus) => {
    try {
      // Optimistic UI Update
      setConsents(prev => prev.map(consent =>
        consent.id === serviceId ? { ...consent, consentGiven: newStatus } : consent
      ));

      await updateConsent(serviceId, { consentGiven: newStatus });
    } catch (err) {
      // Revert on error
      setConsents(prev => prev.map(consent =>
        consent.id === serviceId ? { ...consent, consentGiven: !newStatus } : consent
      ));

      setError('Failed to update consent. Please try again.');
      console.error('Error updating consent:', err);
    }
  };

  const value = {
    confirmVerificationCode,
    currentUser,
    consents,
    loading,
    error,
    toggleConsent,
    refreshConsent: fetchConsent
  };

  return (
    <ConsentContext.Provider value={value}>
      {!loading && children}
    </ConsentContext.Provider>
  )
};

// wil come back to this and fix this error 