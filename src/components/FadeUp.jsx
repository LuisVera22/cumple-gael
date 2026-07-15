import { useFadeUp } from '../hooks/useFadeUp'

/**
 * Envoltorio que aplica la animación fade-up al entrar en pantalla.
 * Equivale a <section class="fade-up"> + JS que añade ".show".
 */
export default function FadeUp({ as: Tag = 'section', className = '', children, ...rest }) {
  const { ref, visible } = useFadeUp()
  const classes = ['fade-up', visible ? 'show' : '', className].filter(Boolean).join(' ')

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  )
}
