<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import logoFunkyRootsUrl from '@/assets/brand/FunkyRoots/IMAGOTIPO/Logo FunkyRoots.webp'
import avatarUrl from '@/assets/brand/linktree-avatar.webp'

/**
 * Linktree Hub — FunkyRoots Estudios
 * Layout dividido sobre fondo claro:
 * - Izquierda: Identidad, logo oficial de FunkyRoots, bio y redes.
 * - Derecha: "Chips" interactivos con los enlaces oficiales.
 * - Fondo: Auras verdes interactivas que siguen el cursor y animación viva de raíces orgánicas.
 */

const containerRef = ref(null)
const mouseX = ref(50)
const mouseY = ref(50)
let currentX = 50
let currentY = 50
let targetX = 50
let targetY = 50
let animFrameId = null

const showCopiedToast = ref(false)
let toastTimer = null

const handleMouseMove = (e) => {
  if (typeof window === 'undefined') return
  const width = window.innerWidth || 1
  const height = window.innerHeight || 1
  targetX = (e.clientX / width) * 100
  targetY = (e.clientY / height) * 100
}

const animateCursor = () => {
  // Interpolación LERP suave
  currentX += (targetX - currentX) * 0.08
  currentY += (targetY - currentY) * 0.08
  mouseX.value = Number(currentX.toFixed(2))
  mouseY.value = Number(currentY.toFixed(2))

  animFrameId = requestAnimationFrame(animateCursor)
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    animFrameId = requestAnimationFrame(animateCursor)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('mousemove', handleMouseMove)
  }
  if (animFrameId) cancelAnimationFrame(animFrameId)
  if (toastTimer) clearTimeout(toastTimer)
})

const handleShare = async () => {
  const shareData = {
    title: 'FunkyRoots Estudios — Enlaces Oficiales',
    text: 'FunkyRoots Estudios · No la clasifiques;',
    url: window.location.origin
  }

  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share(shareData)
      return
    } catch {
      // User cancelled
    }
  }

  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(window.location.origin)
      showCopiedToast.value = true
      if (toastTimer) clearTimeout(toastTimer)
      toastTimer = setTimeout(() => {
        showCopiedToast.value = false
      }, 2500)
    } catch {
      // ignore
    }
  }
}

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/funkyroots.estudios',
    icon: 'instagram'
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/1xvmnBIxZoMPqw6lyQMSQf',
    icon: 'spotify'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UC32wHweWt7hMQT5LAphUDng',
    icon: 'youtube'
  },
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/funkyroots_estudios',
    icon: 'soundcloud'
  },
  {
    name: 'Email',
    url: 'mailto:funkyroots.estudios@gmail.com',
    icon: 'email'
  }
]

const linkChips = [
  {
    id: 'site-preview',
    isInternal: true,
    title: '✦ Visitar Sitio Web Oficial',
    subtitle: 'Artistas, catálogo audiovisual & servicios de estudio',
    url: '/test',
    category: 'Oficial',
    icon: 'site',
    highlight: true,
    tag: 'EXPLORAR'
  },
  {
    id: 'abril-video',
    title: 'ABRIL',
    subtitle: 'Video Oficial en YouTube',
    url: 'https://www.youtube.com/watch?v=z4UVHULCsA4&ab_channel=FunkyRootsEstudios',
    category: 'Música',
    icon: 'youtube',
    highlight: false
  },
  {
    id: 'youtube-sub',
    title: 'Suscríbete a nuestro Youtube',
    subtitle: 'Canal oficial @FunkyRootsEstudios',
    url: 'https://www.youtube.com/channel/UC32wHweWt7hMQT5LAphUDng?sub_confirmation=1',
    category: 'Comunidad',
    icon: 'youtube',
    highlight: false
  },
  {
    id: 'descarga-musica',
    title: 'Descarga Nuestra Música ⏳',
    subtitle: 'Archivos oficiales en Google Drive',
    url: 'https://drive.google.com/drive/folders/1GIgokeoJ_X3IoSdNaoS00GjB2SSp_W9A',
    category: 'Descargas',
    icon: 'drive',
    highlight: false
  },
  {
    id: 'spotify-playlist',
    title: 'Playlist Spotify FunkyRoots Estudios ♻️🌱',
    subtitle: 'Selección de ritmos, vinilo y producciones',
    url: 'https://open.spotify.com/playlist/2Qt6APOGuJ1BhNbqtw8MAo?si=KvbiQDDTRre3RZPMUQ0q_A',
    category: 'Playlists',
    icon: 'spotify',
    highlight: false
  },
  {
    id: 'youtube-playlist',
    title: 'Playlist Youtube 🔴🎥',
    subtitle: 'Sesiones en sala, videoclips y directos',
    url: 'https://www.youtube.com/playlist?list=PL4qYFD02sS1BHBNFVn7I7t9xinHVaAwbQ',
    category: 'Playlists',
    icon: 'youtube',
    highlight: false
  },
  {
    id: 'rescoldo-album',
    title: '(2020) Rescoldo (Beat Tape)',
    subtitle: 'Álbum oficial en Spotify · J. de la Ribera',
    url: 'https://open.spotify.com/album/5ui3WCw1j95miQV5ps0Xe3?si=CTQQWMOfQVWm9dikCVLd7Q',
    category: "EP's",
    icon: 'disc',
    highlight: false
  }
]
</script>

