import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent: React.FC = () => {
  const position: [number, number] = [0, 0]; // Set the center of the map (latitude, longitude)
  const zoom: number = 1; // Set the initial zoom level

  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{width: '500px', height:'300px'}}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};

export default MapComponent;
