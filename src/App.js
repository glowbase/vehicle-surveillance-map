import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './App.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2xvd2Jhc2UiLCJhIjoiY2t0M3JqOHhzMGJsODJvczA0ZXZqOTNoNCJ9.kLEke1rhFGuVe9GJqwFuSw';

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const strikeForcesList = ['Lambda', 'Iter', 'Wobbly'];

  const [longitude, setLongitude] = useState('151.209900');
  const [latitude, setLatitude] = useState('-33.865143');
  const [zoom, setZoom] = useState(13);
  const [strikeForces, setStrikeForces] = useState(strikeForcesList);

  useEffect(() => {
    if (map.current) return; // Init one map
  
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: zoom
    });
  });

  return (
    <div>
      <div className="banner">
      <h1 style={{marginTop: 0}}>Surveillance Map</h1>

        <label>Strike Force</label>
        <select id="strikeForceDropdown" style={{width: '100%'}} onChange={updateVehicleList}>
          <option defaultValue hidden value="0">Select...</option>
          {strikeForces.map(strikeForce => {
            return <option value={strikeForce}>{strikeForce}</option>
          })}
        </select>
      </div>

      <div ref={mapContainer} className="map-container"></div>
    </div>
  );
}

function updateVehicleList(e) {
  const strikeForce = e.target.value;

  console.log(strikeForce);
}