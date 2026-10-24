<script setup>
import { useParallax } from '@/core/composables/useParallax'

/**
 * ParallaxBannerSection — Interludio visual con efecto parallax orgánico,
 * tarjetas redondeadas con desenfoque suave y sin numeraciones ni chips técnicos.
 */
defineProps({
  manifesto: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

const { containerRef, offsetY } = useParallax({ speed: 0.2, maxOffset: 100 })
</script>

<template>
  <section
    id="manifiesto"
    ref="containerRef"
    class="parallax-banner theme-dark py-24"
    aria-labelledby="manifesto-heading"
  >
    <div class="parallax-banner__backdrop" aria-hidden="true">
      <div
        class="parallax-banner__image"
        :style="{
          backgroundImage: `url(${manifesto.backgroundImage})`,
          transform: `translate3d(0, ${offsetY}px, 0) scale(1.16)`
        }"
      ></div>
      <div class="parallax-banner__overlay"></div>
    </div>

    <div class="container-editorial parallax-banner__inner">
      <div class="parallax-banner__card">
        <span class="eyebrow-label">Nuestra Esencia</span>

        <h2 id="manifesto-heading" class="font-display parallax-banner__title">
          {{ title }}
        </h2>

        <blockquote class="parallax-banner__quote">
          “{{ manifesto.quote }}”
        </blockquote>

        <div class="parallax-banner__pillars">
          <div
            v-for="pillar in manifesto.pillars"
            :key="pillar.title"
            class="parallax-banner__pillar"
          >
            <strong class="font-display parallax-banner__pillar-title">{{ pillar.title }}</strong>
            <span class="parallax-banner__pillar-label">{{ pillar.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.parallax-banner {
  position: relative;
  overflow: hidden;
}

.parallax-banner__backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.parallax-banner__image {
  position: absolute;
  inset: -14% 0;
  background-size: cover;
  background-position: center;
  will-change: transform;
  filter: saturate(0.88) contrast(1.06);
}

.parallax-banner__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    115deg,
    rgba(20, 22, 21, 0.92) 0%,
    rgba(20, 22, 21, 0.74) 52%,
    rgba(53, 90, 76, 0.55) 100%
  );
}

.parallax-banner__inner {
  position: relative;
  z-index: 2;
}

.parallax-banner__card {
  max-width: 960px;
  padding: clamp(2rem, 4vw, 3.5rem);
  background-color: rgba(20, 22, 21, 0.78);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border-dark-strong);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-media);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.parallax-banner__title {
  font-size: clamp(1.875rem, 3.4vw, 2.75rem);
  font-weight: 700;
  color: var(--brand-bone);
}

.parallax-banner__quote {
  font-size: clamp(1.125rem, 1.9vw, 1.35rem);
  line-height: 1.6;
  color: rgba(var(--brand-beige-rgb), 0.92);
}

.parallax-banner__pillars {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  padding-top: var(--space-4);
}

@media (min-width: 768px) {
  .parallax-banner__pillars {
    grid-template-columns: repeat(3, 1fr);
  }
}

.parallax-banner__pillar {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-6);
  background-color: rgba(245, 245, 240, 0.05);
  border: 1px solid var(--border-dark-subtle);
  border-radius: var(--radius-md);
}

.parallax-banner__pillar-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--brand-ochre);
}

.parallax-banner__pillar-label {
  font-size: 0.9375rem;
  color: var(--brand-bone);
  line-height: 1.45;
}
</style>
