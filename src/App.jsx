import { useState, useRef } from 'react'
import Welcome from './components/Welcome'
import Invitation from './components/Invitation'
import MusicToggle from './components/MusicToggle'
import LeafCurtain from './components/LeafCurtain'

const FILL_MS = 1800   // los arbustos brotan hasta cubrir la pantalla
const OPEN_MS = 1100   // la cortina se abre revelando la invitación

export default function App() {
  // welcome → closing (se llena de arbustos) → opening (cortina) → opened
  const [stage, setStage] = useState('welcome')
  const timers = useRef([])

  const handleOpen = () => {
    setStage('closing')
    timers.current.push(setTimeout(() => setStage('opening'), FILL_MS))
    timers.current.push(setTimeout(() => setStage('opened'), FILL_MS + OPEN_MS))
  }

  const showWelcome = stage === 'welcome' || stage === 'closing'

  return (
    <>
      <MusicToggle playing={stage !== 'welcome'} />

      {showWelcome ? <Welcome onOpen={handleOpen} /> : <Invitation />}

      {(stage === 'closing' || stage === 'opening') && <LeafCurtain phase={stage} />}
    </>
  )
}
