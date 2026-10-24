import mpcHeroVideoMp4Url from '@/assets/brand/Producer_tapping_MPC_sampler_pads_20261017154856.mp4'
import mpcHeroVideoWebmUrl from '@/assets/brand/Producer_tapping_MPC_sampler_pads.webm'
import mpcHeroPosterWebpUrl from '@/assets/brand/mpc-hero-poster.webp'

import imgHojasSecasWebp from '@/assets/media/oYKIUzFt9pk.webp'
import imgMiVerdadWebp from '@/assets/media/a7E3Cj_ypw8.webp'
import imgRescoldoWebp from '@/assets/media/Cucd-aYwcio.webp'
import imgLencioWebp from '@/assets/media/O6hnIoMC-hI.webp'
import imgRaizRevueltaWebp from '@/assets/media/UWZAxS-spEo.webp'

/**
 * Funky Roots Estudios — Repositorio Central Desacoplado
 * Catálogo multimedia y musical optimizado con recursos en WebP y WebM/MP4.
 */

export const brandMetadata = {
  name: 'FunkyRoots Estudios',
  tagline: 'Estudio de Grabación, Beatmaking y Sello Independiente',
  location: 'Santiago de Chile · Renca',
  manifestoTitle: 'El sonido como archivo vivo de la raíz urbana.',
  manifestoLead:
    'Ritmos orgánicos, registro vocal y obras audiovisuales donde el boom bap y el sample de raíz convergen en comunidad.',
  heroVideo: {
    videoWebmUrl: mpcHeroVideoWebmUrl,
    videoUrl: mpcHeroVideoMp4Url,
    posterUrl: mpcHeroPosterWebpUrl,
    youtubeFeaturedId: 'O6hnIoMC-hI',
    youtubeChannelUrl: 'https://www.youtube.com/@FunkyRootsEstudios',
    headline: 'Raíz, conexión y pulso desde el sampler.',
    subheadline:
      'Producción musical, cintas de ritmos, sesiones en vivo y sello independiente.'
  },
  parallaxManifesto: {
    backgroundImage: imgRaizRevueltaWebp,
    quote:
      'Las raíces conectan nuestra historia; la estrella central guía el sonido que construimos en comunidad.',
    pillars: [
      { title: 'Beatmaking & MPC', label: 'Cintas de ritmos, samples de jazz y texturas orgánicas' },
      { title: 'Sello & Arte', label: 'Catálogo fonográfico e ilustración analógica' },
      { title: 'Audiovisual', label: 'Videoclips oficiales y sesiones en vivo' }
    ]
  },
  contact: {
    email: 'contacto@funkyroots.cl',
    bookingEmail: 'estudios@funkyroots.cl',
    address: 'Santiago de Chile',
    socials: [
      { label: 'YouTube', url: 'https://www.youtube.com/@FunkyRootsEstudios' },
      { label: 'Instagram', url: 'https://www.instagram.com/funkyroots.cl' },
      { label: 'SoundCloud', url: 'https://soundcloud.com/funkyroots_estudios' },
      { label: 'Apple Music', url: 'https://music.apple.com/do/artist/funkyroots/1479733718' },
      { label: 'Spotify', url: 'https://open.spotify.com/playlist/2Qt6APOGuJ1BhNbqtw8MAo' }
    ]
  }
}

