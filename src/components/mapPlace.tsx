import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

interface MapPlaceProps {
    lat:string
    lng:string
    center: string[]
}

const MapPlace:React.FC<MapPlaceProps> = ({ lat, lng }) => {
    const position = [lat, lng];
  return (
    <div className='border-2 border-black'>
    <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  )
}

export default MapPlace