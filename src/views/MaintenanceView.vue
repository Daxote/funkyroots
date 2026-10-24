<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import avatarUrl from '@/assets/brand/linktree-avatar.webp'
import imagotipoNegroUrl from '@/assets/brand/FunkyRoots/IMAGOTIPO/FunkyRoots Negro PNG.webp'
import isotipoVerdeUrl from '@/assets/brand/FunkyRoots/ISOTIPO/FunkyRoots PNG.webp'

/**
 * Linktree Oficial de FunkyRoots Estudios (Página de Inicio / Enlaces)
 * Réplica nativa y fiel de https://linktr.ee/funkyroots.estudios
 * con el sistema de diseño orgánico del estudio y acceso directo al sitio web completo (/test).
 */

const showCopiedToast = ref(false)
let toastTimer = null

const handleShare = async () => {
  const shareData = {
    title: 'FunkyRoots Estudios Official: Instagram | Linktree',
    text: 'FunkyRoots Estudios — No la clasifiques;',
    url: window.location.origin
  }

  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share(shareData)
      return
    } catch {
      // Si el usuario cancela, intentamos copiar al portapapeles
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
      // Ignorar error de portapapeles
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

const linksList = [
  {
    id: 'site-preview',
    type: 'link',
    isInternal: true,
    title: '✦ Visitar Sitio Web Oficial',
    subtitle: 'Artistas, catálogo audiovisual & servicios de estudio',
    url: '/test',
    icon: 'site',
    highlight: true,
    badge: 'NUEVO'
  },
  {
    id: 'abril-video',
    type: 'link',
    title: 'ABRIL',
    subtitle: 'Video Oficial en YouTube',
    url: 'https://www.youtube.com/watch?v=z4UVHULCsA4&ab_channel=FunkyRootsEstudios',
    icon: 'youtube'
  },
  {
    id: 'youtube-sub',
    type: 'link',
    title: 'Suscríbete a nuestro Youtube',
    subtitle: 'Canal oficial de FunkyRoots Estudios',
    url: 'https://www.youtube.com/channel/UC32wHweWt7hMQT5LAphUDng?sub_confirmation=1',
    icon: 'youtube'
  },
  {
    id: 'descarga-musica',
    type: 'link',
    title: 'Descarga Nuestra Música ⏳',
    subtitle: 'Google Drive con música y archivos oficiales',
    url: 'https://drive.google.com/drive/folders/1GIgokeoJ_X3IoSdNaoS00GjB2SSp_W9A',
    icon: 'drive'
  },
  {
    id: 'header-playlists',
    type: 'header',
    title: "Sigue Nuestras Playlist's"
  },
  {
    id: 'spotify-playlist',
    type: 'link',
    title: 'Playlist Spotify FunkyRoots Estudios ♻️🌱',
    subtitle: 'Selección de ritmos, vinilo y producciones',
    url: 'https://open.spotify.com/playlist/2Qt6APOGuJ1BhNbqtw8MAo?si=KvbiQDDTRre3RZPMUQ0q_A',
    icon: 'spotify'
  },
  {
    id: 'youtube-playlist',
    type: 'link',
    title: 'Playlist Youtube 🔴🎥',
    subtitle: 'Sesiones en sala, videoclips y directos',
    url: 'https://www.youtube.com/playlist?list=PL4qYFD02sS1BHBNFVn7I7t9xinHVaAwbQ',
    icon: 'youtube'
  },
  {
    id: 'header-eps',
    type: 'header',
    title: "EP's"
  },
  {
    id: 'rescoldo-album',
    type: 'link',
    title: '(2020) Rescoldo (Beat Tape)',
    subtitle: 'Álbum oficial en Spotify · J. de la Ribera',
    url: 'https://open.spotify.com/album/5ui3WCw1j95miQV5ps0Xe3?si=CTQQWMOfQVWm9dikCVLd7Q',
    icon: 'disc'
  }
]
</script>

<template>
  <div class="linktree-page" role="main" aria-label="Enlaces Oficiales de FunkyRoots Estudios">
    <!-- Fondos sutiles de ambiente orgánico -->
    <div class="linktree-page__backdrop" aria-hidden="true">
      <div class="linktree-glow linktree-glow--top"></div>
      <div class="linktree-glow linktree-glow--bottom"></div>
    </div>

    <!-- Barra de acciones superior (Compartir) -->
    <header class="linktree-topbar">
      <div class="linktree-topbar__inner">
        <button
          type="button"
          class="linktree-topbar__btn"
          aria-label="Compartir perfil de FunkyRoots Estudios"
          @click="handleShare"
        >
          <svg
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
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        </button>
      </div>
    </header>

    <!-- Contenedor central -->
    <main class="linktree-container">
      <!-- Perfil de FunkyRoots -->
      <section class="linktree-profile">
        <div class="linktree-avatar-wrap">
          <img
            :src="avatarUrl"
            alt="FunkyRoots Estudios"
            class="linktree-avatar"
            width="96"
            height="96"
            fetchpriority="high"
          />
        </div>

        <div class="linktree-header-text">
          <div class="linktree-title-row">
            <h1 class="linktree-title">
              FunkyRoots Estudios
            </h1>
            <span class="linktree-badge" title="Perfil Oficial Verificado" aria-label="Verificado">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
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

          <p class="linktree-username">
            @funkyroots.estudios
          </p>

          <p class="linktree-bio">
            No la clasifiques;
          </p>
        </div>

        <!-- Fila de Iconos de Redes Sociales -->
        <nav class="linktree-socials" aria-label="Redes sociales oficiales">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="linktree-social-btn"
            :aria-label="`Visitar ${social.name} de FunkyRoots Estudios`"
          >
            <!-- Instagram -->
            <svg
              v-if="social.icon === 'instagram'"
              width="22"
              height="22"
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
              width="22"
              height="22"
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
              width="22"
              height="22"
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
              width="22"
              height="22"
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
              width="22"
              height="22"
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
      </section>

      <!-- Lista de Enlaces Oficiales (Estilo Linktree) -->
      <section class="linktree-links" aria-label="Lista de enlaces">
        <template v-for="item in linksList" :key="item.id || item.title">
          <!-- Encabezado de Sección (Ej: Playlist's / EP's) -->
          <h2 v-if="item.type === 'header'" class="linktree-section-heading">
            {{ item.title }}
          </h2>

          <!-- Botón de Enlace Interno (Vista previa de sitio completo) -->
          <RouterLink
            v-else-if="item.isInternal"
            :to="item.url"
            class="linktree-card linktree-card--highlight"
          >
            <div class="linktree-card__icon-col">
              <span class="linktree-card__symbol linktree-card__symbol--site">✦</span>
            </div>

            <div class="linktree-card__text-col">
              <div class="linktree-card__title-row">
                <span class="linktree-card__title">{{ item.title }}</span>
                <span v-if="item.badge" class="linktree-card__tag">{{ item.badge }}</span>
              </div>
              <p v-if="item.subtitle" class="linktree-card__subtitle">
                {{ item.subtitle }}
              </p>
            </div>

            <div class="linktree-card__action-col" aria-hidden="true">
              <span class="linktree-card__arrow">→</span>
            </div>
          </RouterLink>

          <!-- Botones de Enlace Externos Oficiales -->
          <a
            v-else
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="linktree-card"
            :aria-label="`${item.title}: ${item.subtitle || 'Abrir enlace'}`"
          >
            <div class="linktree-card__icon-col">
              <!-- YouTube Icon -->
              <span
                v-if="item.icon === 'youtube'"
                class="linktree-card__symbol linktree-card__symbol--youtube"
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  />
                </svg>
              </span>

              <!-- Spotify Icon -->
              <span
                v-else-if="item.icon === 'spotify'"
                class="linktree-card__symbol linktree-card__symbol--spotify"
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
                  />
                </svg>
              </span>

              <!-- Google Drive Icon -->
              <span
                v-else-if="item.icon === 'drive'"
                class="linktree-card__symbol linktree-card__symbol--drive"
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M7.71 3.5L1.15 15l3.43 6 6.55-11.5L7.71 3.5zm3.72 6.5l3.43 6h8.57l-3.43-6h-8.57zm5.14-6.5l-3.43 6 4.29 7.5 3.43-6-4.29-7.5z"
                  />
                </svg>
              </span>

              <!-- Vinyl / Disc Icon -->
              <span
                v-else-if="item.icon === 'disc'"
                class="linktree-card__symbol linktree-card__symbol--disc"
                aria-hidden="true"
              >
                <svg
                  width="20"
                  height="20"
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
              </span>
            </div>

            <div class="linktree-card__text-col">
              <span class="linktree-card__title">{{ item.title }}</span>
              <p v-if="item.subtitle" class="linktree-card__subtitle">
                {{ item.subtitle }}
              </p>
            </div>

            <div class="linktree-card__action-col" aria-hidden="true">
              <span class="linktree-card__arrow">↗</span>
            </div>
          </a>
        </template>
      </section>

      <!-- Pie del Linktree Propio -->
      <footer class="linktree-footer">
        <RouterLink to="/test" class="linktree-footer__brand" aria-label="Ir a la portada del estudio">
          <img
            :src="isotipoVerdeUrl"
            alt="FunkyRoots Isotipo"
            class="linktree-footer__isotipo"
          />
          <img
            :src="imagotipoNegroUrl"
            alt="FunkyRoots Estudios"
            class="linktree-footer__imagotipo"
          />
        </RouterLink>

        <p class="linktree-footer__location">
          Santiago, Chile · Producción &amp; Sello Independiente
        </p>

        <p class="linktree-footer__slogan">
          Desde la idea hasta los oídos del público.
        </p>
      </footer>
    </main>

    <!-- Toast de retroalimentación de Enlace Copiado -->
    <Transition name="toast-fade">
      <div v-if="showCopiedToast" class="linktree-toast" role="status">
        <span>✓ ¡Enlace copiado al portapapeles!</span>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* ==========================================================================
   ESTILOS LINKTREE NATIVO FUNKYROOTS
   Basado fielmente en https://linktr.ee/funkyroots.estudios
   ========================================================================== */

.linktree-page {
  position: relative;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  background-color: #eceef1;
  color: #141615;
  font-family: var(--font-sans);
  overflow-x: hidden;
  overflow-x: clip;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-4) var(--space-4) var(--space-12);
  box-sizing: border-box;
}

