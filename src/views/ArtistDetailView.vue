<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { funkyRootsRepository } from '@/core/data/funkyRootsRepository'
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import YouTubeEmbed from '@/components/ui/YouTubeEmbed.vue'

/**
 * ArtistDetailView — Vista dedicada centrada en el contenido multimedia del artista,
 * con bordes orgánicos redondeados, sin chips redundantes ni estética técnica.
 */
const props = defineProps({
  slug: {
    type: String,
    default: ''
  }
})

const route = useRoute()
const router = useRouter()

const currentSlug = computed(() => props.slug || route.params.slug)
const artist = computed(() => funkyRootsRepository.getArtistBySlug(currentSlug.value))
const allArtists = funkyRootsRepository.getArtists()

const relatedArtists = computed(() =>
  allArtists.filter((item) => item.slug !== currentSlug.value)
)

watchEffect(() => {
  if (typeof document !== 'undefined' && artist.value) {
    document.title = `${artist.value.name} — FunkyRoots Estudios`
  }
})

const goBackToRoster = () => {
  router.push('/test')
}
</script>

<template>
  <div class="artist-detail theme-dark">
    <template v-if="artist">
      <!-- Hero Visual Inmersivo -->
      <section class="artist-detail__hero" aria-labelledby="artist-name-heading">
        <div class="artist-detail__hero-backdrop" aria-hidden="true">
          <img
            :src="artist.heroImage"
            :alt="artist.name"
            class="artist-detail__hero-image"
          />
          <div class="artist-detail__hero-scrim"></div>
        </div>

        <div class="container-editorial artist-detail__hero-content">
          <div class="artist-detail__nav-bar">
            <button
              type="button"
              class="artist-detail__back-btn"
              aria-label="Volver al inicio"
              @click="goBackToRoster"
            >
              <span aria-hidden="true">←</span>
              <span>Volver a Artistas</span>
            </button>
          </div>

          <div class="artist-detail__hero-main">
            <p class="artist-detail__genre">
              {{ artist.role }} · {{ artist.origin }}
            </p>

            <h1 id="artist-name-heading" class="font-display artist-detail__title">
              {{ artist.name }}
            </h1>

            <p class="artist-detail__lead">
              {{ artist.shortBio }}
            </p>

            <div class="artist-detail__external-actions">
              <BaseButton
                variant="primary"
                :href="artist.externalLinks.youtube"
                target="_blank"
              >
                YouTube ↗
              </BaseButton>
              <BaseButton
                variant="secondary"
                :href="artist.externalLinks.spotify"
                target="_blank"
              >
                Spotify ↗
              </BaseButton>
              <BaseButton
                v-if="artist.externalLinks.soundcloud"
                variant="ghost"
                :href="artist.externalLinks.soundcloud"
                target="_blank"
              >
                SoundCloud ↗
              </BaseButton>
            </div>
          </div>
        </div>
      </section>

      <!-- Videos y Sesiones Destacadas (Protagonismo Multimedia) -->
      <section id="sesiones-video" class="artist-detail__videos py-24" aria-label="Videos destacados">
        <div class="container-editorial">
          <SectionHeader
            eyebrow="Audiovisual"
            title="Videos & Sesiones"
            theme="dark"
          />

          <div
            class="artist-detail__video-grid gap-8"
            :class="{ 'artist-detail__video-grid--single': artist.videos.length === 1 }"
          >
            <div
              v-for="video in artist.videos"
              :key="video.id || video.videoId"
              class="artist-detail__video-item"
            >
              <YouTubeEmbed
                :youtube-id="video.videoId || video.youtubeId"
                :title="video.title"
                :custom-poster="video.poster"
                show-footer
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Discografía & Lanzamientos -->
      <section class="artist-detail__discography theme-graphite py-24" aria-label="Discografía">
        <div class="container-editorial">
          <SectionHeader
            eyebrow="Catálogo Fonográfico"
            title="Álbumes, Beat Tapes & Singles"
            theme="dark"
          />

          <div class="artist-detail__disc-grid gap-8">
            <article
              v-for="release in artist.discography"
              :key="release.id"
              class="release-card"
            >
              <div class="release-card__cover-wrap">
                <img
                  :src="release.cover"
                  :alt="release.title"
                  class="release-card__cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div class="release-card__body">
                <span class="release-card__meta">
                  {{ release.type }} · {{ release.year }}
                </span>

                <h3 class="font-display release-card__title">
                  {{ release.title }}
                </h3>

                <p class="release-card__role">
                  {{ release.role }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Historia & Colaboradores -->
      <section class="artist-detail__bio-section py-24" aria-label="Historia y créditos">
        <div class="container-editorial artist-detail__bio-grid gap-8">
          <div class="artist-detail__narrative">
            <span class="eyebrow-label">Biografía</span>
            <h2 class="font-display artist-detail__subtitle">
              Sobre {{ artist.name }}
            </h2>
            <div class="artist-detail__paragraphs">
              <p v-for="(paragraph, idx) in artist.fullBio" :key="idx">
                {{ paragraph }}
              </p>
            </div>
          </div>

          <aside class="artist-detail__lineup-card" aria-label="Créditos y colaboraciones">
            <h3 class="font-display artist-detail__card-title">
              Créditos &amp; Conexiones
            </h3>
            <ul class="artist-detail__lineup-list">
              <li
                v-for="member in artist.lineup"
                :key="member"
                class="artist-detail__lineup-item"
              >
                <span class="artist-detail__dot" aria-hidden="true"></span>
                <span>{{ member }}</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <!-- Otros Artistas (Tarjetas Visuales) -->
      <section class="artist-detail__more py-16" aria-label="Otros artistas del sello">
        <div class="container-editorial">
          <div class="artist-detail__more-header">
            <h2 class="font-display artist-detail__more-heading">Más Artistas</h2>
            <BaseButton variant="ghost" to="/test">
              ← Volver al Inicio
            </BaseButton>
          </div>

          <div class="artist-detail__more-grid gap-6">
            <RouterLink
              v-for="other in relatedArtists"
              :key="other.id"
              :to="`/test/artistas/${other.slug}`"
              class="artist-detail__more-card"
            >
              <img
                :src="other.coverImage"
                :alt="other.name"
                class="artist-detail__more-img"
                loading="lazy"
              />
              <div class="artist-detail__more-scrim" aria-hidden="true"></div>
              <div class="artist-detail__more-info">
                <strong class="font-display artist-detail__more-name">{{ other.name }}</strong>
                <span class="artist-detail__more-genre">{{ other.role }}</span>
              </div>
            </RouterLink>
          </div>
        </div>
      </section>
    </template>

    <!-- Estado 404 -->
    <section v-else class="container-editorial py-24 artist-detail__not-found">
      <h1 class="font-display artist-detail__title">
        Artista no encontrado
      </h1>
      <p class="artist-detail__lead">
        Regresa al catálogo principal para explorar los proyectos de FunkyRoots Estudios.
      </p>
      <div>
        <BaseButton variant="primary" to="/test">
          Volver al Inicio
        </BaseButton>
      </div>
    </section>
  </div>
</template>

<style scoped>
.artist-detail {
  background-color: var(--brand-dark);
  color: var(--brand-bone);
}

.artist-detail__hero {
  position: relative;
  min-height: 82vh;
  display: flex;
  align-items: stretch;
  overflow: hidden;
}

.artist-detail__hero-backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.artist-detail__hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.92) contrast(1.06);
}

