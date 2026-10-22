import mpcHeroVideoUrl from '@/assets/brand/Producer_tapping_MPC_sampler_pads_20261017154856.mp4'

/**
 * Funky Roots Estudios — Repositorio Central Desacoplado (Clean Frontend Architecture)
 * Fuente única de verdad con el catálogo real extraído de @FunkyRootsEstudios.
 */

export const brandMetadata = {
  name: 'FunkyRoots Estudios',
  tagline: 'Estudio de Grabación, Beatmaking & Sello Independiente',
  location: 'Santiago de Chile // Renca & Territorio Sur',
  manifestoTitle: 'El sonido como archivo vivo de la raíz urbana.',
  manifestoLead:
    'Confeccionamos ritmos, registramos voces y editamos obras fonográficas y audiovisuales donde el boom bap, el sample orgánico y la disciplina del rap subterráneo convergen con identidad propia.',
  heroVideo: {
    videoUrl: mpcHeroVideoUrl,
    posterUrl: 'https://i.ytimg.com/vi/oYKIUzFt9pk/hqdefault.jpg',
    youtubeFeaturedId: 'O6hnIoMC-hI',
    youtubeChannelUrl: 'https://www.youtube.com/@FunkyRootsEstudios',
    badgeCode: 'FUNKYROOTS ESTUDIOS // CATÁLOGO OFICIAL',
    headline: 'RAÍZ, CONEXIÓN Y PULSO DESDE EL SAMPLER.',
    subheadline:
      'Producción musical, cintas de ritmos, sesiones conceptuales y sello independiente de hip-hop y música de raíz urbana.'
  },
  parallaxManifesto: {
    index: '00 // IDENTIDAD & ENFOQUE',
    backgroundImage: 'https://i.ytimg.com/vi/UWZAxS-spEo/maxresdefault.jpg',
    quote:
      'El símbolo transmite raíces, conexión y crecimiento; mientras que la estrella central otorga un eje de referencia y protagonismo al sonido que construimos en comunidad.',
    specs: [
      { code: 'BEATMAKING & MPC', label: 'Cintas de Ritmos, Samples de Jazz & Texturas Lo-Fi' },
      { code: 'SELLO & ARCHIVO', label: 'Catálogo Fonográfico & Dirección de Arte Analógica' },
      { code: 'AUDIOVISUAL', label: 'Videoclips Oficiales & Sesiones Conceptuales' }
    ]
  },
  contact: {
    email: 'contacto@funkyroots.cl',
    bookingEmail: 'estudios@funkyroots.cl',
    address: 'Santiago de Chile — FunkyRoots Estudios',
    socials: [
      { label: 'YouTube', url: 'https://www.youtube.com/@FunkyRootsEstudios' },
      { label: 'Instagram', url: 'https://www.instagram.com/funkyroots.cl' },
      { label: 'SoundCloud', url: 'https://soundcloud.com/funkyroots_estudios' },
      { label: 'Apple Music', url: 'https://music.apple.com/do/artist/funkyroots/1479733718' },
      { label: 'Spotify Playlist', url: 'https://open.spotify.com/playlist/2Qt6APOGuJ1BhNbqtw8MAo' }
    ]
  }
}

