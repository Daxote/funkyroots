<script setup>
import { RouterLink } from 'vue-router'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import YouTubeEmbed from '@/components/ui/YouTubeEmbed.vue'

/**
 * WorksSection — Tema Dark (#2E2E2E Gris Grafito).
 * - Catálogo de obras y sesiones audiovisuales con soporte integrado de YouTubeEmbed (Facade lazy + link externo).
 * - Enlace cruzado hacia el expediente del artista correspondiente.
 */
defineProps({
  works: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section id="obras" class="works-section theme-graphite py-24" aria-label="Catálogo de obras y sesiones">
    <div class="container-editorial">
      <SectionHeader
        index="03 // OBRAS & SESIONES"
        title="Archivo Fonográfico & Live Sessions"
        subtitle="Selección curada de lanzamientos del sello y registros audiovisuales filmados en nuestra Sala A. Reproducción bajo demanda optimizada y acceso directo a YouTube."
        theme="dark"
      />

      <div class="works-section__list gap-8">
        <article
          v-for="work in works"
          :key="work.id"
          class="work-item p-8"
        >
          <!-- Columna de Ficha Técnica Editorial -->
          <div class="work-item__info">
            <div class="work-item__meta">
              <BaseBadge variant="ochre">{{ work.catalogCode }} // {{ work.year }}</BaseBadge>
              <BaseBadge variant="sage">{{ work.roleTag }}</BaseBadge>
            </div>

            <h3 class="font-display work-item__title">
              {{ work.title }}
            </h3>

            <p class="work-item__description">
              {{ work.description }}
            </p>

            <div class="work-item__credits">
              <div class="work-item__credit-block">
                <span class="font-mono work-item__credit-label">INTÉRPRETE // PROYECTO</span>
                <RouterLink
                  :to="`/artistas/${work.artistSlug}`"
                  class="work-item__artist-link font-display"
                >
                  <span>{{ work.artistName }}</span>
                  <span class="font-mono work-item__artist-arrow" aria-hidden="true">→ VER PERFIL</span>
                </RouterLink>
              </div>

              <div class="work-item__credit-block">
                <span class="font-mono work-item__credit-label">SELLO EDITORIAL</span>
                <span class="font-mono work-item__label-name">{{ work.labelName }}</span>
              </div>
            </div>
          </div>

          <!-- Columna de Reproductor YouTube Facade -->
          <div class="work-item__player">
            <YouTubeEmbed
              :youtube-id="work.youtubeId"
              :title="`${work.artistName} — ${work.title}`"
              :tag="work.catalogCode"
            />
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
  border-bottom: 1px solid var(--border-dark-subtle);
}

.works-section__list {
  display: flex;
  flex-direction: column;
}

.work-item {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
  background-color: var(--brand-dark);
  border: 1px solid var(--border-dark-subtle);
  border-radius: 2px;
  align-items: center;
}

@media (min-width: 960px) {
  .work-item {
    grid-template-columns: 1fr 1.15fr;
  }
}

.work-item__info {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.work-item__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3);
}

.work-item__title {
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 600;
  color: var(--brand-bone);
}

.work-item__description {
  font-size: 1rem;
  line-height: 1.65;
  color: var(--brand-beige);
}

.work-item__credits {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  padding-top: var(--space-4);
  border-top: 1px solid var(--border-dark-subtle);
}

@media (min-width: 640px) {
  .work-item__credits {
    grid-template-columns: 1.2fr 1fr;
  }
}

.work-item__credit-block {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.work-item__credit-label {
  font-size: 0.6875rem;
  color: var(--brand-ochre);
}

.work-item__artist-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  min-height: var(--touch-target-min);
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--brand-bone);
  transition: color var(--duration-fast) var(--ease-editorial);
}

.work-item__artist-link:hover {
  color: var(--brand-terracotta);
}

.work-item__artist-arrow {
  font-size: 0.75rem;
  color: var(--brand-sage);
}

.work-item__label-name {
  display: inline-flex;
  align-items: center;
  min-height: var(--touch-target-min);
  font-size: 0.8125rem;
  color: var(--brand-beige);
}
</style>
