import { invitationData } from '../data'
import FadeUp from './FadeUp'

export default function Final() {
  const { text, title, subtitle } = invitationData.final

  return (
    <FadeUp className="final-section">
      <p className="final-text">{text}</p>
      <h1 className="final-title">{title}</h1>
      <h2 className="final-subtitle">{subtitle}</h2>
      {/* Banda de animales (footer.jpeg) */}
      <img className="final-band" src="/assets/img/footer.jpeg" alt="" aria-hidden="true" />
    </FadeUp>
  )
}
