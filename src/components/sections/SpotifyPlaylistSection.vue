<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import logotipoBlancoUrl from '@/assets/brand/FunkyRoots/IMAGOTIPO/FunkyRoots Blanco 2 PNG-03.webp'

/**
 * SpotifyPlaylistSection — Sección institucional integrada con Spotify.
 * Mitad izquierda: identidad de FunkyRoots Estudios, origen fundado por J. de la Ribera
 * y filosofía desde la idea hasta los oídos del público.
 * Mitad derecha: widget oficial interactivo de playlist de Spotify.
 * Fondo: logotipo con baja opacidad y capa de color difuminado horizontalmente.
 */
const spotifyPlaylistUrl =
  'https://open.spotify.com/playlist/2Qt6APOGuJ1BhNbqtw8MAo?si=povz1zwdRTiZO_Axqe67-w'
const spotifyEmbedUrl =
  'https://open.spotify.com/embed/playlist/2Qt6APOGuJ1BhNbqtw8MAo?utm_source=generator&theme=0'
</script>

<template>
  <section
    id="estudio-playlist"
    class="spotify-section theme-dark py-24"
    aria-label="FunkyRoots Estudios y playlist oficial en Spotify"
  >
    <!-- Contenedor estricto de fondo (Previene cualquier desborde horizontal) -->
    <div class="spotify-section__backdrop" aria-hidden="true">
      <!-- Capa de fondo 1: Logotipo FunkyRoots en baja opacidad -->
      <div class="spotify-section__watermark">
        <img
          :src="logotipoBlancoUrl"
          alt=""
          class="spotify-section__watermark-img"
          loading="lazy"
        />
      </div>

      <!-- Capa de fondo 2: Capa de color difuminado con animación dinámica -->
      <div class="spotify-section__gradient-layer">
        <div class="spotify-section__glow spotify-section__glow--pine"></div>
        <div class="spotify-section__glow spotify-section__glow--white"></div>
      </div>
    </div>

    <div class="container-editorial spotify-section__container">
      <div class="spotify-section__grid">
        <!-- Mitad Izquierda: Historia y Filosofía de FunkyRoots -->
        <div class="spotify-section__content">
          <span class="eyebrow-label">Estudio Musical &amp; Sello</span>

          <h2 class="font-display spotify-section__title">
            FunkyRoots Estudios
          </h2>

          <p class="spotify-section__lead">
            Un estudio musical creado para llevar cada proyecto desde la primera idea hasta los oídos del público.
          </p>

          <div class="spotify-section__body">
            <p>
              Fundado por el productor y beatmaker <strong>J. de la Ribera</strong>, FunkyRoots Estudios nació en Santiago con el propósito de dar cauce al sonido orgánico del hip-hop, las texturas del vinilo y el sample de jazz.
            </p>
            <p>
              Acompañamos a músicos, MCs y colectivos a lo largo de todo el proceso creativo: desde la confección del ritmo y la grabación vocal en sala, hasta la mezcla con carácter, el mastering y la edición final tanto en plataformas digitales como en formato físico.
            </p>
          </div>

          <div class="spotify-section__features">
            <span class="spotify-section__tag">Beatmaking &amp; MPC</span>
            <span class="spotify-section__dot" aria-hidden="true">·</span>
            <span class="spotify-section__tag">Grabación &amp; Mezcla</span>
            <span class="spotify-section__dot" aria-hidden="true">·</span>
            <span class="spotify-section__tag">Distribución Editorial</span>
          </div>

          <div class="spotify-section__actions">
            <BaseButton
              variant="primary"
              :href="spotifyPlaylistUrl"
              target="_blank"
              aria-label="Abrir playlist oficial en Spotify"
            >
              <svg
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
              <span>Abrir en Spotify</span>
            </BaseButton>

            <BaseButton
              variant="ghost"
              href="#artistas"
            >
              Explorar Artistas
            </BaseButton>
          </div>
        </div>

        <!-- Mitad Derecha: Widget Oficial de Spotify -->
        <div class="spotify-section__widget-wrap">
          <div class="spotify-card">
            <div class="spotify-card__glow" aria-hidden="true"></div>
            <iframe
              class="spotify-card__iframe"
              :src="spotifyEmbedUrl"
              width="100%"
              height="450"
              frameborder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Playlist oficial FunkyRoots Estudios en Spotify"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.spotify-section {
  position: relative;
  background-color: var(--brand-dark);
  overflow: hidden;
  overflow: clip;
  contain: paint;
  max-width: 100%;
  width: 100%;
  border-bottom: 1px solid var(--border-dark-subtle);
}