.artist-detail__hero-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(20, 22, 21, 0.55) 0%,
    rgba(20, 22, 21, 0.48) 45%,
    rgba(20, 22, 21, 0.98) 100%
  );
}

.artist-detail__hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: calc(var(--navbar-height) + var(--space-8));
  padding-bottom: var(--space-12);
  gap: var(--space-8);
}

.artist-detail__nav-bar {
  display: flex;
  align-items: center;
}

.artist-detail__back-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--touch-target-min);
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--brand-bone);
  background-color: rgba(20, 22, 21, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border-dark-strong);
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition:
    background-color var(--duration-fast) var(--ease-editorial),
    border-color var(--duration-fast) var(--ease-editorial),
    transform var(--duration-fast) var(--ease-editorial);
}

.artist-detail__back-btn:hover {
  background-color: var(--brand-pine);
  border-color: var(--brand-sage);
  transform: translateX(-3px);
}

.artist-detail__hero-main {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  max-width: 820px;
  margin-top: auto;
}

.artist-detail__genre {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--brand-ochre);
}

.artist-detail__title {
  font-size: clamp(2.5rem, 5.2vw, 4.25rem);
  font-weight: 700;
  color: var(--brand-bone);
}

.artist-detail__lead {
  font-size: clamp(1.0625rem, 1.8vw, 1.25rem);
  line-height: 1.6;
  color: rgba(var(--brand-beige-rgb), 0.9);
  max-width: 60ch;
}

