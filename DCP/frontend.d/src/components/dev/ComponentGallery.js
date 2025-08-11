/**
 * Centralized showcase for components - It displays all your core UI components (like ConsentCard, ServiceBadge, DataAccessMap, and AlertHistory) in one place.
 * Development and Design reference - . This gallery serves as a reference for developers and designers to see how components look and behave.
 * Rapid prototyping and Debuging - It allows you to quickly test and prototype new features or changes to existing components without needing to navigate through the entire application.
 * Documentation and Onboarding - It can serve as a living documentation for your components, making it easier for new developers to understand how to use them.
 * 
 * ComponentGallery is a development tool to preview, test, and document your UI components with mock data. It’s not meant for end users, but for your team’s workflow and quality
 */

import React from 'react';
import ConsentCard from '../consent/ConsentCard';
import ServiceBadge from '../consent/ServiceBadge';
import DataAccessMap from '../consent/DataAccessMap';
import AlertHistory from '../alerts/AlertHistory';
import '../../components/dev/ComponentGallery.css';


export default function ComponentGallery() {
  const mockService = {
    id: '1',
    name: 'Google',
    description: 'Search engine and productivity tool',
    consentGiven: true,
    logo: '',
    dataTypes: ['Usage Data', 'Cookies', 'IP Address', 'Location', 'Search History'],
    privacyPolicyUrl: '#',
    rating: 'good'
  };
 
  const mockConnections = ([
    { id: 1, service: 'Google', dataType: 'Analytics' },
    { id: 2, service: 'Facebook', dataType: 'Ad Targeting' },
    { id: 3, service: 'Stripe', dataType: 'Payment Info' }
  ]);

  const mockAlerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Policy Update Required',
      description: 'Google updated their privacy policy',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'update',
      title: 'New Service Added',
      description: 'Slack was connected to your account',
      time: '1 day ago'
    }
  ];

  return  (
    <div className='component-gallery'>
      <h1 className='gallery-title'>Component Gallery</h1>

      <div className='gallery-grid'>
        <section className='gallery-section'>
          <h2>Consent Card</h2>
          <ConsentCard service={mockService} />
        </section>

        <section className='gallery-section'>
          <h2>ServiceBadge</h2>
          <div className='badge-container'>
            <ServiceBadge rating='excellent' />
            <ServiceBadge rating='good' />
            <serviceBadge rating='fair' />
            <ServiceBadge rating='poor' />  
          </div> 
        </section>

        <section className='gallery-section'>
          <h2>DataAccessMap</h2>
          <DataAccessMap connections={mockConnections} />
        </section>

        <section className='gallery-section'>
          <h2>AlertHistory</h2>
          <AlertHistory alerts={mockAlerts} />
        </section>
      </div>
    </div>
  );
}