/* Contenedor de fondo estricto sin escape lateral */
.spotify-section__backdrop {
  position: absolute;
  inset: 0;
  overflow: hidden;
  overflow: clip;
  contain: paint;
  pointer-events: none;
  user-select: none;
  width: 100%;
  max-width: 100%;
  height: 100%;
}

/* Marca de agua del logotipo por detrás */
.spotify-section__watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(1200px, 120vw);
  max-width: 100%;
  pointer-events: none;
  user-select: none;
  z-index: 0;
  opacity: 0.045;
  filter: blur(0.5px);
}

.spotify-section__watermark-img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* Capa de color difuminado dinámico */
.spotify-section__gradient-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.spotify-section__glow {
  position: absolute;
  border-radius: 50%;
  will-change: transform, opacity;
}

/* ==========================================================================
   DESKTOP: Difuminado Horizontal & Animación de flujo lateral (960px+)
   ========================================================================== */
@media (min-width: 960px) {
  .spotify-section__gradient-layer {
    background: linear-gradient(
      90deg,
      rgba(53, 90, 76, 0.40) 0%,
      rgba(20, 22, 21, 0.72) 48%,
      rgba(245, 245, 240, 0.18) 100%
    );
  }

  .spotify-section__glow--pine {
    width: 520px;
    height: 520px;
    top: 15%;
    left: -50px;
    filter: blur(95px);
    background: radial-gradient(
      circle,
      rgba(var(--brand-pine-rgb), 0.52) 0%,
      transparent 70%
    );
    animation: glowFloatDesktopPine 9s ease-in-out infinite alternate;
  }

  .spotify-section__glow--white {
    width: 500px;
    height: 500px;
    bottom: -40px;
    right: -40px;
    filter: blur(95px);
    background: radial-gradient(
      circle,
      rgba(245, 245, 240, 0.22) 0%,
      rgba(245, 245, 240, 0.08) 45%,
      transparent 70%
    );
    animation: glowFloatDesktopWhite 8s ease-in-out infinite alternate-reverse;
  }
}

@keyframes glowFloatDesktopPine {
  0% {
    transform: translateX(0) translateY(0) scale(1);
    opacity: 0.8;
  }
  100% {
    transform: translateX(35px) translateY(-15px) scale(1.08);
    opacity: 1;
  }
}

@keyframes glowFloatDesktopWhite {
  0% {
    transform: translateX(0) translateY(0) scale(1);
    opacity: 0.85;
  }
  100% {
    transform: translateX(-40px) translateY(20px) scale(1.06);
    opacity: 1;
  }
}

/* ==========================================================================
   MOBILE: Difuminado Vertical & Animación de respiración vertical (< 960px)
   Requisito explícito: "la animación de difuminado en la sección de spotify
   en mobile debería ser vertical y no horizontal como en desktop"
   ========================================================================== */
@media (max-width: 959px) {
  .spotify-section__gradient-layer {
    background: linear-gradient(
      180deg,
      rgba(53, 90, 76, 0.44) 0%,
      rgba(20, 22, 21, 0.78) 42%,
      rgba(245, 245, 240, 0.20) 100%
    );
  }

  .spotify-section__watermark {
    width: 92%;
    max-width: 440px;
    opacity: 0.04;
  }

  .spotify-section__glow--pine {
    width: 280px;
    height: 280px;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    filter: blur(75px);
    background: radial-gradient(
      circle,
      rgba(var(--brand-pine-rgb), 0.55) 0%,
      transparent 70%
    );
    animation: glowFloatMobilePine 7s ease-in-out infinite alternate;
  }

  .spotify-section__glow--white {
    width: 300px;
    height: 300px;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    filter: blur(75px);
    background: radial-gradient(
      circle,
      rgba(245, 245, 240, 0.24) 0%,
      rgba(245, 245, 240, 0.08) 50%,
      transparent 70%
    );
    animation: glowFloatMobileWhite 6.5s ease-in-out infinite alternate-reverse;
  }
}