<template>
  <div
    ref="containerRef"
    class="roots-hub"
    :style="{
      '--aura-x': `${mouseX}%`,
      '--aura-y': `${mouseY}%`
    }"
    role="main"
    aria-label="FunkyRoots Estudios — Enlaces Oficiales"
  >
    <!-- Capa de Fondos Vivos: Auras verdes interactivas + Animación de Raíces -->
    <div class="roots-hub__stage" aria-hidden="true">
      <!-- Aura Verde Interactiva que sigue al cursor con inercia -->
      <div class="aura-follower aura-follower--primary"></div>
      <div class="aura-follower aura-follower--secondary"></div>

      <!-- Auras ambientales suaves de apoyo -->
      <div class="ambient-glow ambient-glow--pine"></div>
      <div class="ambient-glow ambient-glow--sage"></div>
      <div class="ambient-glow ambient-glow--ochre"></div>

      <!-- Ilustración viva de Raíces Orgánicas (Vector SVG) -->
      <svg
        class="roots-canvas"
        viewBox="0 0 1600 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g class="roots-group">
          <!-- Raíz Principal Izquierda -->
          <path
            class="root-path root-path--main"
            d="M-50 900 C 180 820, 240 680, 290 520 C 330 380, 260 280, 380 150 C 460 70, 600 80, 720 30"
            stroke="rgba(53, 90, 76, 0.22)"
            stroke-width="3"
            stroke-linecap="round"
          />
          <!-- Ramificación secundaria 1 -->
          <path
            class="root-path root-path--branch1"
            d="M 290 520 C 380 500, 480 560, 560 480 C 640 400, 660 300, 780 250 C 900 200, 1020 220, 1140 180"
            stroke="rgba(111, 143, 122, 0.26)"
            stroke-width="2"
            stroke-linecap="round"
          />
          <!-- Ramificación secundaria 2 (Hacia la derecha) -->
          <path
            class="root-path root-path--branch2"
            d="M 560 480 C 620 580, 740 640, 880 620 C 1020 600, 1100 520, 1240 540 C 1380 560, 1480 480, 1650 510"
            stroke="rgba(53, 90, 76, 0.18)"
            stroke-width="2.2"
            stroke-linecap="round"
          />
          <!-- Filamentos finos de absorción (raicillas) -->
          <path
            class="root-path root-path--fine1"
            d="M 380 150 C 420 180, 460 210, 520 200 C 580 190, 620 150, 680 140"
            stroke="rgba(193, 168, 117, 0.25)"
            stroke-width="1.2"
            stroke-linecap="round"
          />
          <path
            class="root-path root-path--fine2"
            d="M 780 250 C 840 280, 890 320, 960 310 C 1030 300, 1060 260, 1120 250"
            stroke="rgba(111, 143, 122, 0.22)"
            stroke-width="1.4"
            stroke-linecap="round"
          />
          <path
            class="root-path root-path--fine3"
            d="M 880 620 C 920 700, 980 760, 1060 780 C 1140 800, 1220 750, 1300 780"
            stroke="rgba(53, 90, 76, 0.16)"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <!-- Raíz que asciende desde la base central -->
          <path
            class="root-path root-path--bottom"
            d="M 600 1050 C 650 920, 720 860, 760 760 C 800 660, 780 580, 840 480 C 890 400, 980 360, 1060 320"
            stroke="rgba(53, 90, 76, 0.2)"
            stroke-width="2.5"
            stroke-linecap="round"
          />
          <!-- Nódulos o brotes vivos en las ramas -->
          <circle class="root-node root-node--1" cx="290" cy="520" r="4.5" fill="#355A4C" />
          <circle class="root-node root-node--2" cx="560" cy="480" r="3.5" fill="#6F8F7A" />
          <circle class="root-node root-node--3" cx="780" cy="250" r="3.5" fill="#C1A875" />
          <circle class="root-node root-node--4" cx="880" cy="620" r="4" fill="#355A4C" />
          <circle class="root-node root-node--5" cx="840" cy="480" r="3" fill="#6F8F7A" />
        </g>
      </svg>
    </div>

    <!-- Contenedor Principal en 2 Columnas -->
    <div class="roots-hub__container">
      <div class="roots-hub__layout">
        <!-- ===================================================================
             COLUMNA IZQUIERDA: Logotipo oficial sobre fondo claro, Título y Bio
             =================================================================== -->
        <aside class="roots-hub__brand-col">
          <div class="brand-panel">
            <!-- Barra superior móvil/desktop de compartir -->
            <div class="brand-panel__top">
              <span class="brand-panel__eyebrow">
                Estudio Musical &amp; Sello
              </span>
              <button
                type="button"
                class="brand-panel__share-btn"
                aria-label="Compartir perfil oficial"
                title="Compartir o copiar enlace"
                @click="handleShare"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                <span>Compartir</span>
              </button>
            </div>

            <!-- Logotipo oficial FunkyRoots sobre fondo claro -->
            <div class="brand-panel__logo-wrap">
              <img
                :src="logoFunkyRootsUrl"
                alt="FunkyRoots Estudios"
                class="brand-panel__logo"
                width="340"
                height="102"
                fetchpriority="high"
              />
            </div>

            <!-- Información Editorial del Estudio -->
            <div class="brand-panel__info">
              <div class="brand-panel__title-badge">
                <h1 class="brand-panel__title font-display">
                  FunkyRoots
                </h1>
                <span class="brand-panel__verified" title="Estudio y Sello Oficial">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 2L14.7 4.2L18.1 4.5L19.5 7.6L22.4 9.4L21.9 12.8L23.2 16L20.8 18.5L20.3 21.9L16.9 22.3L14.7 24.6L12 23.3L9.3 24.6L7.1 22.3L3.7 21.9L3.2 18.5L0.8 16L2.1 12.8L1.6 9.4L4.5 7.6L5.9 4.5L9.3 4.2L12 2Z"
                      fill="#355A4C"
                    />
                    <path
                      d="M9 12.2L11.1 14.3L15.3 10.1"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>

              <p class="brand-panel__handle">
                @funkyroots.estudios
              </p>

              <blockquote class="brand-panel__quote">
                “No la clasifiques;”
              </blockquote>

              <p class="brand-panel__description">
                Un espacio dedicado a llevar cada proyecto sonoro desde la primera idea rítmica en el sampler hasta los oídos del público. Hip-hop con textura de vinilo, jazz y sonido orgánico.
              </p>
            </div>

            <!-- Fila de Redes Sociales Oficiales -->
            <nav class="brand-panel__socials" aria-label="Canales oficiales">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="social-chip"
                :aria-label="`Visitar ${social.name} oficial`"
              >
                <!-- Instagram -->
                <svg
                  v-if="social.icon === 'instagram'"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>

                <!-- Spotify -->
                <svg
                  v-else-if="social.icon === 'spotify'"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
                  />
                </svg>

                <!-- YouTube -->
                <svg
                  v-else-if="social.icon === 'youtube'"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  />
                </svg>

                <!-- SoundCloud -->
                <svg
                  v-else-if="social.icon === 'soundcloud'"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M11.56 8.87c-.22 0-.41.17-.44.38l-.29 5.34c0 .08.02.16.07.22.05.07.13.1.21.1h.47c.23 0 .42-.18.43-.41l.24-5.23a.434.434 0 0 0-.43-.4l-.26 0zm-2.17 1.15c-.21 0-.39.16-.41.37l-.31 4.22c0 .08.02.16.07.22.05.07.13.1.21.1h.45c.23 0 .41-.18.43-.41l.25-4.13a.434.434 0 0 0-.43-.4l-.26.03zm-2.18 1.48c-.2 0-.37.15-.39.35l-.27 2.74c0 .08.02.16.07.22.05.07.13.1.21.1h.43c.22 0 .4-.18.42-.4l.21-2.65a.434.434 0 0 0-.42-.39l-.26.03zm-2.19 1.45c-.18 0-.34.13-.37.31l-.22 1.43c0 .08.02.16.07.22.05.07.13.1.21.1h.41c.21 0 .39-.17.41-.38l.17-1.37a.434.434 0 0 0-.41-.34l-.27.03zm-2.18.96c-.16 0-.3.1-.34.25l-.16.48c0 .08.02.16.07.22.05.07.13.1.21.1h.38c.2 0 .37-.16.39-.36l.12-.44a.434.434 0 0 0-.4-.28l-.27.03zm10.96-5.04c-.38 0-.75.05-1.1.15-.31.09-.59.22-.84.39-.24.17-.45.38-.62.61-.17.24-.29.51-.36.8a3.52 3.52 0 0 0-.34 1.54c0 .35.05.69.14 1.01.07.25.17.48.3.69.13.21.28.4.45.57.17.17.37.31.58.42.22.11.45.19.7.24.24.05.49.07.74.07h6.64c.73 0 1.43-.29 1.95-.81.52-.52.81-1.22.81-1.95s-.29-1.43-.81-1.95c-.52-.52-1.22-.81-1.95-.81a2.76 2.76 0 0 0-1.07.21c.07-.37.1-.74.1-1.12 0-1.08-.43-2.11-1.19-2.87-.76-.76-1.79-1.19-2.87-1.19z"
                  />
                </svg>

                <!-- Email -->
                <svg
                  v-else-if="social.icon === 'email'"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </nav>

            <div class="brand-panel__footer-note">
              <span>Santiago, Chile · Sello Independiente</span>
            </div>
          </div>
        </aside>

        <!-- ===================================================================
             COLUMNA DERECHA: Los "Chips" con los links de Linktree
             =================================================================== -->
        <section class="roots-hub__chips-col" aria-label="Enlaces oficiales">
          <div class="chips-feed">
            <template v-for="chip in linkChips" :key="chip.id">
              <!-- Chip Destacado hacia el sitio web oficial (/test) -->
              <RouterLink
                v-if="chip.isInternal"
                :to="chip.url"
                class="link-chip link-chip--highlight"
              >
                <div class="link-chip__icon link-chip__icon--site" aria-hidden="true">
                  <span>✦</span>
                </div>

                <div class="link-chip__content">
                  <div class="link-chip__header">
                    <span class="link-chip__title font-display">{{ chip.title }}</span>
                    <span v-if="chip.tag" class="link-chip__badge">{{ chip.tag }}</span>
                  </div>
                  <p class="link-chip__sub">{{ chip.subtitle }}</p>
                </div>

                <div class="link-chip__arrow" aria-hidden="true">
                  <span>→</span>
                </div>
              </RouterLink>

              <!-- Chips normales para enlaces externos oficiales -->
              <a
                v-else
                :href="chip.url"
                target="_blank"
                rel="noopener noreferrer"
                class="link-chip"
                :aria-label="`${chip.title}: ${chip.subtitle}`"
              >
                <!-- Icono representativo del Chip -->
                <div
                  class="link-chip__icon"
                  :class="`link-chip__icon--${chip.icon}`"
                  aria-hidden="true"
                >
                  <!-- YouTube -->
                  <svg v-if="chip.icon === 'youtube'" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                    />
                  </svg>

                  <!-- Spotify -->
                  <svg v-else-if="chip.icon === 'spotify'" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
                    />
                  </svg>

                  <!-- Google Drive -->
                  <svg v-else-if="chip.icon === 'drive'" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M7.71 3.5L1.15 15l3.43 6 6.55-11.5L7.71 3.5zm3.72 6.5l3.43 6h8.57l-3.43-6h-8.57zm5.14-6.5l-3.43 6 4.29 7.5 3.43-6-4.29-7.5z"
                    />
                  </svg>

                  <!-- Vinyl / EP -->
                  <svg
                    v-else-if="chip.icon === 'disc'"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>

                <!-- Textos del Chip -->
                <div class="link-chip__content">
                  <span class="link-chip__title font-display">{{ chip.title }}</span>
                  <p class="link-chip__sub">{{ chip.subtitle }}</p>
                </div>

                <!-- Flecha de acción -->
                <div class="link-chip__arrow" aria-hidden="true">
                  <span>↗</span>
                </div>
              </a>
            </template>
          </div>
        </section>
      </div>
    </div>

    <!-- Toast de retroalimentación al copiar enlace -->
    <Transition name="toast-fade">
      <div v-if="showCopiedToast" class="roots-hub__toast" role="status">
        <span>✓ ¡Enlace copiado al portapapeles!</span>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* ==========================================================================
   LINKTREE HUB — COLORES CLAROS & ANIMACIONES DE RAÍCES Y AURAS
   ========================================================================== */

