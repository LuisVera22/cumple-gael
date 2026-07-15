import { useEffect, useRef, useState } from 'react'
import { invitationData } from '../data'

export default function MusicToggle({ playing, onToggle }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // Permite controlar la reproducción desde el padre (al abrir la invitación).
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.play().then(() => setIsPlaying(true)).catch(() => {})
    }
  }, [playing])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.play().then(() => setIsPlaying(true)).catch(() => {})
    } else {
      audio.pause()
      setIsPlaying(false)
    }
    onToggle?.()
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={invitationData.music.src} type="audio/mpeg" />
      </audio>

      <button className="floating-music" onClick={toggle} aria-label="Música">
        <i className={isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-music'}></i>
      </button>
    </>
  )
}
