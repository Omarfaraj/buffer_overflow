// /**
//  * Consent API calls
//  * Something is wrong here whenever i uncomment, it doesnt compile but when i comment everything works perfectly, will investigate later
//  * These functions interact with the backend to manage user consents.
//  */

// import api from './api';

// export const getUserConsents = async () => {
//     try {
//         const response = await api.get('/consents');
//         return response.data;
//     } catch (error) {
//         throw new Error('Failed to fetch consents:' + error.message);
//     }
// };

// export const updateConsent = async (consentId, updateData) => {
//     try {
//         const response = await api.patch(`/consents/${consentId}`, updateData);
//         return response.data;
//     } catch (error) {
//         throw new Error('Failed to update consent:' + error.message);
//     }
// };

// export const getServiceDetails = async (serviceId) => {
//     try {
//         const response = await api.get(`/services/${serviceId}`);
//         return response.data;
//     } catch (error) {
//         throw new Error('Failed to fetch service details:' + error.message);
//     }
// };

// export const revokeAllConsent = async () => {
//     try {
//         const response = await api.post('/consents/revoke-all');
//         return response.data;
//     } catch (error) {
//         throw new Error('Failed to revoke all consents:' + error.message);
//     }
// };