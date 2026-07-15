import { useMemo } from 'react'

/* Telón de arbustos: en fase "closing" brotan matas de hojas sueltas
   (pop con rebote) en orden aleatorio pero avanzando de los bordes al
   centro; en fase "opening" cada mitad se desliza hacia su lado (cortina). */

// Menos sprites pero más grandes: misma cobertura, mucho menos costo por frame
const COLS = 7 // columnas por mitad: 0 = borde exterior, 6 = centro
const ROWS = 4

function makeSprites() {
  const sprites = []
  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r < ROWS; r++) {
      sprites.push({
        x: (c / (COLS - 1)) * 100 + (Math.random() * 4 - 2),   // % desde el borde exterior
        y: (r / (ROWS - 1)) * 104 - 2 + (Math.random() * 6 - 3),
        rot: Math.random() * 70 - 35,
        scale: 1.2 + Math.random() * 0.35,
        flip: Math.random() < 0.5,
        // la columna manda la secuencia (afuera → centro); el azar la desordena un poco
        delay: c * 150 + Math.random() * 130,
      })
    }
  }
  return sprites
}

function Half({ side, sprites }) {
  return (
    <div className={`curtain-half ${side}`}>
      {sprites.map((s, i) => (
        <img
          key={i}
          className="leaf-sprite"
          src="/assets/ui/bush-clump.png"
          alt=""
          style={{
            [side === 'left' ? 'left' : 'right']: `${s.x}%`,
            top: `${s.y}%`,
            '--rot': `${s.rot}deg`,
            '--s': s.scale,
            '--sx': s.flip ? -1 : 1,
            animationDelay: `${s.delay}ms`,
          }}
        />
      ))}
    </div>
  )
}

export default function LeafCurtain({ phase }) {
  const left = useMemo(makeSprites, [])
  const right = useMemo(makeSprites, [])

  return (
    <div className={`leaf-curtain ${phase}`} aria-hidden="true">
      <Half side="left" sprites={left} />
      <Half side="right" sprites={right} />
    </div>
  )
}
