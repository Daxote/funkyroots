<script setup>
import { useParallax } from '@/core/composables/useParallax'
import BaseBadge from '@/components/ui/BaseBadge.vue'

/**
 * ParallaxBannerSection — Sección de inicio con efecto parallax reactivo (requestAnimationFrame)
 * y manifiesto visual del estudio.
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
    <!-- Capa de Imagen de Fondo con Desplazamiento Parallax -->
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
      <div class="parallax-banner__card p-8">
        <div class="parallax-banner__header">
          <BaseBadge variant="ochre">{{ manifesto.index }}</BaseBadge>
          <span class="font-mono parallax-banner__tag">FILOSOFÍA ACÚSTICA &amp; EDITORIAL</span>
        </div>

        <h2 id="manifesto-heading" class="font-display parallax-banner__title">
          {{ title }}
        </h2>

        <blockquote class="parallax-banner__quote">
          “{{ manifesto.quote }}”
        </blockquote>

        <div class="parallax-banner__specs">
          <div
            v-for="spec in manifesto.specs"
            :key="spec.code"
            class="parallax-banner__spec-item p-4"
          >
            <span class="font-mono parallax-banner__spec-code">{{ spec.code }}</span>
            <span class="parallax-banner__spec-label">{{ spec.label }}</span>
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
  border-bottom: 1px solid var(--border-dark-subtle);
}

.parallax-banner__backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.parallax-banner__image {
  position: absolute;
  inset: -12% 0;
  background-size: cover;
  background-position: center;
  will-change: transform;
  filter: grayscale(25%) contrast(1.08);
}

.parallax-banner__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(20, 22, 21, 0.94) 0%,
    rgba(20, 22, 21, 0.82) 55%,
    rgba(53, 90, 76, 0.58) 100%
  );
}

.parallax-banner__inner {
  position: relative;
  z-index: 2;
}

.parallax-banner__card {
  max-width: 960px;
  background-color: rgba(20, 22, 21, 0.86);
  border: 1px solid var(--border-dark-strong);
  border-left: 3px solid var(--brand-pine);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.parallax-banner__header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
}

.parallax-banner__tag {
  font-size: 0.75rem;
  color: var(--brand-sage);
}

.parallax-banner__title {
  font-size: clamp(1.75rem, 3.2vw, 2.75rem);
  font-weight: 600;
  color: var(--brand-bone);
}

.parallax-banner__quote {
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  line-height: 1.65;
  color: var(--brand-beige);
  font-weight: 400;
}

.parallax-banner__specs {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  padding-top: var(--space-4);
  border-top: 1px solid var(--border-dark-subtle);
}

@media (min-width: 768px) {
  .parallax-banner__specs {
    grid-template-columns: repeat(3, 1fr);
  }
}

.parallax-banner__spec-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  background-color: rgba(46, 46, 46, 0.45);
  border: 1px solid var(--border-dark-subtle);
}

.parallax-banner__spec-code {
  font-size: 0.75rem;
  color: var(--brand-ochre);
  font-weight: 500;
}

.parallax-banner__spec-label {
  font-size: 0.9375rem;
  color: var(--brand-bone);
}
</style>