export const servicesData = [
  {
    id: 'srv-01',
    slug: 'produccion-musical-beatmaking',
    title: 'Producción Musical & Beatmaking',
    category: 'Confección de Ritmos',
    image: mpcHeroPosterWebpUrl,
    heroImage: mpcHeroPosterWebpUrl,
    description:
      'Instrumentales a medida entre el boom bap clásico, samples de jazz orgánico y arreglos instrumentales en estudio.',
    fullDescription: [
      'La producción musical en FunkyRoots es un proceso artesanal y orgánico. Trabajamos mano a mano con el artista desde la búsqueda de texturas y samples de vinilo hasta la estructura rítmica en el sampler MPC.',
      'Construimos instrumentales que respiran con pegada de caja y bombo analógico, líneas de bajo envolventes, guitarras en vivo e instrumentación real, asegurando que cada corte tenga peso e identidad propia.'
    ],
    stages: [
      {
        title: 'Curaduría & Concepto Rítmico',
        desc: 'Definición del tempo, tonalidad, referencias de textura (vinilo, jazz, soul) y dirección estética del beat.'
      },
      {
        title: 'Composición en MPC & Arreglos',
        desc: 'Corte de samples, secuenciación rítmica, grabación de líneas de bajo, teclados o guitarras en sala.'
      },
      {
        title: 'Estructuración & Stems',
        desc: 'Diseño de intros, puentes, drops y entrega de pistas multipista abiertas listas para la sesión vocal o mezcla.'
      }
    ],
    deliverables: [
      'Stems multipista WAV 24-bit / 48kHz para mezcla',
      'Pistas instrumentales estéreo masterizadas de referencia',
      'Acuerdo de derechos de producción y catálogo fonográfico'
    ],
    gear: [
      'Akai MPC Sampler Hardware & Secuenciador',
      'Tornamesas Technics & Archivo de Vinilos de Jazz / Soul',
      'Guitarras acústicas y eléctricas con previo analógico',
      'Teclados, sintetizadores y percusión orgánica'
    ],
    relatedWorks: [
      'Hojas Secas — J. de la Ribera (Beat Tape)',
      'Rescoldo — Quífaro & J. de la Ribera (Cinta de Ritmos)'
    ],
    relatedVideos: [
      {
        id: 'oYKIUzFt9pk',
        title: 'Dedicatoria — Hojas Secas',
        poster: imgHojasSecasWebp
      },
      {
        id: 'Cucd-aYwcio',
        title: 'Agua Fría — Rescoldo',
        poster: imgRescoldoWebp
      }
    ]
  },
  {
    id: 'srv-02',
    slug: 'grabacion-mezcla-mastering',
    title: 'Grabación, Mezcla & Mastering',
    category: 'Ingeniería de Estudio',
    image: imgMiVerdadWebp,
    heroImage: imgMiVerdadWebp,
    description:
      'Captura vocal e instrumental cuidando la pegada rítmica, la calidez tímbrica y la claridad lírica de cada corte.',
    fullDescription: [
      'En nuestra sala acondicionada acústicamente capturamos voces, instrumentos y doblajes con microfonía de condensador y preamplificadores con carácter, cuidando la interpretación y la dinámica vocal del intérprete.',
      'En la fase de mezcla equilibramos planos, ecualización quirúrgica y musical, compresión paralela y saturación analógica. El mastering entrega el volumen competitivo para Spotify y plataformas digitales, preservando la dinámica natural y la profundidad de graves.'
    ],
    stages: [
      {
        title: 'Captura Vocal en Sala Acondicionada',
        desc: 'Microfonía dedicada, doblajes líricos, apoyos y dirección en cabina para registrar tomas contundentes.'
      },
      {
        title: 'Mezcla Orgánica por Pistas',
        desc: 'Limpieza tímbrica, balance de frecuencias, espacialidad con reverbs analógicas y pegada contundente.'
      },
      {
        title: 'Masterización Digital & Física',
        desc: 'Ajuste de sonoridad (LUFS) para streaming, limitación transparente y render optimizado para plataformas y cassette.'
      }
    ],
    deliverables: [
      'Master Estéreo WAV 24-bit / 48kHz optimizado para plataformas digitales',
      'Versiones Instrumental y Acapella masterizadas para shows en vivo',
      'Master especial con dinámica abierta para edición en cassette o vinilo'
    ],
    gear: [
      'Micrófonos de condensador de gran diafragma y dinámicos para rap',
      'Cadena de preamplificación a bulbos y compresión analógica',
      'Monitoreo de campo cercano calibrado en sala tratada acústicamente',
      'Conversión AD/DA de alta fidelidad y procesamiento dedicado'
    ],
    relatedWorks: [
      'Mi Verdad — J. de la Ribera & Calde',
      '¿Quién soy yo? — Lencio'
    ],
    relatedVideos: [
      {
        id: 'a7E3Cj_ypw8',
        title: 'Mi Verdad — J. de la Ribera & Calde',
        poster: imgMiVerdadWebp
      },
      {
        id: 'O6hnIoMC-hI',
        title: '¿Quién soy yo? — Lencio',
        poster: imgLencioWebp
      }
    ]
  },
  {
    id: 'srv-03',
    slug: 'realizacion-audiovisual',
    title: 'Realización Audiovisual',
    category: 'Dirección Visual',
    image: imgLencioWebp,
    heroImage: imgLencioWebp,
    description:
      'Rodaje y edición de videoclips oficiales y sesiones conceptuales en vivo para proyectos del catálogo.',
    fullDescription: [
      'La imagen es la extensión natural de la música. Desarrollamos obras audiovisuales cinematográficas con identidad urbana, cuidando el encuadre, la iluminación natural y el montaje rítmico sincronizado al compás del beat.',
      'Desde videoclips oficiales en locaciones urbanas hasta Live Sessions registradas en el estudio con sonido directo multipista, cada rodaje comunica la verdad del artista y la energía colectiva de FunkyRoots.'
    ],
    stages: [
      {
        title: 'Guion & Dirección de Arte',
        desc: 'Desarrollo del concepto visual, storyboard, scout de locaciones y paleta de color acorde a la atmósfera musical.'
      },
      {
        title: 'Jornada de Rodaje en Locación / Sala',
        desc: 'Filmación con ópticas de cine, cámara en mano, iluminación cuidada y playback sincronizado.'
      },
      {
        title: 'Montaje, Colorimetría & Master 4K',
        desc: 'Corte editorial dinámico, gradación de color cinematográfica y exportación final en 4K UHD.'
      }
    ],
    deliverables: [
      'Videoclip Master en 4K UHD ProRes y MP4 de alta tasa de bits',
      'Cortes verticales optimizados para Instagram Reels, Shorts y TikTok (9:16)',
      'Diseño de miniatura oficial y distribución en el canal @FunkyRootsEstudios'
    ],
    gear: [
      'Cámaras de cine digital con grabación en perfil logarítmico',
      'Ópticas fijas luminosas y filtros de difusión para textura analógica',
      'Iluminación continua LED bicolor y accesorios de rodaje',
      'Suite de post-producción, edición no lineal y gradación de color'
    ],
    relatedWorks: [
      '¿Quién soy yo? (Videoclip Oficial) — Lencio',
      'Raíz Revuelta (Sesión Conceptual) — Da Mirloz Clan'
    ],
    relatedVideos: [
      {
        id: 'O6hnIoMC-hI',
        title: '¿Quién soy yo? (Videoclip Oficial) — Lencio',
        poster: imgLencioWebp
      },
      {
        id: 'UWZAxS-spEo',
        title: 'Raíz Revuelta — Da Mirloz Clan',
        poster: imgRaizRevueltaWebp
      }
    ]
  },
  {
    id: 'srv-04',
    slug: 'direccion-de-arte-collage',
    title: 'Dirección de Arte & Collage',
    category: 'Identidad Visual',
    image: imgRescoldoWebp,
    heroImage: imgRescoldoWebp,
    description:
      'Ilustración y collage analógico para portadas, ediciones físicas en cassette y sistemas gráficos de lanzamientos.',
    fullDescription: [
      'Diseñamos la identidad gráfica tangible de cada obra. Creemos en el valor de lo táctil: collage hecho a mano con recortes de prensa, texturas de papel escaneadas, tipografía editorial y tratamiento visual analógico.',
      'Creamos portadas oficiales para Spotify y Apple Music, así como empaques completos para cassettes, fanzines de acompañamiento y gráfica promocional para el lanzamiento de cada disco o single.'
    ],
    stages: [
      {
        title: 'Exploración Visual & Moodboard',
        desc: 'Búsqueda de archivo gráfico, texturas de papel, referencias tipográficas y definición del concepto.'
      },
      {
        title: 'Confección Manual de Collage & Ilustración',
        desc: 'Composición manual y mixta, ensamblaje de capas, rasgado de papel y diseño tipográfico.'
      },
      {
        title: 'Artes Finales para Físico & Digital',
        desc: 'Plantillas de imprenta para J-Card de cassette, contraportadas y archivos digitales en alta resolución.'
      }
    ],
    deliverables: [
      'Arte de portada oficial 3000x3000px a 300 DPI (RGB)',
      'Plantillas para imprenta (J-Card para cassette, funda de disco o digipak)',
      'Piezas gráficas de acompañamiento para redes y plataformas'
    ],
    gear: [
      'Escáner de alta resolución para texturas físicas y papel',
      'Archivo editorial analógico de prensa, revistas y fotografía',
      'Herramientas tradicionales de dibujo, corte y grabado manual',
      'Software de maquetación vectorial y separación de color para imprenta'
    ],
    relatedWorks: [
      'Rescoldo; cinta de ritmos — Portada original por Quífaro',
      'Hojas Secas — Arte visual de J. de la Ribera'
    ],
    relatedVideos: [
      {
        id: 'Cucd-aYwcio',
        title: 'Rescoldo — Quífaro',
        poster: imgRescoldoWebp
      },
      {
        id: 'oYKIUzFt9pk',
        title: 'Hojas Secas — J. de la Ribera',
        poster: imgHojasSecasWebp
      }
    ]
  }
]

