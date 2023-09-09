import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const customIcon = L.icon({
  iconUrl: '/icons/navigation.png',
  iconRetinaUrl: '/icons/navigation.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
})

const Map = ({ places }) => {
  return (
    <MapContainer
      className='w-full h-1/2 rounded-xl shadow-lg'
      center={[12.9716, 77.5946]}
      zoom={10}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      ></TileLayer>
      {places.map((place, index) => (
        <Marker
          key={index} // You should use a unique key for each marker
          position={place.position}
          icon={customIcon}
        >
          <Popup>{place.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Map
