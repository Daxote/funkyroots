<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import YouTubeEmbed from '@/components/ui/YouTubeEmbed.vue'

/**
 * WorksSection — Galería audiovisual centrada en el reproductor multimedia.
 * Destaca la obra principal a gran formato seguida de una grilla visual limpia,
 * eliminando fichas técnicas redundantes y exceso de etiquetas.
 */
const props = defineProps({
  works: {
    type: Array,
    required: true
  }
})

const featuredWork = computed(() => props.works[0] || null)
const gridWorks = computed(() => props.works.slice(1))
</script>

<template>
  <section id="obras" class="works-section theme-graphite py-24" aria-label="Obras y sesiones audiovisuales">
    <div class="container-editorial">
      <SectionHeader
        eyebrow="Obras & Sesiones"
        title="Archivo Audiovisual & Sonoro"
        theme="dark"
      />

      <!-- Obra Principal Destacada a Gran Escala -->
      <article v-if="featuredWork" class="work-featured">
        <div class="work-featured__player">
          <YouTubeEmbed
            :youtube-id="featuredWork.youtubeId"
            :title="`${featuredWork.artistName} — ${featuredWork.title}`"
            :custom-poster="featuredWork.poster"
          />
        </div>

        <div class="work-featured__bar">
          <div class="work-featured__main">
            <span class="work-featured__meta">
              {{ featuredWork.category }} · {{ featuredWork.year }}
            </span>
            <h3 class="font-display work-featured__title">
              {{ featuredWork.title }}
            </h3>
            <p class="work-featured__desc">
              {{ featuredWork.description }}
            </p>
          </div>

          <RouterLink
            :to="`/test/artistas/${featuredWork.artistSlug}`"
            class="work-featured__artist-pill"
          >
            <span>{{ featuredWork.artistName }}</span>
            <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
      </article>

      <!-- Grilla Visual de Obras -->
      <div class="works-section__grid gap-8">
        <article
          v-for="work in gridWorks"
          :key="work.id"
          class="work-card"
        >
          <YouTubeEmbed
            :youtube-id="work.youtubeId"
            :title="`${work.artistName} — ${work.title}`"
            :custom-poster="work.poster"
          />

          <div class="work-card__body">
            <div class="work-card__header">
              <div>
                <span class="work-card__meta">{{ work.category }} · {{ work.year }}</span>
                <h3 class="font-display work-card__title">
                  {{ work.title }}
                </h3>
              </div>

              <RouterLink
                :to="`/test/artistas/${work.artistSlug}`"
                class="work-card__artist-link"
              >
                <span>{{ work.artistName }}</span>
                <span aria-hidden="true">→</span>
              </RouterLink>
            </div>

            <p class="work-card__desc">
              {{ work.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.works-section {
  background-color: var(--brand-graphite);
  color: var(--brand-bone);
}

.work-featured {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  padding: var(--space-6);
  margin-bottom: var(--space-8);
  background-color: var(--brand-dark);
  border: 1px solid var(--border-dark-subtle);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-soft);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .work-featured {
    padding: var(--space-8);
  }
}

.work-featured__bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-4);
}

@media (min-width: 768px) {
  .work-featured__bar {
    flex-direction: row;
    align-items: center;
  }
}

.work-featured__main {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.work-featured__meta,
.work-card__meta {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--brand-ochre);
}

.work-featured__title {
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 700;
  color: var(--brand-bone);
}

.work-featured__desc {
  font-size: 0.9375rem;
  color: rgba(var(--brand-beige-rgb), 0.85);
  max-width: 60ch;
}

.work-featured__artist-pill {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--touch-target-min);
  padding: 0.6rem 1.25rem;
  width: fit-content;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--brand-bone);
  background-color: rgba(var(--brand-pine-rgb), 0.45);
  border: 1px solid rgba(var(--brand-sage-rgb), 0.4);
  border-radius: var(--radius-pill);
  transition:
    background-color var(--duration-fast) var(--ease-editorial),
    transform var(--duration-fast) var(--ease-editorial);
}

.work-featured__artist-pill:hover {
  background-color: var(--brand-pine);
  transform: translateY(-2px);
}

.works-section__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  width: 100%;
}

@media (min-width: 768px) {
  .works-section__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.work-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-6);
  background-color: var(--brand-dark);
  border: 1px solid var(--border-dark-subtle);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-soft);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  transition: border-color var(--duration-base) var(--ease-editorial);
}

.work-card:hover {
  border-color: rgba(var(--brand-sage-rgb), 0.35);
}

.work-card__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: 0 var(--space-2);
}

.work-card__header {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
}

.work-card__title {
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--brand-bone);
}

.work-card__artist-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: 38px;
  padding: 0.35rem 0.9rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--brand-bone);
  background-color: rgba(245, 245, 240, 0.06);
  border-radius: var(--radius-pill);
  transition:
    background-color var(--duration-fast) var(--ease-editorial),
    color var(--duration-fast) var(--ease-editorial);
}

.work-card__artist-link:hover {
  background-color: var(--brand-terracotta);
  color: var(--brand-bone);
}

.work-card__desc {
  font-size: 0.9375rem;
  line-height: 1.55;
  color: rgba(var(--brand-beige-rgb), 0.82);
}
</style>
