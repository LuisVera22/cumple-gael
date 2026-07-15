import { invitationData } from '../data'
import Character from './Character'

export default function Welcome({ onOpen }) {
  const { subtitle, name, buttonText } = invitationData.welcome

  return (
    <section className="welcome section-peek">
      {/* Marco de hojas: 4 esquinas para enmarcar toda la pantalla */}
      <img className="leaf-corner top left" src="/assets/ui/leaves.png" alt="" aria-hidden="true" />
      <img className="leaf-corner top right" src="/assets/ui/leaves.png" alt="" aria-hidden="true" />
      <img className="leaf-corner bottom left" src="/assets/ui/leaves.png" alt="" aria-hidden="true" />
      <img className="leaf-corner bottom right" src="/assets/ui/leaves.png" alt="" aria-hidden="true" />

      {/* Abejita volando por el cielo (vuelo en arcos + flotación) */}
      <div className="bee-flight" aria-hidden="true">
        <img className="bee" src="/assets/characters/abeja.png" alt="" />
      </div>

      <div className="welcome-content">
        <h3 className="welcome-subtitle">{subtitle}</h3>
        <h1 className="welcome-title">{name}</h1>
        <button className="btn-primary" onClick={onOpen}>
          {buttonText}
        </button>
      </div>

      {/* PlimPlim asomándose desde el borde inferior (mitad hacia arriba) */}
      <img
        className="welcome-hero"
        src="/assets/characters/plim-plim.png"
        alt="PlimPlim explorador"
      />

      {/* Personajes asomándose (estáticos, anclados a su arbusto), posiciones invertidas */}
      <Character name="elephant" anim="none" className="peeker left"        style={{ width: '120px' }} />
      <Character name="monkey"   anim="none" className="peeker right bushy" style={{ width: '150px' }} />
    </section>
  )
}
