/**
 *  will come back so that it can be visible when someone is watching from "manage service consent"
 */
import React from 'react';
import '../../components/consent/DataAccessMap.css';


export default function DataAccessMap({ connections }) {
    return (
      <div className="data-access-map">
        <h3 className="map-title">Data Flow Diagram</h3>
        <div className="map-container">
          {/* Simplified visualization */}
          <div className="user-node">
            <span>You</span>
          </div>
          
          {connections.map((conn, idx) => (
            <div 
              key={conn.id}
              className="connection"
              style={{ '--delay': idx }}
            >
             <div className="connection-line"></div>
                <div className="service-node">
                  <div className="service-name">{conn.service}</div>
                  <div className="data-type">{conn.dataType}</div>
                </div>
             </div>
          ))}
        </div>
      </div>
    );
  }