export const servicesData = [
  {
    id: 'srv-01',
    code: 'SRV // 01',
    title: 'Producción Musical & Beatmaking',
    category: 'CONFECCIÓN DE RITMOS',
    duration: 'Singles, Beat Tapes & LP',
    description:
      'Creación de instrumentales a medida explorando el cruce entre el boom bap clásico, samples de jazz orgánico, arreglos de guitarra y texturas atmosféricas.',
    deliverables: [
      'Producción íntegra de álbumes y cintas de ritmos',
      'Arreglos instrumentales y co-producción en estudio',
      'Entrega de stems multipista para mezcla'
    ]
  },
  {
    id: 'srv-02',
    code: 'SRV // 02',
    title: 'Grabación Vocal, Mezcla & Mastering',
    category: 'INGENIERÍA DE ESTUDIO',
    duration: 'Sesiones por Proyecto',
    description:
      'Captura de MCs, coros e instrumentación acústica/eléctrica con cadena de estudio dedicada, cuidando la pegada rítmica y la claridad lírica.',
    deliverables: [
      'Dirección de sesión vocal y doblajes',
      'Mezcla con carácter orgánico y cohesión tímbrica',
      'Mastering para plataformas digitales y formato físico'
    ]
  },
  {
    id: 'srv-03',
    code: 'SRV // 03',
    title: 'Realización Audiovisual & Sesiones',
    category: 'DIRECCIÓN VISUAL',
    duration: 'Producción Integral',
    description:
      'Desarrollo de videoclips oficiales y obras conceptuales en vivo para el catálogo de FunkyRoots Estudios y proyectos asociados.',
    deliverables: [
      'Guion técnico, rodaje y montaje editorial',
      'Sesiones conceptuales grabadas en estudio',
      'Estreno y distribución en @FunkyRootsEstudios'
    ]
  },
  {
    id: 'srv-04',
    code: 'SRV // 04',
    title: 'Dirección de Arte & Identidad Gráfica',
    category: 'EDITORIAL & COLLAGE',
    duration: 'Físico & Digital',
    description:
      'Ilustración, collage analógico y diseño de sistemas visuales para portadas, contraportadas y ediciones especiales del sello.',
    deliverables: [
      'Arte de portada y contraportada original',
      'Diseño de empaque para cassettes y discos',
      'Identidad gráfica coherente con el manual de marca'
    ]
  }
]

