import { invitationData } from '../data'

export default function Welcome({ onOpen }) {
  const { subtitle, name, buttonText } = invitationData.welcome

  return (
    <section className="welcome">
      <h3 className="welcome-subtitle">{subtitle}</h3>
      <h1 className="welcome-title">{name}</h1>
      <button className="btn-primary" onClick={onOpen}>
        {buttonText}
      </button>
    </section>
  )
}
