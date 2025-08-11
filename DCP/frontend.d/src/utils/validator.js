/**
 * 
 */

// Validate email format
export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// Validate password strength
export const validatePassword = (password) => {
    // At least 8 characters, one uppercase, one lowercase, one number
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return re.test(password);
};

// Validate consent Form
export const validateConsentForm = (form) => {
    const errors = {};

    if (!FormData.service) {
        errors.service = "Service is required.";
    }

    if (typeof FormData.consentGiven !== 'boolean') {
        errors.serviceId = 'Consent status is required';
    }

    return errors;
};

// Validate user profile
export const validateUserProfile = (profile) => {
    const errors = {};

    if (!profile.name || profile.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters long.';
    }

    if (!validateEmail(profile.email)) {
        errors.email = 'Invalid email format.';
    }

    return errors;
};

// Validate password change form
export const validatePasswordChange = (passwords) => {
    const errors = {};

    if (!passwords.currentPassword) {
        errors.currentPassword = 'Current password is required.';
    }
  
    if (!validatePassword(passwords.newPassword)) {
        errors.newPassword = 'New password must be at least 8 characters long, with one uppercase letter, one lowercase letter, and one number.';
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
        errors.confirmPassword = 'New password and confirmation do not match.';
    }

    return errors;
};