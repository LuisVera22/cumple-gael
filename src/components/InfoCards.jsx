import { invitationData } from '../data'
import FadeUp from './FadeUp'

function MultiLine({ text }) {
  return text.split('\n').map((line, i, arr) => (
    <span key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </span>
  ))
}

export default function InfoCards() {
  const { cards, mapUrl } = invitationData
  const { dressCode, location, photos } = cards

  return (
    <FadeUp>
      <div className="info-cards-container">
        {/* Dress code: colores a EVITAR (tachados) */}
        <div className="info-card">
          <span className="tag">{dressCode.title}</span>
          <p><MultiLine text={dressCode.text} /></p>
          <div className="circles">
            <span className="circle-wrap">
              <span className="circle circle-green"></span>
              <i className="fa-solid fa-xmark circle-x"></i>
            </span>
            <span className="circle-wrap">
              <span className="circle circle-brown"></span>
              <i className="fa-solid fa-xmark circle-x"></i>
            </span>
          </div>
        </div>

        {/* Ubicación: enlace al mapa */}
        <div className="info-card">
          <span className="tag">{location.title}</span>
          <i className="fa-solid fa-map-location-dot icon-red" style={{ fontSize: '48px', marginBottom: '15px' }}></i>
          <a className="btn-map" href={mapUrl} target="_blank" rel="noreferrer">
            {location.buttonText}
          </a>
        </div>

        {/* Detalles: sesión de fotos */}
        <div className="info-card">
          <span className="tag">{photos.title}</span>
          <i className="fa-solid fa-camera-retro icon-teal" style={{ fontSize: '48px', marginBottom: '15px' }}></i>
          <p><MultiLine text={photos.text} /></p>
        </div>
      </div>
    </FadeUp>
  )
}
