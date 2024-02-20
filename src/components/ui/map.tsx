import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent: React.FC = () => {
	const position: [number, number] = [0, 0];
	const zoom: number = 1;

	return (
			<MapContainer
				center={position}
				zoom={zoom}
				scrollWheelZoom={false}
				style={{ width: "500px", height: "300px" }}
			>
				<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
			</MapContainer>
	);
};

export default MapComponent;
