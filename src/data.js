/**
 * Contenido de la invitación.
 * Edita aquí los textos, fechas y enlaces.
 */
export const invitationData = {
  // Pantalla de bienvenida
  welcome: {
    subtitle: '¡La aventura más divertida!',
    name: 'GAEL',
    buttonText: 'Abrir Invitación',
  },

  // Música de fondo (archivo dentro de /public)
  music: {
    src: '/assets/music/abejita-plim-plim.mpeg',
  },

  // Fecha objetivo para la cuenta regresiva (formato ISO local)
  eventDate: '2026-07-24T17:00:00',

  // Detalles de la aventura
  details: {
    date: '24 de julio',
    time: '5:00 p.m.',
    place: 'Casa de mi\nmamita Eda',
  },

  // Enlace del mapa (Google Maps)
  mapUrl: 'https://maps.app.goo.gl/YHVAyC2NQtum9wAB6?g_st=iwb',

  // Tarjetas de información
  cards: {
    dressCode: {
      title: 'Dress code',
      text: 'Evitar los colores\nverdes y marrones',
    },
    location: {
      title: 'Ubicación',
      buttonText: '¡Haz clic aquí!',
    },
    photos: {
      title: 'Detalles',
      text: 'Sesión de fotos\ny compartir',
    },
  },

  // Lista de regalos
  gifts: {
    title: '¡Lista de regalos!',
    items: [
      'Medias talla 12 M',
      'Pack de pañitos húmedos',
      'Shampoo y acondicionador para bebé',
      'Pañales Babysec premium XG',
      'Ropa: Verano 1.5 años - invierno 2 años',
      'Zapato: 13 cm',
      'Juguetes variados',
    ],
  },

  // Confirmar asistencia (papá y mamá por WhatsApp)
  confirm: {
    title: '¡Confirma asistencia!',
    text: 'Tu compañía hará esta aventura aún más especial',
    message: 'Confirmo mi asistencia al primer año de Gael 🎉',
    whatsapps: [
      { label: 'Papá', phone: '51945952161' },
      { label: 'Mamá', phone: '51936431952' },
    ],
  },

  // Sección final
  final: {
    text: '¡Te esperamos para vivir esta aventura!',
    title: 'GAEL',
    subtitle: '¡No faltes!',
  },
}
