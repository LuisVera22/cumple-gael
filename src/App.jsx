import { useState } from 'react'
import Welcome from './components/Welcome'
import Invitation from './components/Invitation'
import MusicToggle from './components/MusicToggle'

export default function App() {
  const [opened, setOpened] = useState(false)

  const handleOpen = () => setOpened(true)

  return (
    <>
      <MusicToggle playing={opened} />

      {!opened ? <Welcome onOpen={handleOpen} /> : <Invitation />}
    </>
  )
}