export const artistsData = [
  {
    id: 'art-01',
    slug: 'j-de-la-ribera',
    name: 'J. de la Ribera',
    role: 'Productor Musical, Beatmaker & MC',
    genre: 'Boom Bap, Jazz Samples & Lo-Fi',
    origin: 'Santiago',
    yearsActive: '2015 — Presente',
    shortBio:
      'Explora el cruce entre el boom bap clásico, samples de jazz orgánico y texturas lo-fi en beat tapes y producciones colaborativas.',
    fullBio: [
      'Productor y beatmaker pilar de FunkyRoots Estudios. Su sonido cruza el boom bap clásico con samples de jazz orgánico y atmósferas lo-fi.',
      'Ha firmado obras esenciales del catálogo como el beat tape "Hojas Secas" (2020) y la cinta de ritmos "Rescoldo" (2019) mano a mano junto a Quífaro, además de producciones junto a Calde en "Mi verdad", "Amanece" y "Abril".'
    ],
    coverImage: imgHojasSecasWebp,
    heroImage: imgMiVerdadWebp,
    lineup: [
      'J. de la Ribera — Producción, Sampler, Beats & Arte',
      'Quífaro — Co-producción en "Hojas Secas" y "Rescoldo"',
      'Calde — Guitarras y arreglos en "Mi verdad", "Amanece" y "Abril"'
    ],
    externalLinks: {
      youtube: 'https://www.youtube.com/watch?v=oYKIUzFt9pk',
      spotify: 'https://open.spotify.com/playlist/2Qt6APOGuJ1BhNbqtw8MAo',
      soundcloud: 'https://soundcloud.com/funkyroots_estudios',
      instagram: 'https://www.instagram.com/funkyroots.cl'
    },
    discography: [
      {
        id: 'disc-jdlr-01',
        title: 'Hojas Secas',
        year: '2020',
        type: 'Beat Tape · 8 Tracks',
        role: 'Producción íntegra y arte (junto a Quífaro y Diego)',
        cover: imgHojasSecasWebp
      },
      {
        id: 'disc-jdlr-02',
        title: 'Rescoldo',
        year: '2019',
        type: 'Cinta de Ritmos',
        role: 'Co-producción junto a Quífaro',
        cover: imgRescoldoWebp
      },
      {
        id: 'disc-jdlr-03',
        title: 'Amanece / Abril',
        year: '2020 — 2021',
        type: 'Singles Colaborativos',
        role: 'Junto a Calde y Quífaro',
        cover: imgMiVerdadWebp
      }
    ],
    videos: [
      {
        id: 'vid-jdlr-01',
        videoId: 'oYKIUzFt9pk',
        youtubeId: 'oYKIUzFt9pk',
        title: 'Dedicatoria — Hojas Secas',
        year: '2020',
        poster: imgHojasSecasWebp
      },
      {
        id: 'vid-jdlr-02',
        videoId: 'a7E3Cj_ypw8',
        youtubeId: 'a7E3Cj_ypw8',
        title: 'Mi Verdad (junto a Calde)',
        year: '2015',
        poster: imgMiVerdadWebp
      }
    ]
  },
  {
    id: 'art-02',
    slug: 'quifaro',
    name: 'Quífaro',
    role: 'Beatmaker, Productor & Artista Visual',
    genre: 'Instrumentales Crudas & Collage Analógico',
    origin: 'Santiago',
    yearsActive: '2018 — Presente',
    shortBio:
      'Combina la confección de instrumentales crudas y atmosféricas con la ilustración y el collage analógico para las portadas del sello.',
    fullBio: [
      'Productor de ritmos e ilustrador/collagista. Une la creación de instrumentales atmosféricas con la dirección de arte analógica para las ediciones del estudio.',
      'Su obra "Rescoldo; cinta de ritmos" (2019), producida junto a J. de la Ribera, sintetiza su doble disciplina con música y arte de portada hechos a mano, sumando colaboraciones en "Hojas Secas" y "Abril".'
    ],
    coverImage: imgRescoldoWebp,
    heroImage: imgRescoldoWebp,
    lineup: [
      'Quífaro — Beatmaking, Producción, Ilustración & Collage',
      'J. de la Ribera — Co-producción en "Rescoldo" y "Hojas Secas"',
      'Calde — Colaboración instrumental en "Abril"'
    ],
    externalLinks: {
      youtube: 'https://www.youtube.com/watch?v=Cucd-aYwcio',
      spotify: 'https://open.spotify.com/playlist/2Qt6APOGuJ1BhNbqtw8MAo',
      soundcloud: 'https://soundcloud.com/funkyroots_estudios',
      instagram: 'https://www.instagram.com/funkyroots.cl'
    },
    discography: [
      {
        id: 'disc-qf-01',
        title: 'Rescoldo; cinta de ritmos',
        year: '2019',
        type: 'Cinta de Ritmos',
        role: 'Producción junto a J. de la Ribera y arte de portada original',
        cover: imgRescoldoWebp
      },
      {
        id: 'disc-qf-02',
        title: 'Hojas Secas',
        year: '2020',
        type: 'Beat Tape',
        role: 'Colaboraciones en "Aurora" y "A través"',
        cover: imgHojasSecasWebp
      },
      {
        id: 'disc-qf-03',
        title: 'Abril',
        year: '2021',
        type: 'Single Colaborativo',
        role: 'Junto a J. de la Ribera y Calde',
        cover: imgRaizRevueltaWebp
      }
    ],
    videos: [
      {
        id: 'vid-qf-01',
        videoId: 'Cucd-aYwcio',
        youtubeId: 'Cucd-aYwcio',
        title: 'Agua Fría — Rescoldo',
        year: '2019',
        poster: imgRescoldoWebp
      }
    ]
  },
  {
    id: 'art-03',
    slug: 'lencio',
    name: 'Lencio',
    role: 'MC & Compositor',
    genre: 'Rap Subterráneo & Boom Bap',
    origin: 'Renca, Santiago',
    yearsActive: 'Activo — Presente',
    shortBio:
      'Lírica frontal e introspectiva arraigada en la disciplina del rap subterráneo chileno junto a Deasfalto Crew y Da Mirloz Clan.',
    fullBio: [
      'MC originario de Renca con una escritura frontal, técnica e introspectiva arraigada en el rap subterráneo.',
      'Integrante de Deasfalto Crew y Da Mirloz Clan, protagoniza el lanzamiento audiovisual "¿Quién soy yo?" (2025), corte principal de su álbum "Lucha Eterna".'
    ],
    coverImage: imgLencioWebp,
    heroImage: imgLencioWebp,
    lineup: [
      'Lencio — Voz principal, lírica y composición',
      'Deasfalto Crew & Da Mirloz Clan — Colectivos',
      'FunkyRoots Estudios — Producción y realización audiovisual'
    ],
    externalLinks: {
      youtube: 'https://www.youtube.com/watch?v=O6hnIoMC-hI',
      spotify: 'https://open.spotify.com/playlist/2Qt6APOGuJ1BhNbqtw8MAo',
      soundcloud: 'https://soundcloud.com/funkyroots_estudios',
      instagram: 'https://www.instagram.com/funkyroots.cl'
    },
    discography: [
      {
        id: 'disc-len-01',
        title: 'Lucha Eterna',
        year: '2025',
        type: 'Álbum LP',
        role: 'Incluye el corte y videoclip oficial "¿Quién soy yo?"',
        cover: imgLencioWebp
      }
    ],
    videos: [
      {
        id: 'vid-len-01',
        videoId: 'O6hnIoMC-hI',
        youtubeId: 'O6hnIoMC-hI',
        title: '¿Quién soy yo? (Videoclip Oficial)',
        year: '2025',
        poster: imgLencioWebp
      }
    ]
  },
  {
    id: 'art-04',
    slug: 'da-mirloz-clan',
    name: 'Da Mirloz Clan',
    role: 'Colectivo de Hip-Hop',
    genre: 'Hip-Hop Colectivo & Sesiones',
    origin: 'Santiago',
    yearsActive: '2019 — Presente',
    shortBio:
      'Colectivo de MCs y productores que articula rimas en bloque, tornamesismo y sesiones conceptuales en vivo.',
    fullBio: [
      'Agrupación vinculada al catálogo del estudio con lanzamientos colaborativos que reúnen a distintos MCs y beatmakers de la escena.',
      'Destacan hitos audiovisuales como la sesión conceptual "Raíz Revuelta" (2019) y el corte "Oportunidad" (2024) junto a J. de la Ribera, Maskao y 10BAG.'
    ],
    coverImage: imgRaizRevueltaWebp,
    heroImage: imgRaizRevueltaWebp,
    lineup: [
      'Da Mirloz Clan — Colectivo de MCs y compositores',
      'J. de la Ribera — Producción musical',
      'Maskao & 10BAG — Colaboradores en "Oportunidad"'
    ],
    externalLinks: {
      youtube: 'https://www.youtube.com/watch?v=UWZAxS-spEo',
      spotify: 'https://open.spotify.com/playlist/2Qt6APOGuJ1BhNbqtw8MAo',
      soundcloud: 'https://soundcloud.com/funkyroots_estudios',
      instagram: 'https://www.instagram.com/funkyroots.cl'
    },
    discography: [
      {
        id: 'disc-dmc-01',
        title: 'Oportunidad',
        year: '2024',
        type: 'Single Colaborativo',
        role: 'Junto a J. de la Ribera, Maskao y 10BAG',
        cover: imgRaizRevueltaWebp
      },
      {
        id: 'disc-dmc-02',
        title: 'Raíz Revuelta',
        year: '2019',
        type: 'Sesión Conceptual',
        role: 'Registro audiovisual en estudio',
        cover: imgRaizRevueltaWebp
      }
    ],
    videos: [
      {
        id: 'vid-dmc-01',
        videoId: 'UWZAxS-spEo',
        youtubeId: 'UWZAxS-spEo',
        title: 'Raíz Revuelta (Sesión en Vivo)',
        year: '2019',
        poster: imgRaizRevueltaWebp
      }
    ]
  }
]

