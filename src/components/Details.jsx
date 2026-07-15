import { invitationData } from '../data'
import FadeUp from './FadeUp'

// Convierte saltos de línea "\n" en <br /> conservando el diseño original.
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
    <FadeUp>
      {/* Cabecera con arte "Detalles de la aventura" (footer-4) */}
      <img
        className="details-header"
        src="/assets/img/footer-4.jpeg"
        alt="Detalles de la aventura"
      />

      {/* Valores alineados bajo cada columna de la cabecera */}
      <div className="details-values">
        <div className="detail-col"><p><MultiLine text={date} /></p></div>
        <div className="detail-col"><p><MultiLine text={time} /></p></div>
        <div className="detail-col"><p><MultiLine text={place} /></p></div>
      </div>
    </FadeUp>
  )
}
