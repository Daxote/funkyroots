<script setup>
import { RouterLink } from 'vue-router'
import SectionHeader from '@/components/ui/SectionHeader.vue'

/**
 * ArtistsSection — Tarjetas visuales e inmersivas en formato galería.
 * La fotografía/portada ocupa todo el protagonismo con bordes redondeados orgánicos,
 * sin chips ni numeraciones técnicas.
 */
defineProps({
  artists: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section id="artistas" class="artists-section theme-dark py-24" aria-label="Artistas del sello">
    <div class="container-editorial">
      <SectionHeader
        eyebrow="Catálogo Artístico"
        title="Voces, Beatmakers & Colectivos"
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
            :aria-label="`Explorar perfil y obras de ${artist.name}`"
          >
            <div class="artist-card__media">
              <img
                :src="artist.coverImage"
                :alt="artist.name"
                class="artist-card__image"
                loading="lazy"
                decoding="async"
              />
              <div class="artist-card__scrim" aria-hidden="true"></div>

              <div class="artist-card__overlay-content">
                <span class="artist-card__role">{{ artist.role }}</span>
                <h3 class="font-display artist-card__name">
                  {{ artist.name }}
                </h3>
                <p class="artist-card__bio">
                  {{ artist.shortBio }}
                </p>

                <span class="artist-card__cta">
                  <span>Explorar obras</span>
                  <span class="artist-card__arrow" aria-hidden="true">→</span>
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
}

.artists-section__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  width: 100%;
}

@media (min-width: 768px) {
  .artists-section__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.artist-card {
  border-radius: var(--radius-xl);
  overflow: hidden;
  background-color: var(--brand-graphite);
  box-shadow: var(--shadow-media);
  border: 1px solid var(--border-dark-subtle);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  transition:
    transform var(--duration-base) var(--ease-editorial),
    border-color var(--duration-base) var(--ease-editorial),
    box-shadow var(--duration-base) var(--ease-editorial);
}

.artist-card:hover {
  transform: translateY(-4px);
  border-color: rgba(var(--brand-sage-rgb), 0.45);
  box-shadow: 0 28px 56px -14px rgba(0, 0, 0, 0.7);
}

.artist-card__link {
  display: block;
  height: 100%;
  width: 100%;
  border-radius: var(--radius-xl);
}

.artist-card__media {
  position: relative;
  width: 100%;
  max-width: 100%;
  aspect-ratio: 16 / 11;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}

@media (min-width: 640px) {
  .artist-card__media {
    min-height: 360px;
  }
}

.artist-card__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.94) contrast(1.04);
  transition:
    transform var(--duration-slow) var(--ease-editorial),
    filter var(--duration-base) var(--ease-editorial);
}

.artist-card:hover .artist-card__image {
  transform: scale(1.06);
  filter: saturate(1.08) contrast(1.06);
}

.artist-card__scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(20, 22, 21, 0.05) 0%,
    rgba(20, 22, 21, 0.42) 42%,
    rgba(20, 22, 21, 0.94) 100%
  );
}

.artist-card__overlay-content {
  position: relative;
  z-index: 2;
  width: 100%;
  box-sizing: border-box;
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

@media (min-width: 640px) {
  .artist-card__overlay-content {
    padding: var(--space-8);
  }
}

.artist-card__role {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--brand-ochre);
  letter-spacing: 0.03em;
}

.artist-card__name {
  font-size: clamp(1.75rem, 2.8vw, 2.25rem);
  font-weight: 700;
  color: var(--brand-bone);
}

.artist-card__bio {
  font-size: 0.9375rem;
  line-height: 1.55;
  color: rgba(var(--brand-beige-rgb), 0.88);
  max-width: 48ch;
  margin-top: var(--space-1);
}

.artist-card__cta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-3);
  padding: 0.45rem 1.1rem;
  width: fit-content;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--brand-bone);
  background-color: rgba(var(--brand-terracotta-rgb), 0.88);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: var(--radius-pill);
  transition:
    background-color var(--duration-fast) var(--ease-editorial),
    transform var(--duration-fast) var(--ease-editorial);
}

.artist-card:hover .artist-card__cta {
  background-color: var(--brand-terracotta);
}

.artist-card__arrow {
  transition: transform var(--duration-fast) var(--ease-editorial);
}

.artist-card:hover .artist-card__arrow {
  transform: translateX(4px);
}
</style>