.roots-hub {
  position: relative;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  background-color: #f6f3eb; /* Fondo claro natural de alta calidez */
  color: #1a221e;
  overflow-x: hidden;
  overflow-x: clip;
  font-family: var(--font-sans);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

/* ==========================================================================
   STAGE DE FONDOS VIVOS: Auras Interactivas que siguen al Cursor + Raíces
   ========================================================================== */
.roots-hub__stage {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  overflow: clip;
  z-index: 0;
}

/* Aura interactiva que se posiciona en las coordenadas dinámicas del cursor */
.aura-follower {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  will-change: transform, opacity;
  pointer-events: none;
  transition: opacity 300ms ease;
}

.aura-follower--primary {
  width: min(520px, 90vw);
  height: min(520px, 90vw);
  transform: translate(
    calc(var(--aura-x, 50vw) - 50%),
    calc(var(--aura-y, 50vh) - 50%)
  );
  background: radial-gradient(
    circle,
    rgba(111, 143, 122, 0.38) 0%,
    rgba(53, 90, 76, 0.22) 40%,
    transparent 70%
  );
  filter: blur(85px);
}

.aura-follower--secondary {
  width: min(340px, 60vw);
  height: min(340px, 60vw);
  transform: translate(
    calc(var(--aura-x, 50vw) - 40%),
    calc(var(--aura-y, 50vh) - 40%)
  );
  background: radial-gradient(
    circle,
    rgba(193, 168, 117, 0.28) 0%,
    rgba(111, 143, 122, 0.16) 50%,
    transparent 75%
  );
  filter: blur(65px);
}

/* Resplandores ambientales orgánicos fijos de base */
.ambient-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(95px);
  will-change: transform;
}

