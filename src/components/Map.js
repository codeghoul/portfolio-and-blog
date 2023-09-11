import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const customIcon = L.icon({
  iconUrl: '/icons/pin.png',
  iconRetinaUrl: '/icons/pin.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
})

const Map = ({ places }) => {
  return (
    <MapContainer
      className='w-full h-full z-40'
      center={[12.9716, 77.5946]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg'
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
