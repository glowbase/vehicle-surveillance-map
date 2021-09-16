import React, { useRef, useEffect, useState } from 'react';
import mapboxgl, { MapboxEvent } from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2xvd2Jhc2UiLCJhIjoiY2t0M3JqOHhzMGJsODJvczA0ZXZqOTNoNCJ9.kLEke1rhFGuVe9GJqwFuSw';

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [longitude, setLongitude] = useState(-70.9);
  const [latitude, setLatitude] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // Only init one map

    // Setup new map with config
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      attributionControl: false,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: zoom,
    });

    // Add map controls
    map.current.addControl(new mapboxgl.NavigationControl());
    map.current.addControl(new mapboxgl.GeolocateControl());
  });

  return (
    <div className="d-flex">
      <div className="map-controls shadow">

      </div>
      <div ref={mapContainer} className="map-container"></div>
    </div>
  );
}