import { invitationData } from '../data'
import FadeUp from './FadeUp'
import Character from './Character'

export default function Confirm() {
  const { title, text, message, whatsapps } = invitationData.confirm
  const waLink = (phone) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <FadeUp className="section-peek">
      {/* El texto va dentro del letrero de madera */}
      <div className="confirm-sign-box">
        <img className="confirm-sign-img" src="/assets/ui/sign-confirm.png" alt="" aria-hidden="true" />

        <div className="confirm-overlay">
          <div className="confirm-text">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>

          <div className="confirm-cta-row">
            {whatsapps.map((wa) => (
              <a key={wa.phone} className="confirm-cta" href={waLink(wa.phone)} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
                {wa.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <Character name="toucan" anim="none" className="peeker edge right" style={{ width: '78px', bottom: '-6px' }} />
    </FadeUp>
  )
}
