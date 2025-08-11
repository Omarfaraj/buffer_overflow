/**
 * Notification List
 */

import { ClockIcon, ExclamationTriangleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import '../../components/alerts/AlertHistory.css';

export default function AlertHistory({ alerts }) {
  const iconMap = {
    warning: <ExclamationTriangleIcon className="alert-icon warning" />,
    info: <InformationCircleIcon className="alert-icon info" />,
    update: <ClockIcon className="alert-icon update" />
  };

  return (
    <div className="alert-history">
      <ul className="alert-list">
        {alerts.map((alert) => (
          <li key={alert.id} className="alert-item">
            <div className="alert-content">
              <div className="alert-icon-container">
                {iconMap[alert.type]}
              </div>
              <div className="alert-text">
                <p className="alert-title">
                  {alert.title}
                </p>
                <p className="alert-description">
                  {alert.description}
                </p>
              </div>
              <div className="alert-time">
                {alert.time}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}