/* Fondos y auras sutiles */
.linktree-page__backdrop {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.linktree-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.35;
}

.linktree-glow--top {
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: min(440px, 90vw);
  height: 240px;
  background: radial-gradient(circle, rgba(var(--brand-sage-rgb), 0.35) 0%, transparent 70%);
}

.linktree-glow--bottom {
  bottom: -40px;
  right: 10%;
  width: min(380px, 80vw);
  height: 200px;
  background: radial-gradient(circle, rgba(var(--brand-pine-rgb), 0.2) 0%, transparent 70%);
}

/* Barra superior */
.linktree-topbar {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 580px;
  display: flex;
  justify-content: flex-end;
  padding: var(--space-2) 0;
}

.linktree-topbar__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #ffffff;
  color: #2e2e2e;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition:
    transform var(--duration-fast) var(--ease-editorial),
    background-color var(--duration-fast) var(--ease-editorial),
    box-shadow var(--duration-fast) var(--ease-editorial);
}

.linktree-topbar__btn:hover {
  transform: scale(1.06);
  background-color: #f7f8f9;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.09);
  color: #141615;
}

/* Contenedor central (ancho máximo Linktree estándar) */
.linktree-container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
  margin-top: var(--space-2);
}

/* Perfil */
.linktree-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-3);
  width: 100%;
}

