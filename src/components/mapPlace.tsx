import { LatLngExpression } from "leaflet";
import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface MapPlaceProps {
  lat?: number | string;
  lng?: number | string;
}

const MapPlace: React.FC<MapPlaceProps> = ({ lat, lng }) => {
  const position: LatLngExpression = [Number(lat), Number(lng)];
  console.log("position : ", position);
  return (
    <div className="h-screen w-screen overflow-hidden -z-10">
      <MapContainer
        center={{
          lat: Number(lat),
          lng: Number(lng),
        }}
        zoom={13}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={{ lat: Number(lat), lng: Number(lng) }} />
      </MapContainer>
    </div>
  );
};

export default MapPlace;