export const worksData = [
  {
    id: 'wrk-01',
    category: 'Videoclip Oficial',
    year: '2025',
    title: '¿Quién soy yo?',
    artistName: 'Lencio',
    artistSlug: 'lencio',
    description:
      'Corte principal del álbum "Lucha Eterna", filmado y producido desde Renca.',
    videoId: 'O6hnIoMC-hI',
    youtubeId: 'O6hnIoMC-hI',
    poster: imgLencioWebp,
    youtubeUrl: 'https://www.youtube.com/watch?v=O6hnIoMC-hI'
  },
  {
    id: 'wrk-02',
    category: 'Beat Tape · 8 Tracks',
    year: '2020',
    title: 'Hojas Secas',
    artistName: 'J. de la Ribera',
    artistSlug: 'j-de-la-ribera',
    description:
      'Obra instrumental íntegra con colaboraciones de Quífaro y Diego.',
    videoId: 'oYKIUzFt9pk',
    youtubeId: 'oYKIUzFt9pk',
    poster: imgHojasSecasWebp,
    youtubeUrl: 'https://www.youtube.com/watch?v=oYKIUzFt9pk'
  },
  {
    id: 'wrk-03',
    category: 'Cinta de Ritmos',
    year: '2019',
    title: 'Rescoldo',
    artistName: 'Quífaro & J. de la Ribera',
    artistSlug: 'quifaro',
    description:
      'Ritmos crudos y collage analógico hechos a mano en el estudio.',
    videoId: 'Cucd-aYwcio',
    youtubeId: 'Cucd-aYwcio',
    poster: imgRescoldoWebp,
    youtubeUrl: 'https://www.youtube.com/watch?v=Cucd-aYwcio'
  },
  {
    id: 'wrk-04',
    category: 'Sesión Conceptual',
    year: '2019',
    title: 'Raíz Revuelta',
    artistName: 'Da Mirloz Clan',
    artistSlug: 'da-mirloz-clan',
    description:
      'Encuentro audiovisual en vivo entre rap subterráneo e instrumentación orgánica.',
    videoId: 'UWZAxS-spEo',
    youtubeId: 'UWZAxS-spEo',
    poster: imgRaizRevueltaWebp,
    youtubeUrl: 'https://www.youtube.com/watch?v=UWZAxS-spEo'
  },
  {
    id: 'wrk-05',
    category: 'Single Colaborativo',
    year: '2015',
    title: 'Mi Verdad',
    artistName: 'J. de la Ribera & Calde',
    artistSlug: 'j-de-la-ribera',
    description:
      'Corte clásico que une producción en sampler con guitarras y arreglos de Calde.',
    videoId: 'a7E3Cj_ypw8',
    youtubeId: 'a7E3Cj_ypw8',
    poster: imgMiVerdadWebp,
    youtubeUrl: 'https://www.youtube.com/watch?v=a7E3Cj_ypw8'
  }
]

