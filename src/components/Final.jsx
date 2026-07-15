import { invitationData } from '../data'
import FadeUp from './FadeUp'
import Character from './Character'

export default function Final() {
  const { text, subtitle } = invitationData.final

  return (
    <FadeUp className="final-section section-peek">
      <p className="final-text">{text}</p>
      <h2 className="final-subtitle">{subtitle}</h2>

      {/* PlimPlim al centro, asomándose desde abajo (como en la portada) */}
      <img className="final-hero" src="/assets/characters/plim-plim.png" alt="PlimPlim explorador" />

      {/* Animales distribuidos hacia los lados, junto a los arbustos */}
      <Character name="zebra"    anim="none" className="peeker edge left"  style={{ width: '70px',  bottom: '170px' }} />
      <Character name="elephant" anim="none" className="peeker edge left"  style={{ width: '110px', bottom: '0' }} />
      <Character name="toucan"   anim="none" className="peeker edge right" style={{ width: '78px',  bottom: '190px' }} />
      <Character name="tiger"    anim="none" className="peeker edge right" style={{ width: '115px', bottom: '0' }} />
    </FadeUp>
  )
}
