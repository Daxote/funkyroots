<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { funkyRootsRepository } from '@/core/data/funkyRootsRepository'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import YouTubeEmbed from '@/components/ui/YouTubeEmbed.vue'

/**
 * ArtistDetailView — Vista dedicada de artista a pantalla completa (`/artistas/:slug`).
 * - Soporta `labels` múltiples, `role`, `videoId` y `youtubeId` del catálogo real de @FunkyRootsEstudios.
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
    document.title = `${artist.value.name} // FunkyRoots Estudios`
  }
})

const goBackToRoster = () => {
  router.push('/')
}
</script>

<template>
  <div class="artist-detail theme-dark">
    <!-- Estado Encontrado -->
    <template v-if="artist">
      <!-- Hero Editorial de Artista a Pantalla Completa -->
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
          <!-- Barra de Retorno con Preservación de Scroll -->
          <div class="artist-detail__nav-bar">
            <button
              type="button"
              class="artist-detail__back-btn font-mono"
              aria-label="Volver al catálogo principal en la posición anterior"
              @click="goBackToRoster"
            >
              <span aria-hidden="true">←</span>
              <span>VOLVER AL ROSTER // INICIO</span>
            </button>

            <div class="artist-detail__badges">
              <BaseBadge variant="ochre">{{ artist.index }}</BaseBadge>
              <BaseBadge
                v-for="label in (artist.labels || [artist.labelTag])"
                :key="label"
                variant="sage"
              >
                {{ label }}
              </BaseBadge>
            </div>
          </div>

          <!-- Titular e Identidad Sonora -->
          <div class="artist-detail__hero-main">
            <p class="font-mono artist-detail__genre">
              {{ artist.role || artist.genre }} // {{ artist.origin }}
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
                :aria-label="`Ver obras de ${artist.name} en YouTube`"
              >
                VER EN YOUTUBE ↗
              </BaseButton>
              <BaseButton
                variant="secondary"
                :href="artist.externalLinks.spotify"
                target="_blank"
                :aria-label="`Escuchar playlist oficial de FunkyRoots en Spotify`"
              >
                SPOTIFY PLAYLIST ↗
              </BaseButton>
              <BaseButton
                v-if="artist.externalLinks.soundcloud"
                variant="ghost"
                :href="artist.externalLinks.soundcloud"
                target="_blank"
              >
                SOUNDCLOUD ↗
              </BaseButton>
              <BaseButton
                variant="ghost"
                href="#sesiones-video"
              >
                IR A VIDEOS DESTACADOS ↓
              </BaseButton>
            </div>
          </div>
        </div>
      </section>

      <!-- Biografía & Créditos / Colaboraciones -->
      <section class="artist-detail__bio-section py-24" aria-label="Biografía y créditos">
        <div class="container-editorial artist-detail__bio-grid gap-8">
          <div class="artist-detail__narrative">
            <span class="technical-index artist-detail__section-tag">
              EXPEDIENTE // PERFIL &amp; CATÁLOGO
            </span>
            <h2 class="font-display artist-detail__subtitle">
              Trayectoria en FunkyRoots Estudios
            </h2>
            <div class="artist-detail__paragraphs">
              <p v-for="(paragraph, idx) in artist.fullBio" :key="idx">
                {{ paragraph }}
              </p>
            </div>
          </div>

          <aside class="artist-detail__lineup-card p-8" aria-label="Roles y conexiones en el sello">
            <span class="font-mono artist-detail__card-code">FICHA TÉCNICA // CRÉDITOS &amp; RED</span>
            <h3 class="font-display artist-detail__card-title">
              Roles &amp; Colaboraciones
            </h3>
            <ul class="artist-detail__lineup-list">
              <li
                v-for="member in artist.lineup"
                :key="member"
                class="artist-detail__lineup-item"
              >
                <span class="font-mono artist-detail__bullet" aria-hidden="true">//</span>
                <span>{{ member }}</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <!-- Álbumes / Producciones en el Sello -->
      <section class="artist-detail__discography theme-graphite py-24" aria-label="Álbumes y Producciones">
        <div class="container-editorial">
          <SectionHeader
            index="ARCHIVO // PRODUCCIONES"
            title="Álbumes, Cintas de Ritmos & Singles"
            :subtitle="`Obras producidas, grabadas o editadas junto a ${artist.name} en FunkyRoots Estudios.`"
            theme="dark"
          />

          <div class="artist-detail__disc-grid gap-8">
            <article
              v-for="release in artist.discography"
              :key="release.id"
              class="release-card p-6"
            >
              <div class="release-card__cover-wrap">
                <img
                  :src="release.cover"
                  :alt="`Portada de ${release.title}`"
                  class="release-card__cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div class="release-card__body">
                <div class="release-card__badges">
                  <BaseBadge variant="ochre">{{ release.catalogCode }} · {{ release.year }}</BaseBadge>
                  <BaseBadge variant="neutral-dark">{{ release.type }}</BaseBadge>
                </div>

                <h3 class="font-display release-card__title">
                  {{ release.title }}
                </h3>

                <p class="font-mono release-card__role">
                  {{ release.role }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Videos YouTube Destacados -->
      <section id="sesiones-video" class="artist-detail__videos py-24" aria-label="Videos de YouTube destacados">
        <div class="container-editorial">
          <SectionHeader
            index="AUDIOVISUAL // YOUTUBE"
            title="Videos Destacados en @FunkyRootsEstudios"
            subtitle="Reproduce las obras directamente en esta vista o ábrelas en el canal oficial de YouTube."
            theme="dark"
          />

          <div class="artist-detail__video-grid gap-8">
            <div
              v-for="video in artist.videos"
              :key="video.id || video.videoId"
              class="artist-detail__video-item"
            >
              <YouTubeEmbed
                :youtube-id="video.videoId || video.youtubeId"
                :title="video.title"
                :tag="`${video.tag || 'YOUTUBE'} // ${video.year}`"
                :duration="video.duration"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Explorar Otros Artistas del Roster -->
      <section class="artist-detail__more py-16" aria-label="Otros artistas del sello">
        <div class="container-editorial">
          <div class="artist-detail__more-header">
            <span class="font-mono artist-detail__section-tag">CONTINUAR EXPLORACIÓN // ROSTER</span>
            <BaseButton variant="ghost" to="/">
              ← VOLVER A LA PORTADA PRINCIPAL
            </BaseButton>
          </div>

          <div class="artist-detail__more-grid gap-6">
            <RouterLink
              v-for="other in relatedArtists"
              :key="other.id"
              :to="`/artistas/${other.slug}`"
              class="artist-detail__more-card p-6"
            >
              <span class="font-mono artist-detail__more-code">{{ other.index }}</span>
              <strong class="font-display artist-detail__more-name">{{ other.name }}</strong>
              <span class="font-mono artist-detail__more-genre">{{ other.role || other.genre }}</span>
            </RouterLink>
          </div>
        </div>
      </section>
    </template>

    <!-- Estado 404 de Artista no encontrado -->
    <section v-else class="container-editorial py-24 artist-detail__not-found">
      <BaseBadge variant="ochre">ERROR 404 // ARCHIVO NO ENCONTRADO</BaseBadge>
      <h1 class="font-display artist-detail__title">
        No encontramos el expediente solicitado.
      </h1>
      <p class="artist-detail__lead">
        Verifica la dirección o regresa al catálogo principal de artistas de FunkyRoots Estudios.
      </p>
      <div>
        <BaseButton variant="primary" to="/">
          VOLVER AL INICIO
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
  min-height: 86vh;
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid var(--border-dark-subtle);
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
  filter: saturate(0.85) contrast(1.08);
}

.artist-detail__hero-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(20, 22, 21, 0.88) 0%,
    rgba(20, 22, 21, 0.65) 45%,
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--border-dark-subtle);
}

.artist-detail__back-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  min-height: var(--touch-target-min);
  padding: var(--space-2) var(--space-4);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--brand-bone);
  background-color: rgba(46, 46, 46, 0.65);
  border: 1px solid var(--border-dark-strong);
  border-radius: 2px;
  cursor: pointer;
  transition:
    background-color var(--duration-fast) var(--ease-editorial),
    border-color var(--duration-fast) var(--ease-editorial);
}

.artist-detail__back-btn:hover {
  background-color: var(--brand-pine);
  border-color: var(--brand-sage);
}

.artist-detail__badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.artist-detail__hero-main {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  max-width: 860px;
  margin-top: auto;
}

.artist-detail__genre {
  font-size: 0.8125rem;
  color: var(--brand-ochre);
}

.artist-detail__title {
  font-size: clamp(2.5rem, 5vw, 4.25rem);
  font-weight: 700;
  color: var(--brand-bone);
}

.artist-detail__lead {
  font-size: clamp(1.0625rem, 1.8vw, 1.25rem);
  line-height: 1.65;
  color: var(--brand-beige);
  max-width: 64ch;
}

.artist-detail__external-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  padding-top: var(--space-2);
}

.artist-detail__bio-section {
  border-bottom: 1px solid var(--border-dark-subtle);
}

.artist-detail__bio-grid {
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
}

@media (min-width: 960px) {
  .artist-detail__bio-grid {
    grid-template-columns: 1.35fr 0.85fr;
  }
}

.artist-detail__narrative {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.artist-detail__section-tag {
  color: var(--brand-ochre);
}

.artist-detail__subtitle {
  font-size: clamp(1.5rem, 2.6vw, 2.125rem);
  font-weight: 600;
  color: var(--brand-bone);
}

.artist-detail__paragraphs {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  font-size: 1.0625rem;
  line-height: 1.75;
  color: var(--brand-beige);
}

.artist-detail__lineup-card {
  background-color: var(--brand-graphite);
  border: 1px solid var(--border-dark-subtle);
  border-top: 3px solid var(--brand-pine);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.artist-detail__card-code {
  font-size: 0.75rem;
  color: var(--brand-ochre);
}

.artist-detail__card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--brand-bone);
}

.artist-detail__lineup-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
}

.artist-detail__lineup-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: 0.9375rem;
  color: var(--brand-bone);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--border-dark-subtle);
}

.artist-detail__bullet {
  color: var(--brand-sage);
}

.artist-detail__discography {
  border-bottom: 1px solid var(--border-dark-subtle);
}

.artist-detail__disc-grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .artist-detail__disc-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.release-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  background-color: var(--brand-dark);
  border: 1px solid var(--border-dark-subtle);
  border-radius: 2px;
  align-items: center;
}

@media (min-width: 640px) {
  .release-card {
    grid-template-columns: 160px 1fr;
  }
}

.release-card__cover-wrap {
  aspect-ratio: 1 / 1;
  background-color: var(--brand-graphite);
  border: 1px solid var(--border-dark-subtle);
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
  gap: var(--space-3);
}

.release-card__badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.release-card__title {
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--brand-bone);
}

.release-card__role {
  font-size: 0.75rem;
  color: var(--brand-sage);
  line-height: 1.5;
}

.artist-detail__videos {
  border-bottom: 1px solid var(--border-dark-subtle);
}

.artist-detail__video-grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 960px) {
  .artist-detail__video-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.artist-detail__more-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.artist-detail__more-grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .artist-detail__more-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.artist-detail__more-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-height: var(--touch-target-min);
  background-color: var(--brand-graphite);
  border: 1px solid var(--border-dark-subtle);
  border-radius: 2px;
  transition:
    border-color var(--duration-fast) var(--ease-editorial),
    transform var(--duration-fast) var(--ease-editorial);
}

.artist-detail__more-card:hover {
  border-color: var(--brand-sage);
  transform: translateY(-2px);
}

.artist-detail__more-code {
  font-size: 0.75rem;
  color: var(--brand-ochre);
}

.artist-detail__more-name {
  font-size: 1.25rem;
  color: var(--brand-bone);
}

.artist-detail__more-genre {
  font-size: 0.75rem;
  color: var(--brand-beige);
}

.artist-detail__not-found {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  padding-top: calc(var(--navbar-height) + var(--space-16));
}
</style>
