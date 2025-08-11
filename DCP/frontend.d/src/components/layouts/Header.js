/**
 * 
 */

import { Link, useLocation } from 'react-router-dom';
import { ShieldCheckIcon, BellIcon } from '@heroicons/react/24/outline';
import '../../components/layouts/Header.css';

export default function Header() {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Dashboard', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Alerts', path: '/alerts' },
    { name: 'Profile', path: '/profile' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo-container">
            <ShieldCheckIcon className="logo-icon" />
            <span className="logo-text">ConsentHub</span>
          </div>
          
          <nav className="navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${
                  location.pathname === link.path ? 'active' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="header-actions">
            <button className="notification-btn">
              <BellIcon className="notification-icon" />
              <span className="sr-only">View notifications</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}