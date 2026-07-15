import { useEffect, useState } from 'react'

function calc(target) {
  const diff = target - new Date().getTime()
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true }
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    finished: false,
  }
}

/**
 * Cuenta regresiva hacia la fecha del evento.
 * @param {string|number|Date} targetDate fecha objetivo del evento
 */
export function useCountdown(targetDate) {
  const target = new Date(targetDate).getTime()
  const [time, setTime] = useState(() => calc(target))

  useEffect(() => {
    const id = setInterval(() => setTime(calc(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  return time
}