export const artistsData = [
  {
    id: 'art-01',
    slug: 'j-de-la-ribera',
    index: 'ART // 01',
    name: 'J. de la Ribera',
    role: 'Productor Musical, Beatmaker & MC',
    genre: 'Boom Bap, Jazz Samples & Lo-Fi',
    origin: 'Santiago, CL',
    yearsActive: '2015 — Presente',
    labels: ['FunkyRoots Estudios'],
    labelTag: 'FunkyRoots Estudios',
    shortBio:
      'Productor y beatmaker pilar de FunkyRoots Estudios. Su trabajo explora el cruce entre el boom bap clásico, samples de jazz orgánico y texturas lo-fi, plasmado en beat tapes conceptuales y producciones colaborativas.',
    fullBio: [
      'Productor y beatmaker pilar de FunkyRoots Estudios. Su trabajo explora el cruce entre el boom bap clásico, samples de jazz orgánico y texturas lo-fi, plasmado en beat tapes conceptuales y producciones colaborativas.',
      'A lo largo de su trayectoria en el sello ha firmado obras esenciales como el álbum/beat tape "Hojas Secas" (2020) —compuesto por 8 tracks con colaboraciones de Quífaro y Diego— y la cinta de ritmos "Rescoldo" (2019), confeccionada mano a mano junto a Quífaro.',
      'Además de su faceta instrumental, articula producciones vocales e instrumentales junto a colaboradores históricos de la casa como Calde en cortes como "Mi verdad" (2015), "Amanece" (2020) y "Abril" (2021).'
    ],
    coverImage: 'https://i.ytimg.com/vi/oYKIUzFt9pk/hqdefault.jpg',
    heroImage: 'https://i.ytimg.com/vi/a7E3Cj_ypw8/hqdefault.jpg',
    lineup: [
      'J. de la Ribera — Producción Musical, Sampler, Beats & Dirección de Arte',
      'Quífaro — Co-producción & Colaboraciones en "Hojas Secas" y "Rescoldo"',
      'Calde (Felipe Calderón) — Guitarras, Arreglos & Colaboraciones ("Mi verdad", "Amanece", "Abril")',
      'Diego — Colaboración invitada en "Hojas Secas"'
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
        type: 'ÁLBUM // BEAT TAPE (8 TRACKS)',
        catalogCode: 'FR-2020',
        role: 'Producción íntegra y Arte (con colaboraciones de Quífaro y Diego)',
        cover: 'https://i.ytimg.com/vi/oYKIUzFt9pk/hqdefault.jpg'
      },
      {
        id: 'disc-jdlr-02',
        title: 'Rescoldo',
        year: '2019',
        type: 'CINTA DE RITMOS // ÁLBUM',
        catalogCode: 'FR-2019',
        role: 'Co-producción en FunkyRoots Estudios junto a Quífaro',
        cover: 'https://i.ytimg.com/vi/Cucd-aYwcio/hqdefault.jpg'
      },
      {
        id: 'disc-jdlr-03',
        title: 'Amanece (2020) / Abril (2021)',
        year: '2020 — 2021',
        type: 'SINGLES COLABORATIVOS',
        catalogCode: 'FR-SG',
        role: 'Junto a Calde & Quífaro en FunkyRoots Estudios',
        cover: 'https://i.ytimg.com/vi/a7E3Cj_ypw8/hqdefault.jpg'
      }
    ],
    videos: [
      {
        id: 'vid-jdlr-01',
        videoId: 'oYKIUzFt9pk',
        youtubeId: 'oYKIUzFt9pk',
        title: '01. dedicatoria (hojas secas)',
        duration: 'BEAT TAPE',
        year: '2020',
        tag: 'HOJAS SECAS'
      },
      {
        id: 'vid-jdlr-02',
        videoId: 'a7E3Cj_ypw8',
        youtubeId: 'a7E3Cj_ypw8',
        title: 'Mi verdad (junto a Calde)',
        duration: 'SINGLE',
        year: '2015',
        tag: 'COLABORACIÓN'
      }
    ]
  },
  {
    id: 'art-02',
    slug: 'quifaro',
    index: 'ART // 02',
    name: 'Quífaro',
    role: 'Beatmaker, Productor & Artista Visual',
    genre: 'Instrumentales Crudas, Beats Atmosféricos & Collage Analógico',
    origin: 'Santiago, CL',
    yearsActive: '2018 — Presente',
    labels: ['FunkyRoots Estudios'],
    labelTag: 'FunkyRoots Estudios',
    shortBio:
      'Productor de ritmos e ilustrador/collagista. Combina la confección de instrumentales crudas y atmosféricas con la dirección de arte analógica para los lanzamientos físicos y digitales del sello.',
    fullBio: [
      'Productor de ritmos e ilustrador/collagista. Combina la confección de instrumentales crudas y atmosféricas con la dirección de arte analógica para los lanzamientos físicos y digitales del sello.',
      'Su obra emblemática "Rescoldo; cinta de ritmos" (2019), confeccionada junto a J. de la Ribera en FunkyRoots Estudios, sintetiza su doble disciplina: ritmos profundos acompañados por el arte de portada y contraportada desarrollado íntegramente por su mano.',
      'Participa activamente en el catálogo del estudio con colaboraciones en "Hojas Secas" (2020, en los tracks "aurora" y "a través") y en el single "Abril" (2021) junto a FunkyRoots, J. de la Ribera y Calde.'
    ],
    coverImage: 'https://i.ytimg.com/vi/Cucd-aYwcio/hqdefault.jpg',
    heroImage: 'https://i.ytimg.com/vi/Cucd-aYwcio/hqdefault.jpg',
    lineup: [
      'Quífaro — Beatmaking, Producción Musical, Ilustración & Collage Analógico',
      'J. de la Ribera — Co-producción en "Rescoldo" & "Hojas Secas"',
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
        type: 'CINTA DE RITMOS // ÁLBUM',
        catalogCode: 'FR-2019',
        role: 'Música confeccionada con J. de la Ribera; portada y contraportada por Quífaro',
        cover: 'https://i.ytimg.com/vi/Cucd-aYwcio/hqdefault.jpg'
      },
      {
        id: 'disc-qf-02',
        title: 'Hojas Secas (Colaboraciones)',
        year: '2020',
        type: 'ÁLBUM // BEAT TAPE',
        catalogCode: 'FR-2020',
        role: 'Colaboraciones en tracks "aurora" y "a través"',
        cover: 'https://i.ytimg.com/vi/oYKIUzFt9pk/hqdefault.jpg'
      },
      {
        id: 'disc-qf-03',
        title: 'Abril',
        year: '2021',
        type: 'SINGLE // COLABORACIÓN',
        catalogCode: 'FR-2021',
        role: 'Junto a FunkyRoots, J. de la Ribera & Calde',
        cover: 'https://i.ytimg.com/vi/UWZAxS-spEo/hqdefault.jpg'
      }
    ],
    videos: [
      {
        id: 'vid-qf-01',
        videoId: 'Cucd-aYwcio',
        youtubeId: 'Cucd-aYwcio',
        title: 'Agua Fría (Rescoldo - Cinta de ritmos)',
        duration: 'RESCOLDO',
        year: '2019',
        tag: 'CINTA DE RITMOS'
      }
    ]
  },
  {
    id: 'art-03',
    slug: 'lencio',
    index: 'ART // 03',
    name: 'Lencio',
    role: 'MC & Compositor (Deasfalto Crew / Da Mirloz Clan)',
    genre: 'Rap Subterráneo Chileno & Boom Bap',
    origin: 'Renca, Santiago, CL',
    yearsActive: 'Activo — Presente',
    labels: ['FunkyRoots Estudios', 'Da Mirloz Clan'],
    labelTag: 'FunkyRoots Estudios · Da Mirloz Clan',
    shortBio:
      'Rapero originario de Renca con una lírica frontal, técnica y arraigada en la disciplina del rap subterráneo chileno.',
    fullBio: [
      'Rapero originario de Renca con una lírica frontal, técnica y arraigada en la disciplina del rap subterráneo chileno.',
      'Integrante de Deasfalto Crew y Da Mirloz Clan, Lencio proyecta una escritura introspectiva y contundente que dialoga con la estética cruda de FunkyRoots Estudios.',
      'Su trabajo reciente se corona con el lanzamiento audiovisual "QUIÉN SOY YO?" (2025), corte principal de su álbum de larga duración "LUCHA ETERNA" (2025/2026).'
    ],
    coverImage: 'https://i.ytimg.com/vi/O6hnIoMC-hI/hqdefault.jpg',
    heroImage: 'https://i.ytimg.com/vi/O6hnIoMC-hI/maxresdefault.jpg',
    lineup: [
      'Lencio — Voz Principal, Lírica & Composición',
      'Deasfalto Crew / Da Mirloz Clan — Colectivos de Origen',
      'FunkyRoots Estudios — Producción, Registro & Realización'
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
        title: 'LUCHA ETERNA',
        year: '2025 / 2026',
        type: 'ÁLBUM // LP',
        catalogCode: 'FR-2025',
        role: 'Incluye el corte y videoclip oficial "Quién soy yo?"',
        cover: 'https://i.ytimg.com/vi/O6hnIoMC-hI/hqdefault.jpg'
      }
    ],
    videos: [
      {
        id: 'vid-len-01',
        videoId: 'O6hnIoMC-hI',
        youtubeId: 'O6hnIoMC-hI',
        title: 'QUIÉN SOY YO? (Video Clip Oficial)',
        duration: 'VIDEO CLIP',
        year: '2025',
        tag: 'LUCHA ETERNA'
      }
    ]
  },
  {
    id: 'art-04',
    slug: 'da-mirloz-clan',
    index: 'ART // 04',
    name: 'Da Mirloz Clan',
    role: 'Colectivo de Hip-Hop & Rap',
    genre: 'Hip-Hop Colectivo & Sesiones Conceptuales',
    origin: 'Santiago, CL',
    yearsActive: '2019 — Presente',
    labels: ['FunkyRoots Estudios'],
    labelTag: 'FunkyRoots Estudios',
    shortBio:
      'Agrupación vinculada al catálogo de FunkyRoots Estudios con lanzamientos colaborativos que reúnen a distintos MCs y productores de la escena.',
    fullBio: [
      'Agrupación vinculada al catálogo de FunkyRoots Estudios con lanzamientos colaborativos que reúnen a distintos MCs y productores de la escena.',
      'Su propuesta consolida el trabajo en bloque entre rimas, tornamesismo y producción orgánica, destacando hitos del canal como la obra conceptual "Raíz Revuelta" (2019) y el corte "Oportunidad (Full Single)" (2024) junto a J. de la Ribera, Maskao y 10BAG.'
    ],
    coverImage: 'https://i.ytimg.com/vi/UWZAxS-spEo/hqdefault.jpg',
    heroImage: 'https://i.ytimg.com/vi/UWZAxS-spEo/maxresdefault.jpg',
    lineup: [
      'Da Mirloz Clan — Colectivo de MCs & Compositores',
      'J. de la Ribera — Producción Musical & Colaboración',
      'Maskao & 10BAG — MCs Invitados en "Oportunidad"'
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
        title: 'Oportunidad (Full Single)',
        year: '2024',
        type: 'FULL SINGLE // COLABORACIÓN',
        catalogCode: 'FR-2024',
        role: 'feat. J. de la Ribera, Maskao & 10BAG',
        cover: 'https://i.ytimg.com/vi/UWZAxS-spEo/hqdefault.jpg'
      },
      {
        id: 'disc-dmc-02',
        title: 'Raíz Revuelta',
        year: '2019',
        type: 'SESIÓN // OBRA CONCEPTUAL',
        catalogCode: 'FR-2019',
        role: 'Sesión audiovisual en FunkyRoots Estudios',
        cover: 'https://i.ytimg.com/vi/UWZAxS-spEo/hqdefault.jpg'
      }
    ],
    videos: [
      {
        id: 'vid-dmc-01',
        videoId: 'UWZAxS-spEo',
        youtubeId: 'UWZAxS-spEo',
        title: 'Raíz Revuelta (Sesión / Obra Conceptual)',
        duration: 'SESIÓN',
        year: '2019',
        tag: 'OBRA CONCEPTUAL'
      }
    ]
  }
]

