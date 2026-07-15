import { useCountdown } from '../hooks/useCountdown'
import { invitationData } from '../data'
import FadeUp from './FadeUp'

const pad = (n) => String(n).padStart(2, '0')

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(invitationData.eventDate)

  return (
    <FadeUp className="countdown-sec">
      <h2>Faltan</h2>
      <div className="timer-boxes">
        <div className="timer-box"><span>{pad(days)}</span><p>Días</p></div>
        <div className="timer-box"><span>{pad(hours)}</span><p>Hrs</p></div>
        <div className="timer-box"><span>{pad(minutes)}</span><p>Min</p></div>
        <div className="timer-box"><span>{pad(seconds)}</span><p>Seg</p></div>
      </div>
    </FadeUp>
  )
}