.artist-detail__external-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  padding-top: var(--space-3);
}

.artist-detail__video-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  width: 100%;
}

@media (min-width: 960px) {
  .artist-detail__video-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .artist-detail__video-grid--single {
    grid-template-columns: minmax(0, 1fr);
    max-width: 960px;
  }
}

.artist-detail__disc-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  width: 100%;
}

@media (min-width: 768px) {
  .artist-detail__disc-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.release-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-6);
  padding: var(--space-6);
  background-color: var(--brand-dark);
  border: 1px solid var(--border-dark-subtle);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-soft);
  align-items: center;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

@media (min-width: 640px) {
  .release-card {
    grid-template-columns: 150px minmax(0, 1fr);
  }
}

.release-card__cover-wrap {
  aspect-ratio: 1 / 1;
  background-color: var(--brand-graphite);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.release-card__cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.release-card__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.release-card__meta {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--brand-ochre);
}

.release-card__title {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--brand-bone);
}

.release-card__role {
  font-size: 0.9375rem;
  color: rgba(var(--brand-beige-rgb), 0.82);
  line-height: 1.5;
}

.artist-detail__bio-grid {
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
}

@media (min-width: 960px) {
  .artist-detail__bio-grid {
    grid-template-columns: 1.3fr 0.9fr;
  }
}

.artist-detail__narrative {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.artist-detail__subtitle {
  font-size: clamp(1.625rem, 2.6vw, 2.125rem);
  font-weight: 700;
  color: var(--brand-bone);
}

.artist-detail__paragraphs {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  font-size: 1.0625rem;
  line-height: 1.7;
  color: rgba(var(--brand-beige-rgb), 0.88);
}

.artist-detail__lineup-card {
  padding: var(--space-8);
  background-color: var(--brand-graphite);
  border: 1px solid var(--border-dark-subtle);
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.artist-detail__card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--brand-bone);
}

.artist-detail__lineup-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.artist-detail__lineup-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: 0.9375rem;
  color: var(--brand-bone);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--border-dark-subtle);
}

.artist-detail__lineup-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.artist-detail__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--brand-sage);
  flex-shrink: 0;
}

.artist-detail__more-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.artist-detail__more-heading {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--brand-bone);
}

.artist-detail__more-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  width: 100%;
}

@media (min-width: 768px) {
  .artist-detail__more-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.artist-detail__more-card {
  position: relative;
  aspect-ratio: 16 / 10;
  display: flex;
  align-items: flex-end;
  padding: var(--space-6);
  background-color: var(--brand-graphite);
  border: 1px solid var(--border-dark-subtle);
  border-radius: var(--radius-lg);
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  transition:
    border-color var(--duration-fast) var(--ease-editorial),
    transform var(--duration-fast) var(--ease-editorial);
}

.artist-detail__more-card:hover {
  border-color: var(--brand-sage);
  transform: translateY(-3px);
}

.artist-detail__more-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-editorial);
}

.artist-detail__more-card:hover .artist-detail__more-img {
  transform: scale(1.06);
}

.artist-detail__more-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(20, 22, 21, 0.1) 0%,
    rgba(20, 22, 21, 0.88) 100%
  );
}

.artist-detail__more-info {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.artist-detail__more-name {
  font-size: 1.25rem;
  color: var(--brand-bone);
}

.artist-detail__more-genre {
  font-size: 0.8125rem;
  color: var(--brand-ochre);
}

.artist-detail__not-found {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  padding-top: calc(var(--navbar-height) + var(--space-16));
}
</style>