.ambient-glow--pine {
  top: -100px;
  right: -80px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(53, 90, 76, 0.25) 0%, transparent 68%);
  animation: ambientFloat 14s ease-in-out infinite alternate;
}

.ambient-glow--sage {
  bottom: -120px;
  left: -80px;
  width: 540px;
  height: 540px;
  background: radial-gradient(circle, rgba(111, 143, 122, 0.28) 0%, transparent 70%);
  animation: ambientFloat 16s ease-in-out infinite alternate-reverse;
}

.ambient-glow--ochre {
  top: 45%;
  left: 20%;
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, rgba(193, 168, 117, 0.16) 0%, transparent 65%);
}

@keyframes ambientFloat {
  0% { transform: scale(0.94) translate(0, 0); }
  100% { transform: scale(1.08) translate(30px, -20px); }
}

/* ==========================================================================
   ILUSTRACIÓN DE RAÍCES VECTORIALES (Vivas y Ondulantes)
   ========================================================================== */
.roots-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.88;
}

.root-path {
  fill: none;
  vector-effect: non-scaling-stroke;
  transform-origin: center;
}

.root-path--main {
  animation: rootSway1 9s ease-in-out infinite alternate;
}

.root-path--branch1 {
  animation: rootSway2 11s ease-in-out infinite alternate;
}

