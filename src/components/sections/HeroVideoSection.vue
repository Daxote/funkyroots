<script setup>
import { ref } from 'vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import imagotipoBlancoUrl from '@/assets/brand/FunkyRoots/IMAGOTIPO/FunkyRoots Blanco PNG.png'

/**
 * HeroVideoSection — 100vh video fullscreen (Producer_tapping_MPC_sampler_pads_20261017154856.mp4)
 * + Imagotipo oficial sin fondo de FunkyRoots.
 */
defineProps({
  brand: {
    type: Object,
    required: true
  }
})

const videoRef = ref(null)
const isPaused = ref(false)

const toggleVideoPlayback = () => {
  if (!videoRef.value) return
  if (videoRef.value.paused) {
    videoRef.value.play()
    isPaused.value = false
  } else {
    videoRef.value.pause()
    isPaused.value = true
  }
}
</script>

<template>
  <section class="hero-video theme-dark" aria-label="Presentación principal de FunkyRoots Estudios">
    <!-- Video de fondo a pantalla completa (100vh) con MPC Sampler -->
    <div class="hero-video__media" aria-hidden="true">
      <video
        ref="videoRef"
        class="hero-video__element"
        :poster="brand.heroVideo.posterUrl"
        autoplay
        muted
        loop
        playsinline
      >
        <source :src="brand.heroVideo.videoUrl" type="video/mp4" />
      </video>
      <div class="hero-video__scrim"></div>
    </div>

    <div class="container-editorial hero-video__content">
      <!-- Barra Técnica Superior del Hero -->
      <div class="hero-video__top-meta">
        <BaseBadge variant="ochre">{{ brand.heroVideo.badgeCode }}</BaseBadge>
        <span class="font-mono hero-video__location">{{ brand.location }}</span>
      </div>

      <!-- Bloque Central de Identidad con el Imagotipo Oficial -->
      <div class="hero-video__main">
        <img
          :src="imagotipoBlancoUrl"
          alt="FunkyRoots Estudios"
          class="hero-video__imagotipo"
        />

        <h1 class="font-display hero-video__title">
          {{ brand.heroVideo.headline }}
        </h1>

        <p class="hero-video__subtitle">
          {{ brand.heroVideo.subheadline }}
        </p>

        <div class="hero-video__actions">
          <BaseButton variant="primary" href="#obras">
            EXPLORAR OBRAS &amp; CATÁLOGO
          </BaseButton>
          <BaseButton variant="secondary" href="#artistas">
            VER ROSTER DE ARTISTAS
          </BaseButton>
          <BaseButton
            variant="ghost"
            :href="brand.heroVideo.youtubeChannelUrl"
            target="_blank"
            aria-label="Visitar canal oficial de YouTube @FunkyRootsEstudios (nueva pestaña)"
          >
            YOUTUBE @FUNKYROOTSESTUDIOS ↗
          </BaseButton>
        </div>
      </div>

      <!-- Barra Técnica Inferior con Control de Video Accesible -->
      <div class="hero-video__bottom-bar">
        <div class="hero-video__signal">
          <span class="hero-video__rec-dot" aria-hidden="true"></span>
          <span class="font-mono">SESIÓN MPC EN CURSO // FUNKYROOTS ESTUDIOS</span>
        </div>

        <div class="hero-video__controls">
          <button
            type="button"
            class="hero-video__video-toggle font-mono"
            :aria-label="isPaused ? 'Reproducir video de fondo' : 'Pausar video de fondo'"
            @click="toggleVideoPlayback"
          >
            <span>{{ isPaused ? '▶ REANUDAR VIDEO' : '❚❚ PAUSAR VIDEO' }}</span>
          </button>
          <a href="#manifiesto" class="hero-video__scroll-cue font-mono">
            <span>BAJAR // 00</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-video {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: stretch;
  background-color: var(--brand-dark);
  border-bottom: 1px solid var(--border-dark-subtle);
  overflow: hidden;
}

.hero-video__media {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-video__element {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.92) contrast(1.06);
}

.hero-video__scrim {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 30%, rgba(53, 90, 76, 0.36) 0%, transparent 62%),
    linear-gradient(
      180deg,
      rgba(20, 22, 21, 0.82) 0%,
      rgba(20, 22, 21, 0.56) 48%,
      rgba(20, 22, 21, 0.94) 100%
    );
}

.hero-video__content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: calc(var(--navbar-height) + var(--space-8));
  padding-bottom: var(--space-8);
  gap: var(--space-8);
}

.hero-video__top-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--border-dark-subtle);
}

.hero-video__location {
  font-size: 0.75rem;
  color: var(--brand-beige);
}

.hero-video__main {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  max-width: 880px;
  margin-top: auto;
  margin-bottom: auto;
  padding: var(--space-8) 0;
}

.hero-video__imagotipo {
  height: clamp(64px, 8vw, 96px);
  width: auto;
  object-fit: contain;
  align-self: flex-start;
}

.hero-video__title {
  font-size: clamp(2.25rem, 5.2vw, 4.5rem);
  font-weight: 700;
  color: var(--brand-bone);
  letter-spacing: -0.03em;
  line-height: 1.06;
}

.hero-video__subtitle {
  font-size: clamp(1.0625rem, 1.8vw, 1.25rem);
  line-height: 1.6;
  color: var(--brand-beige);
  max-width: 60ch;
}

.hero-video__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4);
  padding-top: var(--space-2);
}

.hero-video__bottom-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding-top: var(--space-6);
  border-top: 1px solid var(--border-dark-subtle);
}

.hero-video__signal {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  font-size: 0.75rem;
  color: var(--brand-beige);
}

.hero-video__rec-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--brand-terracotta);
}

.hero-video__controls {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.hero-video__video-toggle,
.hero-video__scroll-cue {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--touch-target-min);
  padding: var(--space-2) var(--space-4);
  font-size: 0.75rem;
  color: var(--brand-bone);
  border: 1px solid var(--border-dark-subtle);
  border-radius: 2px;
  cursor: pointer;
  transition:
    border-color var(--duration-fast) var(--ease-editorial),
    background-color var(--duration-fast) var(--ease-editorial),
    color var(--duration-fast) var(--ease-editorial);
}

.hero-video__video-toggle:hover,
.hero-video__scroll-cue:hover {
  border-color: var(--brand-sage);
  background-color: rgba(var(--brand-pine-rgb), 0.25);
  color: var(--brand-bone);
}
</style>
