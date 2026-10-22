<script setup>
import { RouterLink } from 'vue-router'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'

/**
 * ArtistsSection — Tema Dark (#141615 Carbón Profundo).
 * - Muestra los 4 perfiles principales de @FunkyRootsEstudios: J. de la Ribera, Quífaro, Lencio y Da Mirloz Clan.
 * - Incluye Rol, Sellos (`labels`) y navegación hacia `/artistas/:slug` con preservación de scroll.
 */
defineProps({
  artists: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section id="artistas" class="artists-section theme-dark py-24" aria-label="Roster de artistas">
    <div class="container-editorial">
      <SectionHeader
        index="02 // ARTISTAS"
        title="Roster Oficial de FunkyRoots Estudios"
        subtitle="Productores, beatmakers, MCs y colectivos que conforman el catálogo de @FunkyRootsEstudios. Selecciona un perfil para explorar sus beat tapes, videoclips y producciones."
        theme="dark"
      />

      <div class="artists-section__grid gap-8">
        <article
          v-for="artist in artists"
          :key="artist.id"
          class="artist-card"
        >
          <RouterLink
            :to="`/test/artistas/${artist.slug}`"
            class="artist-card__link"
            :aria-label="`Explorar perfil completo, discografía y videos de ${artist.name}`"
          >
            <!-- Portada Editorial -->
            <div class="artist-card__media">
              <img
                :src="artist.coverImage"
                :alt="`Imagen de catálogo de ${artist.name}`"
                class="artist-card__image"
                loading="lazy"
                decoding="async"
              />
              <div class="artist-card__media-overlay"></div>
              <div class="artist-card__badges p-4">
                <span class="font-mono artist-card__index">{{ artist.index }}</span>
                <div class="artist-card__label-group">
                  <BaseBadge
                    v-for="label in (artist.labels || [artist.labelTag])"
                    :key="label"
                    variant="ochre"
                  >
                    {{ label }}
                  </BaseBadge>
                </div>
              </div>
            </div>

            <!-- Cuerpo de la Tarjeta (#2E2E2E) -->
            <div class="artist-card__body p-6">
              <div class="artist-card__meta font-mono">
                <span>{{ artist.role || artist.genre }}</span>
              </div>

              <h3 class="font-display artist-card__name">
                {{ artist.name }}
              </h3>

              <p class="artist-card__bio">
                {{ artist.shortBio }}
              </p>

              <div class="artist-card__footer">
                <span class="font-mono artist-card__stats">
                  {{ artist.discography.length }} PRODUCCIONES · {{ artist.videos.length }} VIDEOS YT
                </span>
                <span class="font-mono artist-card__cta">
                  ABRIR PERFIL →
                </span>
              </div>
            </div>
          </RouterLink>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.artists-section {
  background-color: var(--brand-dark);
  color: var(--brand-bone);
  border-bottom: 1px solid var(--border-dark-subtle);
}

.artists-section__grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .artists-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.artist-card {
  background-color: var(--brand-graphite);
  border: 1px solid var(--border-dark-subtle);
  border-radius: 2px;
  overflow: hidden;
  transition:
    border-color var(--duration-base) var(--ease-editorial),
    transform var(--duration-base) var(--ease-editorial);
}

.artist-card:hover {
  border-color: var(--brand-sage);
  transform: translateY(-2px);
}

.artist-card__link {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: var(--touch-target-min);
}

.artist-card__link:focus-visible {
  outline: 2px solid var(--brand-terracotta);
  outline-offset: -2px;
}

.artist-card__link:active {
  transform: scale(0.995);
}

.artist-card__media {
  position: relative;
  aspect-ratio: 16 / 10;
  background-color: var(--brand-dark);
  overflow: hidden;
}

.artist-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.88) contrast(1.06);
  transition:
    transform var(--duration-slow) var(--ease-editorial),
    filter var(--duration-base) var(--ease-editorial);
}

.artist-card:hover .artist-card__image {
  transform: scale(1.04);
  filter: saturate(1.02) contrast(1.08);
}

.artist-card__media-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(20, 22, 21, 0.58) 0%,
    rgba(20, 22, 21, 0.08) 45%,
    rgba(46, 46, 46, 0.92) 100%
  );
}

.artist-card__badges {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
}

.artist-card__label-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.artist-card__index {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--brand-bone);
  padding: var(--space-1) var(--space-2);
  background-color: rgba(20, 22, 21, 0.78);
  border: 1px solid var(--border-dark-subtle);
}

.artist-card__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: var(--space-4);
}

.artist-card__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
  font-size: 0.75rem;
  color: var(--brand-ochre);
}

.artist-card__name {
  font-size: 1.625rem;
  font-weight: 600;
  color: var(--brand-bone);
}

.artist-card__bio {
  font-size: 0.9375rem;
  line-height: 1.65;
  color: var(--brand-beige);
  flex: 1;
}

.artist-card__footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding-top: var(--space-4);
  border-top: 1px solid var(--border-dark-subtle);
}

.artist-card__stats {
  font-size: 0.75rem;
  color: var(--brand-sage);
}

.artist-card__cta {
  display: inline-flex;
  align-items: center;
  min-height: var(--touch-target-min);
  padding: var(--space-2) var(--space-3);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--brand-bone);
  background-color: rgba(var(--brand-terracotta-rgb), 0.22);
  border: 1px solid var(--brand-terracotta);
  border-radius: 2px;
  transition:
    background-color var(--duration-fast) var(--ease-editorial),
    color var(--duration-fast) var(--ease-editorial);
}

.artist-card:hover .artist-card__cta {
  background-color: var(--brand-terracotta);
  color: var(--brand-bone);
}
</style>
