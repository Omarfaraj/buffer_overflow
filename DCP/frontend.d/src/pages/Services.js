/**
 * Manages services consent.
 */

import React, { useState } from 'react';
import ConsentCard from '../components/consent/ConsentCard';
import DataAccessMap from '../components/consent/DataAccessMap';
import '../pages/Service.css';
 
export default function Services() {
    const [services] = useState([
        {
            id: 1,
            name: 'Google',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.png',
            description: 'Search engine and producivity tools',
            consentGiven: true,
            privacyPolicyUrl: 'https://policies.google.com/privacy',
            dataTypes: ['Location', 'Search History', 'Contacs']
        },
        // May add more services
    ])

    const [connections] = useState([
        { id: 1, service: 'Google', dataType: 'Location Data' },
        { id: 2, service: 'Facebook', dataType: 'Contact List' }
        // Add more connections
    ]);
   
    return (
        <div className="service-page">
            <h1>Manage Service Consent</h1>
            <p>Control which services can access your personal data</p>

            <div className="service-grid">
                <div className='service-list'>
                    {services.map(service => (
                        <ConsentCard key={service.id} service={service} />
                    ))}
                </div>

                <div className='data-flow-section'>
                    <DataAccessMap connections={connections} />
                </div>
            </div>
        </div>
    );
}