/**
 * Main user dashboard page.
 */

import { useState } from 'react';
import ServiceBadge from '../components/consent/ServiceBadge';
import AlertHistory from '../components/alerts/AlertHistory';
import '../pages/Dashboard.css';

export default function Dashboard() {
  const [stats] = useState({
    activeServices: 12,
    pendingActions: 3,
    highRisk: 2
  });

  const [recentAlerts] = useState([
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
    },
    {
      id: 3,
      type: 'info',
      title: 'Monthly Report Ready',
      description: 'Your privacy report for April is available',
      time: '3 days ago'
    }
  ]);

  const [services] = useState([
    { name: 'Google', rating: 'good' },
    { name: 'Facebook', rating: 'fair' },
    { name: 'Amazon', rating: 'poor' }
  ]);

  return (
    <div className="">
     <main className="dashboard-page">
        <div className="dashboard-header">
          <h1 className="">Privacy Dashboard</h1>
          <p> 
            Manage your data consents and monitor privacy settings
          </p>
        </div>
        
        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-card-inner">
              <div className="stat-icon">
                <svg className="stat-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                <div className="stat-text">
                  <dt className="stat-name">Active Services</dt>
                  <dd className="stat-value">{stats.activeServices}</dd>
                </div>
              </div>
            </div>
          </div>
        {/* Repeat for other stats */}
        </div>
        
        <div className="dashboard-grid">
          {/* Left Column */}
          <div className="dashboard-column-main">
            <div className="attention-section">
              <h2 className="">Services Needing Attention</h2>
                <div className="service-list">
                  {services.map((service) => (
                    <div key={service.name} className="service-item">
                      <span className="service-name">{service.name}</span>
                      <ServiceBadge rating={service.rating} />
                    </div>
                  ))}
                <button className="view-all-btn">
                  View All Services
                </button>
              </div>
            </div>
            {/* Data Flow Map would go here */}
          </div>
          
          {/* Right Column */}
          <div>
            <div className="dashboard-column-side">
              <div className="alerts-section">
                <div className="alerts-header">
                  <h2 className="">Recent Alerts</h2>
                  <button className="view-all-btn">View All</button>
                </div>
              </div>
              <div className="p-6">
                <AlertHistory alerts={recentAlerts} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