@keyframes glowFloatMobilePine {
  0% {
    transform: translateX(-50%) translateY(0) scale(0.94);
    opacity: 0.75;
  }
  100% {
    transform: translateX(-50%) translateY(32px) scale(1.08);
    opacity: 1;
  }
}

@keyframes glowFloatMobileWhite {
  0% {
    transform: translateX(-50%) translateY(0) scale(0.96);
    opacity: 0.8;
  }
  100% {
    transform: translateX(-50%) translateY(-28px) scale(1.07);
    opacity: 1;
  }
}

.spotify-section__container {
  position: relative;
  z-index: 2;
  width: 100%;
}

.spotify-section__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-12);
  align-items: center;
  width: 100%;
}

@media (min-width: 960px) {
  .spotify-section__grid {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
    gap: var(--space-12);
  }
}

.spotify-section__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  width: 100%;
  min-width: 0;
}

.spotify-section__title {
  font-size: clamp(2.25rem, 4.2vw, 3.5rem);
  font-weight: 700;
  color: var(--brand-bone);
  letter-spacing: -0.025em;
  line-height: 1.1;
  overflow-wrap: break-word;
}

.spotify-section__lead {
  font-size: clamp(1.125rem, 1.8vw, 1.3rem);
  line-height: 1.55;
  color: var(--brand-bone);
  font-weight: 500;
  max-width: 52ch;
}

.spotify-section__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-size: 1rem;
  line-height: 1.68;
  color: rgba(var(--brand-beige-rgb), 0.88);
  max-width: 56ch;
}

.spotify-section__body strong {
  color: var(--brand-bone);
  font-weight: 600;
}

.spotify-section__features {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
  padding-top: var(--space-2);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--brand-ochre);
}

.spotify-section__dot {
  color: var(--brand-sage);
}

.spotify-section__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4);
  padding-top: var(--space-4);
}

/* Widget de Spotify */
.spotify-section__widget-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  min-width: 0;
}

.spotify-card {
  position: relative;
  width: 100%;
  max-width: 540px;
  box-sizing: border-box;
  background-color: rgba(20, 22, 21, 0.75);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(var(--brand-sage-rgb), 0.35);
  border-radius: var(--radius-xl);
  padding: var(--space-3);
  box-shadow:
    0 24px 60px -12px rgba(0, 0, 0, 0.7),
    0 0 0 1px rgba(245, 245, 240, 0.05);
  transition:
    transform var(--duration-base) var(--ease-editorial),
    border-color var(--duration-base) var(--ease-editorial),
    box-shadow var(--duration-base) var(--ease-editorial);
}

.spotify-card:hover {
  transform: translateY(-3px);
  border-color: rgba(var(--brand-sage-rgb), 0.55);
  box-shadow:
    0 32px 70px -12px rgba(0, 0, 0, 0.8),
    0 0 30px rgba(var(--brand-pine-rgb), 0.35);
}

.spotify-card__glow {
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: linear-gradient(
    135deg,
    rgba(var(--brand-pine-rgb), 0.4) 0%,
    transparent 60%,
    rgba(245, 245, 240, 0.18) 100%
  );
  pointer-events: none;
  z-index: 0;
}

.spotify-card__iframe {
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  max-width: 100%;
  border: none;
  border-radius: calc(var(--radius-xl) - 4px);
  background-color: #121212;
}

@media (prefers-reduced-motion: reduce) {
  .spotify-section__glow--pine,
  .spotify-section__glow--white {
    animation: none !important;
  }
}
</style>
