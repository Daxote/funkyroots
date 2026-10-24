<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import imagotipoBlancoUrl from '@/assets/brand/FunkyRoots/IMAGOTIPO/FunkyRoots Blanco PNG.webp'

/**
 * HeroVideoSection — Video a pantalla completa optimizado (WebM VP9 + MP4 H.264 + Poster WebP).
 * Diseño visual limpio, sin barras técnicas ni botones superfluos.
 */
defineProps({
  brand: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="hero-video theme-dark" aria-label="Presentación principal de FunkyRoots Estudios">
    <div class="hero-video__media" aria-hidden="true">
      <video
        class="hero-video__element"
        :poster="brand.heroVideo.posterUrl"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
      >
        <source :src="brand.heroVideo.videoWebmUrl" type="video/webm" />
        <source :src="brand.heroVideo.videoUrl" type="video/mp4" />
      </video>
      <div class="hero-video__scrim"></div>
    </div>

    <div class="container-editorial hero-video__content">
      <div class="hero-video__main">
        <img
          :src="imagotipoBlancoUrl"
          alt="FunkyRoots Estudios"
          class="hero-video__imagotipo"
          fetchpriority="high"
        />

        <h1 class="font-display hero-video__title">
          {{ brand.heroVideo.headline }}
        </h1>

        <p class="hero-video__subtitle">
          {{ brand.heroVideo.subheadline }}
        </p>

        <div class="hero-video__actions">
          <BaseButton variant="primary" href="#obras">
            Ver Obras y Videos
          </BaseButton>
          <BaseButton variant="ghost" href="#artistas">
            Explorar Artistas
          </BaseButton>
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
  filter: saturate(0.96) contrast(1.04);
}

.hero-video__scrim {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 35%, rgba(53, 90, 76, 0.34) 0%, transparent 60%),
    linear-gradient(
      180deg,
      rgba(20, 22, 21, 0.45) 0%,
      rgba(20, 22, 21, 0.38) 45%,
      rgba(20, 22, 21, 0.96) 100%
    );
}

.hero-video__content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: calc(var(--navbar-height) + var(--space-12));
  padding-bottom: var(--space-16);
  gap: var(--space-8);
}

.hero-video__main {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  max-width: 780px;
  margin-top: auto;
}

.hero-video__imagotipo {
  height: clamp(56px, 7vw, 84px);
  width: auto;
  object-fit: contain;
  align-self: flex-start;
}

.hero-video__title {
  font-size: clamp(2.5rem, 5.4vw, 4.5rem);
  font-weight: 700;
  color: var(--brand-bone);
  letter-spacing: -0.03em;
  line-height: 1.06;
  text-wrap: balance;
}

.hero-video__subtitle {
  font-size: clamp(1.0625rem, 1.8vw, 1.25rem);
  line-height: 1.6;
  color: rgba(var(--brand-beige-rgb), 0.9);
  max-width: 52ch;
}

.hero-video__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4);
  padding-top: var(--space-2);
}
</style>