export const worksData = [
  {
    id: 'wrk-01',
    catalogCode: 'AUDIOVISUAL',
    category: 'Audiovisual',
    year: '2025',
    title: 'QUIÉN SOY YO? (Video Clip)',
    artistName: 'Lencio',
    artistSlug: 'lencio',
    roleTag: 'AUDIOVISUAL // VIDEO CLIP OFICIAL',
    labelName: 'FunkyRoots Estudios · Da Mirloz Clan',
    description:
      'Videoclip oficial de Lencio perteneciente al álbum "LUCHA ETERNA". Lírica frontal desde Renca bajo el sello y realización de FunkyRoots Estudios.',
    videoId: 'O6hnIoMC-hI',
    youtubeId: 'O6hnIoMC-hI',
    youtubeUrl: 'https://www.youtube.com/watch?v=O6hnIoMC-hI'
  },
  {
    id: 'wrk-02',
    catalogCode: 'ÁLBUMES',
    category: 'Álbumes',
    year: '2020',
    title: 'Hojas Secas (Álbum Completo)',
    artistName: 'J. de la Ribera',
    artistSlug: 'j-de-la-ribera',
    roleTag: 'ÁLBUMES // BEAT TAPE (8 TRACKS)',
    labelName: 'FunkyRoots Estudios',
    description:
      'Beat tape conceptual de 8 cortes producida íntegramente por J. de la Ribera, incluyendo colaboraciones junto a Quífaro y Diego. Abre con "01. dedicatoria (hojas secas)".',
    videoId: 'oYKIUzFt9pk',
    youtubeId: 'oYKIUzFt9pk',
    youtubeUrl: 'https://www.youtube.com/watch?v=oYKIUzFt9pk'
  },
  {
    id: 'wrk-03',
    catalogCode: 'ÁLBUMES',
    category: 'Álbumes',
    year: '2019',
    title: 'Rescoldo (Cinta de Ritmos)',
    artistName: 'Quífaro & J. de la Ribera',
    artistSlug: 'quifaro',
    roleTag: 'ÁLBUMES // CINTA DE RITMOS',
    labelName: 'FunkyRoots Estudios',
    description:
      'Cinta de ritmos confeccionada entre Quífaro y J. de la Ribera en FunkyRoots Estudios, con arte de portada y contraportada original de Quífaro. Destaca el corte "Agua Fría".',
    videoId: 'Cucd-aYwcio',
    youtubeId: 'Cucd-aYwcio',
    youtubeUrl: 'https://www.youtube.com/watch?v=Cucd-aYwcio'
  },
  {
    id: 'wrk-04',
    catalogCode: 'SESIONES',
    category: 'Sesiones',
    year: '2019',
    title: 'Raíz Revuelta',
    artistName: 'FunkyRoots',
    artistSlug: 'da-mirloz-clan',
    roleTag: 'SESIONES // OBRA CONCEPTUAL',
    labelName: 'FunkyRoots Estudios',
    description:
      'Sesión y obra conceptual registrada por el colectivo en FunkyRoots Estudios, articulando el cruce entre rap subterráneo e instrumentación orgánica.',
    videoId: 'UWZAxS-spEo',
    youtubeId: 'UWZAxS-spEo',
    youtubeUrl: 'https://www.youtube.com/watch?v=UWZAxS-spEo'
  },
  {
    id: 'wrk-05',
    catalogCode: 'SINGLES',
    category: 'Singles',
    year: '2015',
    title: 'Mi Verdad',
    artistName: 'J. de la Ribera & Calde',
    artistSlug: 'j-de-la-ribera',
    roleTag: 'SINGLES // COLABORACIÓN',
    labelName: 'FunkyRoots Estudios',
    description:
      'Corte clásico del archivo de FunkyRoots Estudios que une la producción de J. de la Ribera con las guitarras y arreglos musicales de Calde (Felipe Calderón).',
    videoId: 'a7E3Cj_ypw8',
    youtubeId: 'a7E3Cj_ypw8',
    youtubeUrl: 'https://www.youtube.com/watch?v=a7E3Cj_ypw8'
  }
]

