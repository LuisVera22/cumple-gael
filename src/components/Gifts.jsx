import { invitationData } from '../data'
import FadeUp from './FadeUp'

export default function Gifts() {
  const { title, items } = invitationData.gifts
  if (!items || items.length === 0) return null

  return (
    <FadeUp className="gifts-section">
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
      </div>
    </FadeUp>
  )
}
