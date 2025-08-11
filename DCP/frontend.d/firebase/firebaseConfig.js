/**
 * Core firbase setupand kenya Digital Consent platform
 * will add up "getDoc"
 */

import { initializeApp } from 'firebase/app';
import { getAuth, 
         PhoneAuthProvider,
         signInWithCredential,
         RecaptchaVerifier
} from 'firebase/firebaseAuth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { getAnalytics } from 'firebase/analytics';

// Kenya focused config
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

// Kenya phone number helper
export const startPhoneVerification = (phoneNumber, appVerifier) => {
    const provider = new PhoneAuthProvider(auth);
    return provider.verifyPhoneNumber({ phoneNumber, appVerifier });
};

// Kenya consent function
export const updateConsent = httpsCallable(functions, 'updateConsent');
export const getConsentStatus = httpsCallable(functions, 'getConsentStatus');
export const handleUssd = httpsCallable(functions, 'handleUssd');

export {
    app,
    analytics,
    auth,
    db,
    functions,
    RecaptchaVerifier,
    PhoneAuthProvider,
    signInWithCredential
};