export const collaboratorsData = [
  {
    id: 'col-01',
    name: 'Calde (Felipe Calderón)',
    role: 'Guitarras, Arreglos & Co-producción',
    bio: 'Instrumentación orgánica y armonía en cortes como "Mi verdad", "Amanece" y "Abril".'
  },
  {
    id: 'col-02',
    name: 'Fabián Rocco',
    role: 'Voz & Composición',
    bio: 'Intérprete y autor invitado en producciones vocales del estudio como "Quedaría".'
  },
  {
    id: 'col-03',
    name: '10BAG & Maskao',
    role: 'MCs Invitados',
    bio: 'Rimas y métrica en lanzamientos colaborativos junto al colectivo como "Oportunidad".'
  },
  {
    id: 'col-04',
    name: 'Nicolás Burgos Pérez',
    role: 'Identidad Visual & Diseño',
    bio: 'Creador del sistema gráfico e isotipo oficial de raíces y estrella central.'
  }
]

export const funkyRootsRepository = {
  getBrandMetadata() {
    return brandMetadata
  },
  getServices() {
    return servicesData
  },
  getServiceBySlug(slug) {
    return servicesData.find((service) => service.slug === slug) || null
  },
  getArtists() {
    return artistsData
  },
  getArtistBySlug(slug) {
    return artistsData.find((artist) => artist.slug === slug) || null
  },
  getWorks() {
    return worksData
  },
  getCollaborators() {
    return collaboratorsData
  }
}