.root-path--branch2 {
  animation: rootSway1 13s ease-in-out infinite alternate-reverse;
}

.root-path--bottom {
  animation: rootSway2 10s ease-in-out infinite alternate;
}

.root-path--fine1,
.root-path--fine2,
.root-path--fine3 {
  stroke-dasharray: 6 3;
  animation: rootFlow 18s linear infinite;
}

.root-node {
  animation: nodePulse 3.5s ease-in-out infinite alternate;
}

.root-node--2 { animation-delay: 0.8s; }
.root-node--3 { animation-delay: 1.5s; }
.root-node--4 { animation-delay: 2.2s; }
.root-node--5 { animation-delay: 0.4s; }

@keyframes rootSway1 {
  0% { transform: rotate(0deg) scale(1); }
  100% { transform: rotate(0.6deg) scale(1.015); }
}

@keyframes rootSway2 {
  0% { transform: rotate(0deg) scale(0.99); }
  100% { transform: rotate(-0.7deg) scale(1.01); }
}

@keyframes rootFlow {
  to { stroke-dashoffset: -90; }
}

@keyframes nodePulse {
  0% { transform: scale(0.85); opacity: 0.65; }
  100% { transform: scale(1.25); opacity: 1; filter: drop-shadow(0 0 6px rgba(53, 90, 76, 0.4)); }
}

