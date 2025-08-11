/**
 * Service consent toogle
 */

import { useState } from 'react';
// import { Switch } from '@headlessui/react';
import '../../components/consent/ConsentCard.css';

export default function ConsentCard({ service }) {
    const [enabled, setEnabled] = useState(service.consentGiven);

    return (
        <div className='consent-card'>
            <div className='consent-content'>
                <div className='card-header'>
                    <div className='service-info'>
                            <img
                               src={service.logo}
                               alt={`${service.name} logo`}
                               className='service-logo'
                            />
                            <h3 className='service-name'>{service.name}</h3>   
                        </div>
                        <p className='service-description'>
                            {service.description}
                        </p>
                    <label
                      checked={enabled}
                      onchange={setEnabled}
                      className="toggle-switch"
                    >
                        <span 
                          className="switch-slider"
                        /> 
                        </label>  
                </div>

                <div className='data-access'>
                    <span className='access-label'>Data Access</span>
                    <div className='data-tags'>
                        {service.dataTypes.map((type) => (
                            <span
                                key={type}
                                className='data-tag'
                            >
                                {type}
                            </span>    
                        ))}
                    </div>
                </div>
            </div>

            <div className='card-footer'>
                <a
                   href={service.privacyPolicyUrl}
                   target='_blank'
                   rel="noopener noreferrer"
                   className='privacy-link'
                >
                    View Privacy Policy
                    </a>   
            </div>
        </div>
    );
}