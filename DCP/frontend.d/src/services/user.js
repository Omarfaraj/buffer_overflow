/**
 * User API calls
 */

import api from './api';

export const getUserProfile = async () => {
    try {
        const response = await api.get('/user/profile');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch user profile:' + error.message);
    }
};

export const updateUserProfile = async (profileData) => {
    try {
        const response = await api.put('/user/profile', profileData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to update profile:', error.message);
    }
};

export const getUserAlerts = async () => {
    try {
        const response = await api.get('/user/alerts');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch alerts:', error.message);
    }
};

export const markAlertAsRead = async (alertId) => {
    try {
        const response = await api.patch(`/users/alerts/${alertId}/read`)
        return response.data;
    } catch (error) {
        throw new Error('Failed to mark alert as read:', error.message);
    }
};

export const changePassword = async (passwordData) => {
    try {
        const response = await api.post('/users/change-password', passwordData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to change password:', error.message);
    }
};