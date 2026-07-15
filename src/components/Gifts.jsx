import { invitationData } from '../data'
import FadeUp from './FadeUp'
import Character from './Character'

export default function Gifts() {
  const { title, items } = invitationData.gifts
  if (!items || items.length === 0) return null

  return (
    <FadeUp className="gifts-section section-peek">
      <h2 className="gifts-title">{title}</h2>
      <div className="gifts-box">
        <ul className="gifts-list">
          {items.map((item, i) => (
            <li key={i}>
              <i className="fa-solid fa-gift"></i>
              {item}
            </li>
          ))}
        </ul>

        {/* Oso dentro del contenedor (esquina libre), con movimiento ligero */}
        <Character name="bear" anim="none" className="float-soft" dur="4.6s" style={{ right: '18px', bottom: '10px', width: '92px' }} />
      </div>
    </FadeUp>
  )
}