export const collaboratorsData = [
  {
    id: 'col-01',
    code: 'RED // 01',
    name: 'Calde (Felipe Calderón)',
    role: 'Guitarras, Arreglos Musicales y Co-producción',
    specialty: 'Instrumentación Orgánica & Armonía',
    location: 'Santiago, CL',
    bio: 'Colaborador clave en singles emblemáticos del catálogo como "Mi verdad" (2015), "Amanece" (2020) y "Abril" (2021) junto a J. de la Ribera y Quífaro.'
  },
  {
    id: 'col-02',
    code: 'RED // 02',
    name: 'Fabián Rocco',
    role: 'Colaboración Vocal y Composición (Quedaría)',
    specialty: 'Voz, Melodía & Lírica Colaborativa',
    location: 'Santiago, CL',
    bio: 'Intérprete y compositor invitado en las producciones vocales del estudio, destacando su participación en la obra "Quedaría".'
  },
  {
    id: 'col-03',
    code: 'RED // 03',
    name: '10BAG & Maskao',
    role: 'MCs y Colaboradores en Singles (Oportunidad, Quedaría)',
    specialty: 'Rap, Métrica & Lanzamientos Colaborativos',
    location: 'Santiago, CL',
    bio: 'MCs vinculados al círculo de FunkyRoots Estudios y Da Mirloz Clan, presentes en lanzamientos conjuntos como "Oportunidad (Full Single)" y "Quedaría".'
  },
  {
    id: 'col-04',
    code: 'RED // 04',
    name: 'Nicolás Burgos Pérez',
    role: 'Diseño de Identidad Visual y Sistema Gráfico de Marca',
    specialty: 'Dirección de Arte, Símbolo & Manual de Identidad',
    location: 'Chile',
    bio: 'Autor del sistema visual oficial de FunkyRoots (Isotipo de raíces y estrella central, paleta Verde Pino Urbano y tipografía Area Variable / Poppins).'
  }
]

/**
 * Métodos de acceso del Repositorio (Clean Architecture Data Layer)
 */
export const funkyRootsRepository = {
  getBrandMetadata() {
    return brandMetadata
  },
  getServices() {
    return servicesData
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
