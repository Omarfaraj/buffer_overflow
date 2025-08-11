/**
 * 
 */

import React from 'react';
import '../../components/layouts/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className='footer-content'>
            <div className='footer-info'>
              <div className='footer-logo'>ConsentHub</div>
              <p className='footer-description'>
                Take control of your data privacy with consent management
              </p>
            </div>

            <div className='footer-links'>
              <div className='link-group'>
                <h3 className='link-group-title'>Product</h3>
                <a href='http://example.com' className='footer-link'>Features</a>
                <a href='http://example.com' className='footer-link'>Solutions</a>
                <a href='http://example.com' className='footer-link'>Pricing</a>
              </div>

              <div className='link-group'>
                <h3 className='link-group-title'>Resources</h3>
                <a href='http://example.com' className='footer-link'>Blog</a>
                <a href='http://example.com' className='footer-link'>Documentation</a>
                <a href='http://example.com' className='footer-link'>Support</a>
              </div>

              <div className='link-group'>
                <h3 className='link-group-title'>Company</h3>
                <a href='http://example.com' className='footer-link'>About</a>
                <a href='http://example.com' className='footer-link'>Careers</a>
                <a href='http://example.com' className='footer-link'>Contact</a>
              </div>
            </div>
          </div>

          <div className='footer-bottom'>
            <div className='copyright'>
              &copy: {currentYear} ConsentHub. All rights reserved.
            </div>
            <div className='legal-links'>
              <a href='http://example.com' className='legal-link'>Privacy Policy</a>
              <a href='http://example.com' className='legal-link'>Terms of Service</a>
              <a href='http://example.com'className='legal-link'>Cookie Policy</a>  
            </div> 
          </div>
        </div>
      </footer>
    );
  }