/**
 * Company Privacy rating
 * 
 */
import React from 'react';
import '../../components/consent/ServiceBadge.css'; 

export default function ServiceBadge({ rating }) {
    const ratingColors = {
        excellent: { bg: 'bg-excellent', text: 'text-excellent', label: 'Excellent' },
        good: { bg: 'bg-good', text: 'text-good', label: 'Good' },
        fair: { bg: 'bg-fair', text: 'text-fair', label: 'Fair' },
        poor: { bg: 'bg-poor', text: 'text-poor', label: 'Poor' }
    };

    const { bg, text, label } = ratingColors[rating] || ratingColors.fair;

    return (
        <span className={`service-badge ${bg} ${text}`}>
            <span className='badge-indicator'></span>
            {label}
        </span>
    );
}