/* ==========================================================================
   LAYOUT PRINCIPAL A 2 COLUMNAS (Desktop) & APILADO (Mobile)
   ========================================================================== */
.roots-hub__container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
  box-sizing: border-box;
}

.roots-hub__layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-10);
  align-items: center;
}

@media (min-width: 960px) {
  .roots-hub__layout {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
    gap: var(--space-12);
  }
}

/* ==========================================================================
   COLUMNA IZQUIERDA: Tarjeta Editorial con Logo FunkyRoots sobre fondo claro
   ========================================================================== */
.roots-hub__brand-col {
  width: 100%;
}

.brand-panel {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  padding: var(--space-8);
  background-color: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(53, 90, 76, 0.16);
  border-radius: var(--radius-xl);
  box-shadow:
    0 16px 40px -12px rgba(53, 90, 76, 0.10),
    0 2px 8px rgba(0, 0, 0, 0.03);
}

@media (min-width: 640px) {
  .brand-panel {
    padding: var(--space-10);
  }
}

.brand-panel__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
}

.brand-panel__eyebrow {
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--brand-pine);
}

.brand-panel__share-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0.4rem 0.95rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--brand-pine);
  background-color: rgba(53, 90, 76, 0.08);
  border: 1px solid rgba(53, 90, 76, 0.18);
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition:
    transform var(--duration-fast) var(--ease-editorial),
    background-color var(--duration-fast) var(--ease-editorial),
    box-shadow var(--duration-fast) var(--ease-editorial);
}

.brand-panel__share-btn:hover {
  background-color: var(--brand-pine);
  color: #ffffff;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(53, 90, 76, 0.22);
}

/* Contenedor del Logo FunkyRoots oficial sobre fondo claro */
.brand-panel__logo-wrap {
  width: 100%;
  max-width: 320px;
  padding: var(--space-2) 0;
}

.brand-panel__logo {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 4px 12px rgba(53, 90, 76, 0.08));
}

