<script setup>
import { ref, computed } from 'vue'

/**
 * YouTubeEmbed — Reproductor audiovisual limpio con miniaturas WebP,
 * esquinas redondeadas orgánicas y botón de reproducción envolvente sin exceso de chips.
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
  customPoster: {
    type: String,
    default: ''
  },
  showFooter: {
    type: Boolean,
    default: false
  }
})

const isActivated = ref(false)
const useFallbackThumb = ref(false)

const thumbnailUrl = computed(() => {
  if (props.customPoster) return props.customPoster
  if (useFallbackThumb.value) {
    return `https://i.ytimg.com/vi_webp/${props.youtubeId}/hqdefault.webp`
  }
  return `https://i.ytimg.com/vi_webp/${props.youtubeId}/maxresdefault.webp`
})

const handleThumbError = () => {
  if (!props.customPoster && !useFallbackThumb.value) {
    useFallbackThumb.value = true
  }
}

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
      <button
        v-if="!isActivated"
        type="button"
        class="yt-facade__trigger"
        :aria-label="`Reproducir video: ${title}`"
        @click="activatePlayer"
      >
        <img
          :src="thumbnailUrl"
          :alt="title"
          class="yt-facade__poster"
          loading="lazy"
          decoding="async"
          @error="handleThumbError"
        />
        <div class="yt-facade__overlay" aria-hidden="true"></div>

        <div class="yt-facade__play-circle" aria-hidden="true">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5.14V19.14L19 12.14L8 5.14Z" />
          </svg>
        </div>

        <div class="yt-facade__caption">
          <span class="font-display yt-facade__caption-title">{{ title }}</span>
        </div>
      </button>

      <iframe
        v-else
        :src="embedIframeUrl"
        :title="title"
        class="yt-facade__iframe"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>

    <div v-if="showFooter" class="yt-facade__footer">
      <span class="yt-facade__title">{{ title }}</span>
      <a
        :href="directWatchUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="yt-facade__external-link"
        :aria-label="`Abrir ${title} en YouTube`"
      >
        <span>YouTube</span>
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.yt-facade {
  display: flex;
  flex-direction: column;
  background-color: var(--brand-dark);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-media);
  border: 1px solid var(--border-dark-subtle);
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
  filter: saturate(0.95) contrast(1.04);
  transition:
    transform var(--duration-slow) var(--ease-editorial),
    filter var(--duration-base) var(--ease-editorial);
}

.yt-facade__trigger:hover .yt-facade__poster {
  transform: scale(1.04);
  filter: saturate(1.08) contrast(1.06);
}

.yt-facade__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(20, 22, 21, 0.12) 0%,
    rgba(20, 22, 21, 0.28) 55%,
    rgba(20, 22, 21, 0.86) 100%
  );
  transition: opacity var(--duration-base) var(--ease-editorial);
}

.yt-facade__play-circle {
  position: relative;
  z-index: 2;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 3px;
  background-color: rgba(var(--brand-terracotta-rgb), 0.92);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: var(--brand-bone);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(var(--brand-bone-rgb), 0.25);
  transition:
    transform var(--duration-base) var(--ease-editorial),
    background-color var(--duration-base) var(--ease-editorial),
    box-shadow var(--duration-base) var(--ease-editorial);
}

.yt-facade__trigger:hover .yt-facade__play-circle {
  transform: scale(1.1);
  background-color: var(--brand-terracotta);
  box-shadow: 0 16px 40px rgba(var(--brand-terracotta-rgb), 0.55);
}

.yt-facade__trigger:active .yt-facade__play-circle {
  transform: scale(0.96);
}

.yt-facade__caption {
  position: absolute;
  left: var(--space-6);
  right: var(--space-6);
  bottom: var(--space-4);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
}

.yt-facade__caption-title {
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  font-weight: 600;
  color: var(--brand-bone);
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.65);
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
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-3) var(--space-6);
  background-color: rgba(20, 22, 21, 0.95);
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
  gap: var(--space-1);
  min-height: var(--touch-target-min);
  padding: var(--space-1) var(--space-3);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--brand-ochre);
  border-radius: var(--radius-pill);
  transition: color var(--duration-fast) var(--ease-editorial);
}

.yt-facade__external-link:hover {
  color: var(--brand-bone);
}
</style>
