/**
 * Notification center for the application.
 * 
 */

import React, { useState } from 'react';
import AlertHistory from '../components/alerts/AlertHistory';
import '../pages/Alerts.css';

export default function Alerts() {
    const [alerts] = useState([
        {
           id: 1,
           type: 'warning',
           title: 'Policy Update Required',
           description: 'Google updated their privacy policy - review required',
           time: '2 hours ago',
           read: false
        },
        // Add more alerts
    ]);

    const [filter, setFilter] = useState('all');

    return (
        <div className="alert-page">
            <div className='alert-header'>
                <h1>Notification Center</h1>
                <div className='filter-options'>
                    <button
                       className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                       onClick={() => setFilter('all')}
                    >
                     All Alerts    
                    </button>
                    <button
                        className={`filter-btn ${filter === 'unread' ? 'active' : ''}`}
                        onClick={() => setFilter('unread')}
                    >
                     Unread    
                    </button>       
                </div>
            </div>

            <div className='alert-container'>
                <AlertHistory alerts={alerts} />
            </div>
        </div>
    );
}