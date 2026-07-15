import { invitationData } from '../data'
import FadeUp from './FadeUp'

export default function Confirm() {
  const { title, text, buttonText, phone, message } = invitationData.confirm
  const waLink = `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ''}`

  return (
    <FadeUp>
      {/* Letrero de madera decorativo (footer-3) */}
      <img className="confirm-sign" src="/assets/img/footer-3.jpeg" alt="" aria-hidden="true" />

      <div className="confirm-box">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="wa-buttons">
          <a className="btn-wa" href={waLink} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-whatsapp"></i>
            {buttonText}
          </a>
        </div>
      </div>
    </FadeUp>
  )
}
