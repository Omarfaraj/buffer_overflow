/**
 * User settings
 * // when inserting its not changing. will look on that **********
 */
import React, { useState } from 'react';
import '../pages/Profile.css';

export default function Profile() {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        notification: 'email',
        twoFactorEnabled: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUser(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the updated user data to your backend
        console.log('Updated user data:', user);
    }

    return (
        <div className="profile-page">
            <h1>Account Settings</h1>

            <div className='profile-section'>
                <h2>Personal Information</h2>
                <form className='profile-form' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='name'>Full Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={user.name}
                            onChange={handleChange}
                        />    
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email'>Email Address</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={user.email}
                            onChange={handleChange}
                        />    
                    </div>

                    <button type='submit' className='save-btn'>
                        Save Changes
                    </button>
                </form>
            </div>

            <div className='profile-section'>
                <h2>Security Settings</h2>
                <div className='security-item'>
                    <div>
                        <h3>Two-Factor Authentication</h3>
                        <p>Add an extra layer of security to your account</p>
                    </div>
                    <label className='toggle-switch'>
                        <input
                           type='checkbox'
                           name='twoFactorEnabled'
                           checked={user.twoFactorEnabled}
                           onChange={handleChange}
                        />
                        <span className='switch-slider' />   
                    </label>
                </div>
            </div>
          </div>
    );
}

