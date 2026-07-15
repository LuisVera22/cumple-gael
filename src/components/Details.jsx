import { invitationData } from '../data'
import FadeUp from './FadeUp'
import Character from './Character'

function MultiLine({ text }) {
  return text.split('\n').map((line, i, arr) => (
    <span key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </span>
  ))
}

export default function Details() {
  const { date, time, place } = invitationData.details

  return (
    <FadeUp className="section-peek">
      {/* Letrero con la cebra parada encima */}
      <div className="wood-header-wrap">
        <Character name="zebra" anim="none" className="on-sign" style={{ width: '68px' }} />
        <img className="wood-header" src="/assets/ui/header-detalles.png" alt="Detalles de la aventura" />
      </div>

      <div className="details-grid">
        <div className="detail-col">
          <i className="fa-solid fa-calendar-days icon-teal"></i>
          <h3>Fecha</h3>
          <p><MultiLine text={date} /></p>
        </div>

        <div className="vertical-dashed"></div>

        <div className="detail-col">
          <i className="fa-regular fa-clock icon-teal"></i>
          <h3>Hora</h3>
          <p><MultiLine text={time} /></p>
        </div>

        <div className="vertical-dashed"></div>

        <div className="detail-col">
          <i className="fa-solid fa-location-dot icon-red"></i>
          <h3>Lugar</h3>
          <p><MultiLine text={place} /></p>
        </div>
      </div>

      <Character name="elephant" anim="none" className="peeker edge left" style={{ width: '95px' }} />
      <Character name="monkey" anim="none" className="peeker edge right bushy" style={{ width: '130px' }} />
    </FadeUp>
  )
}
