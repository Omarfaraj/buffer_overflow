/**
 * 
 */

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

// All Pages
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import Alerts from './pages/Alerts';
import Profile from './pages/Profile';

// Dev mode visualization panel
import ComponentGallery from './components/dev/ComponentGallery';

// Consent context provider
import { ConsentProvider } from './context/ConsentContext';
import './App.css';

function App() {
  const [devMode, setDevMode] = useState(false); // Set false for production

  return (
    <ConsentProvider>
      <Router>
        <div className='app-container'>
          {devMode && (
            <div className='dev-banner'>
              DEVELOPMENT MODE | <button
                className=''
                onClick={() => setDevMode(false)}
              >
                Exit Dev View
                </button>  
            </div>
          )}

          <Header />

          <main className='main-content'>
            {devMode ? (
              <ComponentGallery />
            ) : (
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/services' element={<Services />} />
                <Route path='/alerts' element={<Alerts />} />
                <Route path='/profile' element={<Profile />} />
              </Routes>
            )}
          </main>
          {/* test */}
          <div>
    {/* ... rest of your code ... */}
  </div>
  
          <Footer />
        </div>
      </Router>
    </ConsentProvider>
    
  );
}

export default App;
