import FadeUp from './FadeUp'
import Countdown from './Countdown'
import Details from './Details'
import InfoCards from './InfoCards'
import Gifts from './Gifts'
import Confirm from './Confirm'
import Final from './Final'

export default function Invitation() {
  return (
    <main className="invitation">
      {/* Abejita volando sobre la invitación (fija al viewport durante el scroll) */}
      <div className="bee-flight bee-fixed" aria-hidden="true">
        <img className="bee" src="/assets/characters/abeja.png" alt="" />
      </div>

      {/* PORTADA / BANNER */}
      <FadeUp className="hero">
        <img
          src="/assets/img/banner.jpeg"
          className="hero-image"
          alt="Cumple 1 añito de Gael - La aventura más divertida"
        />
      </FadeUp>

      <div className="container-center">
        <Countdown />
        <Details />
        <InfoCards />
        <Gifts />
        <Confirm />
      </div>

      <Final />
    </main>
  )
}
