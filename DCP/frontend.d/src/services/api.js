/**
 * API client for interacting with the backend.
 */

import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
    timeout: 10000, 
    headers: {
        'Content-Type': 'application/json',
    } 
});

// Interceptor for authentication
api.interceptors.request.use(config => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Response interceptor for error handling
api.interceptor.response.use(response => response, error => {
    if (error.response) {
        // Handling different HTTP error statuses
        const { status } = error.response;

        if (status === 401) {
            // Handle unauthorized access
            console.error('Authentication required');
            // Optionally: redirect to login
        } else if(error.request) {
            console.error('No response recieved:', error.request);
        } else {
            console.error('Request setup error:', error.message);
        }

        return Promise.reject(error);
    }
});

export default api;