.linktree-avatar-wrap {
  position: relative;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  padding: 3px;
  background: #ffffff;
  box-shadow:
    0 10px 24px -4px rgba(0, 0, 0, 0.12),
    0 0 0 1px rgba(0, 0, 0, 0.06);
  transition: transform var(--duration-base) var(--ease-editorial);
}

.linktree-avatar-wrap:hover {
  transform: scale(1.04);
}

.linktree-avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.linktree-header-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.linktree-title-row {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.linktree-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: #141615;
  letter-spacing: -0.015em;
  line-height: 1.25;
}

.linktree-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.linktree-username {
  font-size: 0.9375rem;
  font-weight: 600;
  color: rgba(46, 46, 46, 0.75);
}

.linktree-bio {
  font-size: 0.9375rem;
  font-weight: 500;
  font-style: italic;
  color: rgba(46, 46, 46, 0.88);
  margin-top: 2px;
}

/* Redes sociales superiores */
.linktree-socials {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-1);
}

.linktree-social-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: #2e2e2e;
  background-color: transparent;
  transition:
    transform var(--duration-fast) var(--ease-editorial),
    background-color var(--duration-fast) var(--ease-editorial),
    color var(--duration-fast) var(--ease-editorial);
}

.linktree-social-btn:hover {
  transform: scale(1.14);
  color: #141615;
  background-color: rgba(0, 0, 0, 0.05);
}

