<script setup>
import { ref, computed } from 'vue'
import BaseBadge from './BaseBadge.vue'

/**
 * YouTubeEmbed — Reproductor YouTube con patrón Facade (lazy iframe) + link directo a YouTube.
 * - Previene CLS (< 0.1) reservando proporción 16:9 exacta.
 * - Carga el iframe de youtube-nocookie.com solo cuando el usuario interactúa.
 * - Incluye enlace externo accesible (>44x44px) para abrir directamente en YouTube.
 */
const props = defineProps({
  youtubeId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    default: 'YOUTUBE 4K'
  },
  duration: {
    type: String,
    default: ''
  },
  customPoster: {
    type: String,
    default: ''
  }
})

const isActivated = ref(false)

const thumbnailUrl = computed(() => {
  if (props.customPoster) return props.customPoster
  return `https://i.ytimg.com/vi/${props.youtubeId}/hqdefault.jpg`
})

const directWatchUrl = computed(() => {
  return `https://www.youtube.com/watch?v=${props.youtubeId}`
})

const embedIframeUrl = computed(() => {
  return `https://www.youtube-nocookie.com/embed/${props.youtubeId}?autoplay=1&rel=0&modestbranding=1`
})

const activatePlayer = () => {
  isActivated.value = true
}
</script>

<template>
  <div class="yt-facade">
    <div class="yt-facade__viewport">
      <!-- Estado Facade (Ligero, sin scripts de terceros hasta hacer clic) -->
      <button
        v-if="!isActivated"
        type="button"
        class="yt-facade__trigger"
        :aria-label="`Reproducir video: ${title}`"
        @click="activatePlayer"
      >
        <img
          :src="thumbnailUrl"
          :alt="`Portada del video ${title}`"
          class="yt-facade__poster"
          loading="lazy"
          decoding="async"
        />
        <div class="yt-facade__overlay" aria-hidden="true"></div>

        <div class="yt-facade__top-bar">
          <BaseBadge variant="ochre">{{ tag }}</BaseBadge>
          <span v-if="duration" class="yt-facade__duration font-mono">{{ duration }}</span>
        </div>

        <div class="yt-facade__play-btn" aria-hidden="true">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5.14V19.14L19 12.14L8 5.14Z" />
          </svg>
          <span class="font-mono yt-facade__play-label">REPRODUCIR</span>
        </div>
      </button>

      <!-- Iframe real inyectado bajo demanda -->
      <iframe
        v-else
        :src="embedIframeUrl"
        :title="title"
        class="yt-facade__iframe"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>

    <!-- Barra Técnica Inferior con Título y Link Directo a YouTube -->
    <div class="yt-facade__footer">
      <span class="yt-facade__title">{{ title }}</span>
      <a
        :href="directWatchUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="yt-facade__external-link font-mono"
        :aria-label="`Abrir ${title} directamente en YouTube (nueva pestaña)`"
      >
        <span>VER EN YOUTUBE</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </a>
    </div>
  </div>
</template>

<style scoped>
.yt-facade {
  display: flex;
  flex-direction: column;
  background-color: var(--brand-dark);
  border: 1px solid var(--border-dark-subtle);
  border-radius: 2px;
  overflow: hidden;
}

.yt-facade__viewport {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: var(--brand-dark);
  overflow: hidden;
}

.yt-facade__trigger {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  text-align: left;
}

.yt-facade__poster {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.88) contrast(1.05);
  transition: transform var(--duration-slow) var(--ease-editorial),
              filter var(--duration-base) var(--ease-editorial);
}

.yt-facade__trigger:hover .yt-facade__poster {
  transform: scale(1.03);
  filter: saturate(1) contrast(1.08);
}

.yt-facade__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(20, 22, 21, 0.55) 0%,
    rgba(20, 22, 21, 0.25) 50%,
    rgba(20, 22, 21, 0.78) 100%
  );
}

.yt-facade__top-bar {
  position: absolute;
  top: var(--space-4);
  left: var(--space-4);
  right: var(--space-4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
}

.yt-facade__duration {
  padding: var(--space-1) var(--space-2);
  font-size: 0.75rem;
  color: var(--brand-bone);
  background-color: rgba(20, 22, 21, 0.82);
  border: 1px solid var(--border-dark-subtle);
}

.yt-facade__play-btn {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  min-height: var(--touch-target-min);
  padding: var(--space-3) var(--space-6);
  background-color: var(--brand-terracotta);
  color: var(--brand-bone);
  border: 1px solid rgba(var(--brand-bone-rgb), 0.25);
  border-radius: 2px;
  transition:
    background-color var(--duration-base) var(--ease-editorial),
    transform var(--duration-fast) var(--ease-editorial),
    border-color var(--duration-base) var(--ease-editorial);
}

.yt-facade__trigger:hover .yt-facade__play-btn {
  background-color: #9e452c;
  border-color: var(--brand-ochre);
  transform: scale(1.04);
}

.yt-facade__trigger:active .yt-facade__play-btn {
  transform: scale(0.98);
}

.yt-facade__play-label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
}

.yt-facade__iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.yt-facade__footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
  background-color: var(--brand-dark);
  border-top: 1px solid var(--border-dark-subtle);
}

.yt-facade__title {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--brand-bone);
}

.yt-facade__external-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--touch-target-min);
  padding: var(--space-2) var(--space-3);
  font-size: 0.75rem;
  color: var(--brand-ochre);
  border: 1px solid transparent;
  border-radius: 2px;
  transition:
    color var(--duration-fast) var(--ease-editorial),
    border-color var(--duration-fast) var(--ease-editorial),
    background-color var(--duration-fast) var(--ease-editorial);
}

.yt-facade__external-link:hover {
  color: var(--brand-bone);
  border-color: var(--brand-sage);
  background-color: rgba(var(--brand-sage-rgb), 0.14);
}
</style>
