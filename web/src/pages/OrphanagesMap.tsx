import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';

import '../styles/pages/orphanages-map.css';
import mapMakerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMakerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMakerImg} alt="" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Belo Horizonte</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>

      <MapContainer
        center={[-19.922496, -43.9913313]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url={`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`} />

        <Marker icon={mapIcon} position={[-19.922496, -43.9913313]}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Lar das Meninas
            <Link to="orphanages/1">
              <FiArrowRight size={20} color="#FFF" />
            </Link>
          </Popup>
        </Marker>
      </MapContainer>

      <Link to="orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