/* Lista de enlaces */
.linktree-links {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.linktree-section-heading {
  font-family: var(--font-display);
  font-size: 1.0625rem;
  font-weight: 700;
  color: #141615;
  text-align: center;
  margin-top: var(--space-3);
  margin-bottom: var(--space-1);
  letter-spacing: -0.01em;
}

/* Tarjeta de enlace estándar (Formato Linktree Pill/Card) */
.linktree-card {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 60px;
  padding: var(--space-3) var(--space-5);
  box-sizing: border-box;
  background-color: #ffffff;
  color: #141615;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: var(--radius-pill);
  box-shadow:
    0 4px 12px -2px rgba(0, 0, 0, 0.04),
    0 1px 3px rgba(0, 0, 0, 0.02);
  cursor: pointer;
  text-decoration: none;
  gap: var(--space-3);
  transition:
    transform 220ms var(--ease-editorial),
    box-shadow 220ms var(--ease-editorial),
    border-color 220ms var(--ease-editorial),
    background-color 220ms var(--ease-editorial);
}

.linktree-card:hover {
  transform: translateY(-2px) scale(1.008);
  box-shadow:
    0 12px 28px -6px rgba(0, 0, 0, 0.09),
    0 2px 6px rgba(0, 0, 0, 0.04);
  border-color: rgba(53, 90, 76, 0.25);
}

.linktree-card:active {
  transform: translateY(0) scale(0.995);
}

/* Tarjeta destacada (Acceso al sitio web oficial) */
.linktree-card--highlight {
  background: linear-gradient(135deg, #ffffff 0%, #f6f8f7 100%);
  border: 1.5px solid rgba(53, 90, 76, 0.35);
  box-shadow:
    0 6px 18px -3px rgba(53, 90, 76, 0.12),
    0 2px 6px rgba(0, 0, 0, 0.04);
}

.linktree-card--highlight:hover {
  border-color: var(--brand-pine);
  box-shadow:
    0 14px 32px -6px rgba(53, 90, 76, 0.2),
    0 4px 10px rgba(0, 0, 0, 0.06);
}

.linktree-card__icon-col {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
}

.linktree-card__symbol {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.linktree-card__symbol--site {
  color: var(--brand-terracotta);
  font-size: 1.25rem;
}

.linktree-card__symbol--youtube {
  color: #ff0000;
}

.linktree-card__symbol--spotify {
  color: #1db954;
}

.linktree-card__symbol--drive {
  color: #4285f4;
}

.linktree-card__symbol--disc {
  color: var(--brand-pine);
}

.linktree-card__text-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-width: 0;
}

.linktree-card__title-row {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
}

.linktree-card__title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #141615;
  line-height: 1.35;
  overflow-wrap: break-word;
}

.linktree-card__tag {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background-color: var(--brand-pine);
  color: #ffffff;
  padding: 2px 7px;
  border-radius: var(--radius-pill);
}

.linktree-card__subtitle {
  font-size: 0.8125rem;
  color: rgba(46, 46, 46, 0.7);
  line-height: 1.3;
  margin-top: 2px;
}

.linktree-card__action-col {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 28px;
  color: rgba(46, 46, 46, 0.45);
  font-weight: 600;
  font-size: 1.05rem;
  transition: transform var(--duration-fast) var(--ease-editorial), color var(--duration-fast) var(--ease-editorial);
}

.linktree-card:hover .linktree-card__action-col {
  transform: translateX(2px);
  color: var(--brand-pine);
}

/* Pie de página */
.linktree-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-2);
  margin-top: var(--space-6);
  padding-top: var(--space-6);
}

.linktree-footer__brand {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  opacity: 0.9;
  transition: opacity var(--duration-fast) var(--ease-editorial), transform var(--duration-fast) var(--ease-editorial);
}

.linktree-footer__brand:hover {
  opacity: 1;
  transform: translateY(-1px);
}

.linktree-footer__isotipo {
  height: 24px;
  width: auto;
  object-fit: contain;
}

.linktree-footer__imagotipo {
  height: 20px;
  width: auto;
  object-fit: contain;
}

.linktree-footer__location {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(46, 46, 46, 0.65);
}

.linktree-footer__slogan {
  font-size: 0.75rem;
  color: rgba(46, 46, 46, 0.5);
  font-style: italic;
}

/* Toast flotante de retroalimentación */
.linktree-toast {
  position: fixed;
  bottom: var(--space-6);
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  background-color: rgba(20, 22, 21, 0.94);
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

/* Responsive */
@media (max-width: 480px) {
  .linktree-page {
    padding-left: var(--space-3);
    padding-right: var(--space-3);
  }

  .linktree-card {
    padding-left: var(--space-4);
    padding-right: var(--space-4);
  }

  .linktree-card__title {
    font-size: 0.9rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .linktree-card,
  .linktree-social-btn,
  .linktree-topbar__btn {
    transition: none !important;
  }
}
</style>