.brand-panel__info {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.brand-panel__title-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.brand-panel__title {
  font-size: clamp(1.75rem, 3.2vw, 2.35rem);
  font-weight: 700;
  color: #141615;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

.brand-panel__verified {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.brand-panel__handle {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--brand-sage);
}

.brand-panel__quote {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 600;
  font-style: italic;
  color: var(--brand-terracotta);
  margin: var(--space-2) 0;
  line-height: 1.35;
}

.brand-panel__description {
  font-size: 0.9375rem;
  line-height: 1.65;
  color: rgba(20, 22, 21, 0.78);
  max-width: 46ch;
}

/* Fila de Redes Sociales */
.brand-panel__socials {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
  padding-top: var(--space-2);
}

.social-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #ffffff;
  color: #2e2e2e;
  border: 1px solid rgba(53, 90, 76, 0.15);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition:
    transform var(--duration-fast) var(--ease-editorial),
    background-color var(--duration-fast) var(--ease-editorial),
    color var(--duration-fast) var(--ease-editorial),
    box-shadow var(--duration-fast) var(--ease-editorial);
}

.social-chip:hover {
  transform: translateY(-2px) scale(1.08);
  background-color: var(--brand-pine);
  color: #ffffff;
  border-color: var(--brand-pine);
  box-shadow: 0 6px 16px rgba(53, 90, 76, 0.25);
}

.brand-panel__footer-note {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(53, 90, 76, 0.75);
  border-top: 1px solid rgba(53, 90, 76, 0.12);
  padding-top: var(--space-4);
}

/* ==========================================================================
   COLUMNA DERECHA: Los "Chips" interactivos de enlaces
   ========================================================================== */
.roots-hub__chips-col {
  width: 100%;
}

.chips-feed {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
}

/* Formato Chip / Píldora interactivo */
.link-chip {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 64px;
  padding: 0.75rem 1.4rem;
  box-sizing: border-box;
  background-color: #ffffff;
  color: #141615;
  border: 1px solid rgba(53, 90, 76, 0.16);
  border-radius: var(--radius-pill);
  box-shadow:
    0 4px 14px -2px rgba(53, 90, 76, 0.06),
    0 1px 3px rgba(0, 0, 0, 0.02);
  gap: var(--space-4);
  text-decoration: none;
  cursor: pointer;
  transition:
    transform 220ms var(--ease-editorial),
    border-color 220ms var(--ease-editorial),
    box-shadow 220ms var(--ease-editorial),
    background-color 220ms var(--ease-editorial);
}

.link-chip:hover {
  transform: translateY(-2px) scale(1.008);
  border-color: rgba(53, 90, 76, 0.4);
  box-shadow:
    0 12px 28px -6px rgba(53, 90, 76, 0.16),
    0 2px 6px rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
}

.link-chip:active {
  transform: translateY(0) scale(0.995);
}

/* Chip Destacado para el Sitio Web Oficial (/test) */
.link-chip--highlight {
  background: linear-gradient(135deg, #ffffff 0%, #f1f6f3 100%);
  border: 2px solid var(--brand-pine);
  box-shadow:
    0 8px 24px -4px rgba(53, 90, 76, 0.18),
    0 2px 6px rgba(0, 0, 0, 0.04);
}

.link-chip--highlight:hover {
  background: linear-gradient(135deg, #ffffff 0%, #e8f1ec 100%);
  box-shadow:
    0 16px 36px -6px rgba(53, 90, 76, 0.28),
    0 4px 12px rgba(0, 0, 0, 0.06);
}

.link-chip__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(53, 90, 76, 0.08);
  flex-shrink: 0;
  color: var(--brand-pine);
}

.link-chip__icon--site {
  background-color: rgba(var(--brand-terracotta-rgb), 0.12);
  color: var(--brand-terracotta);
  font-size: 1.25rem;
}

.link-chip__icon--youtube {
  background-color: rgba(255, 0, 0, 0.10);
  color: #ff0000;
}

.link-chip__icon--spotify {
  background-color: rgba(29, 185, 84, 0.12);
  color: #1db954;
}

.link-chip__icon--drive {
  background-color: rgba(66, 133, 244, 0.12);
  color: #4285f4;
}

.link-chip__icon--disc {
  background-color: rgba(53, 90, 76, 0.12);
  color: var(--brand-pine);
}

.link-chip__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}

.link-chip__header {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.link-chip__title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #141615;
  line-height: 1.3;
  overflow-wrap: break-word;
}

.link-chip__badge {
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background-color: var(--brand-pine);
  color: #ffffff;
  padding: 2px 7px;
  border-radius: var(--radius-pill);
}

.link-chip__sub {
  font-size: 0.8125rem;
  color: rgba(46, 46, 46, 0.68);
  line-height: 1.35;
  margin-top: 2px;
}

.link-chip__arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  color: var(--brand-sage);
  font-size: 1.15rem;
  font-weight: 600;
  flex-shrink: 0;
  transition: transform var(--duration-fast) var(--ease-editorial), color var(--duration-fast) var(--ease-editorial);
}

.link-chip:hover .link-chip__arrow {
  transform: translateX(3px);
  color: var(--brand-pine);
}

/* Toast flotante de confirmación */
.roots-hub__toast {
  position: fixed;
  bottom: var(--space-6);
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  background-color: rgba(20, 22, 21, 0.92);
  color: #ffffff;
  padding: 0.65rem 1.4rem;
  border-radius: var(--radius-pill);
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  pointer-events: none;
}

.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: opacity 240ms var(--ease-editorial), transform 240ms var(--ease-editorial);
}

.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, 12px);
}

/* ==========================================================================
   RESPONSIVE ADJUSTMENTS
   ========================================================================== */
@media (max-width: 639px) {
  .roots-hub__container {
    padding: var(--space-6) var(--space-4);
  }

  .brand-panel {
    padding: var(--space-6);
    gap: var(--space-4);
  }

  .link-chip {
    padding: 0.7rem 1.1rem;
    gap: var(--space-3);
  }

  .link-chip__title {
    font-size: 0.9rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .root-path,
  .root-node,
  .ambient-glow,
  .link-chip,
  .social-chip {
    animation: none !important;
    transition: none !important;
  }
}
</style>
