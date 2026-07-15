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
    <FadeUp className="section-peek">
      <div className="info-cards-container">
        {/* Dress code: colores a EVITAR (tachados) */}
        <div className="info-card">
          <span className="tag">{dressCode.title}</span>
          <div className="card-body">
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
        </div>

        {/* Ubicación: mapa recortado como enlace */}
        <div className="info-card">
          <span className="tag">{location.title}</span>
          <div className="card-body">
            <a className="map-link" href={mapUrl} target="_blank" rel="noreferrer" aria-label={location.buttonText}>
              <img src="/assets/ui/map.png" alt="Ver ubicación en el mapa" />
            </a>
          </div>
        </div>

        {/* Detalles: sesión de fotos */}
        <div className="info-card">
          <span className="tag">{photos.title}</span>
          <div className="card-body">
            <i className="fa-solid fa-camera-retro icon-teal" style={{ fontSize: '48px' }}></i>
            <p><MultiLine text={photos.text} /></p>
          </div>
        </div>
      </div>
    </FadeUp>
  )
}
