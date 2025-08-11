/**
 * Format date to relative time
 */

export const formatRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };
    
    for (const [unit, seconds] of Object.entries(intervals)) {
        const count = Math.floor(diffInSeconds / seconds);
        if (count > 0) {
            return `${count} ${unit}${count !== 1 ? 's' : ''} ago`;
        }
    }

    return 'Just now';
};

// Format data type for display
export const formDataType = (dataType) => {
    const mappings = {
        email: 'Email Address',
        location: 'Location Data',
        contacts: 'Contact List',
        usage: 'Usage Statistics',
        payment: 'Payment Information',
        profile: 'Profile Information'
    };

    return mappings[dataType] || dataType;
};

// Format pricacy rating for display
export const formatPrivacyRating = (rating) => {
    const ratings = {
        excellent: 'Excellent',
        good: 'Good',
        fair: 'Fair',
        poor: 'Poor'
    };

    return ratings[rating] || 'Unknown Rating';
};

// Format consent status
export const formatConsentStatus = (status) => {
    return status ? 'Enabled' : 'Disabled';
};

// Truncate long text with ellipsis
export const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
};

