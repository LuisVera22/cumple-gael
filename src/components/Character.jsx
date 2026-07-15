/**
 * Personaje recortado (sin fondo) con movimiento sutil e independiente.
 *
 * props:
 *  - name: archivo en /assets/characters (sin extensión)
 *  - anim: 'bob' | 'sway' | 'swing' | 'pop'
 *  - className: p.ej. 'peeker left' para asomarse desde un borde
 *  - style: tamaño/posición (width, left, right, bottom...)
 *  - dur/delay/tilt: parámetros de la animación
 */
export default function Character({
  name,
  anim = 'bob',
  className = '',
  style = {},
  dur = '4s',
  delay = '0s',
  tilt = 0,
  alt = '',
}) {
  const animClass = anim && anim !== 'none' ? `anim-${anim}` : ''
  return (
    <img
      src={`/assets/characters/${name}.png`}
      alt={alt}
      aria-hidden={alt ? undefined : true}
      className={`char ${animClass} ${className}`.replace(/\s+/g, ' ').trim()}
      style={{
        '--dur': dur,
        '--tilt': `${tilt}deg`,
        animationDelay: delay,
        ...style,
      }}
      draggable={false}
    />
  )
}
