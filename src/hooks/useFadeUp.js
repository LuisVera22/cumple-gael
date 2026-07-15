import { useEffect, useRef, useState } from 'react'

/**
 * Reproduce la animación ".fade-up" -> ".show" del proyecto original.
 * Cuando el elemento entra en el viewport, añade la clase "show".
 */
export function useFadeUp(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      options
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}
