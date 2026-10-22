<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import isotipoBlancoUrl from '@/assets/brand/FunkyRoots/ISOTIPO/FunkyRoots Blanco PNG.png'
import logotipoBlancoUrl from '@/assets/brand/FunkyRoots/LOGOTIPO/FunkyRoots Blanco PNG.png'

/**
 * BrandIntroSplash — Animación breve de apertura con el Isotipo y Logotipo oficial de FunkyRoots.
 * - Respeta `prefers-reduced-motion: reduce`.
 * - Incluye botón accesible (>= 44x44px) para saltar inmediatamente si el usuario lo desea.
 * - Duración breve (~1.65s) antes de revelar suavemente el sitio completo.
 */
const emit = defineEmits(['complete'])

const isClosing = ref(false)
const isVisible = ref(true)
let closeTimer = null
let unmountTimer = null

const finishIntro = () => {
  if (isClosing.value) return
  isClosing.value = true

  if (closeTimer) clearTimeout(closeTimer)
  unmountTimer = setTimeout(() => {
    isVisible.value = false
    emit('complete')
  }, 420)
}

onMounted(() => {
  if (typeof window === 'undefined') return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const duration = prefersReduced ? 450 : 1650

  closeTimer = setTimeout(() => {
    finishIntro()
  }, duration)
})

onUnmounted(() => {
  if (closeTimer) clearTimeout(closeTimer)
  if (unmountTimer) clearTimeout(unmountTimer)
})
</script>

<template>
  <div
    v-if="isVisible"
    class="brand-splash"
    :class="{ 'brand-splash--closing': isClosing }"
    role="dialog"
    aria-label="Presentación de marca FunkyRoots Estudios"
  >
    <!-- Fondo con acento sutil Verde Pino Urbano (#355A4C) sobre Carbón Profundo (#141615) -->
    <div class="brand-splash__glow" aria-hidden="true"></div>

    <div class="brand-splash__center">
      <div class="brand-splash__isotipo-wrap">
        <img
          :src="isotipoBlancoUrl"
          alt="Isotipo FunkyRoots"
          class="brand-splash__isotipo"
        />
      </div>

      <div class="brand-splash__logotipo-wrap">
        <img
          :src="logotipoBlancoUrl"
          alt="FunkyRoots"
          class="brand-splash__logotipo"
        />
      </div>

      <div class="brand-splash__meta font-mono">
        <span class="brand-splash__star" aria-hidden="true">✦</span>
        <span>RAÍCES · CONEXIÓN · CRECIMIENTO</span>
        <span class="brand-splash__star" aria-hidden="true">✦</span>
      </div>

      <div class="brand-splash__progress" aria-hidden="true">
        <span class="brand-splash__progress-bar"></span>
      </div>
    </div>

    <button
      type="button"
      class="brand-splash__skip font-mono"
      aria-label="Saltar animación de introducción"
      @click="finishIntro"
    >
      ENTRAR AL ESTUDIO →
    </button>
  </div>
</template>

<style scoped>
.brand-splash {
  position: fixed;
  inset: 0;
  z-index: 9000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--brand-dark);
  color: var(--brand-bone);
  padding: var(--space-6);
  opacity: 1;
  transition:
    opacity 420ms var(--ease-editorial),
    transform 420ms var(--ease-editorial);
}

.brand-splash--closing {
  opacity: 0;
  transform: scale(1.02);
  pointer-events: none;
}

.brand-splash__glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 48%,
    rgba(var(--brand-pine-rgb), 0.42) 0%,
    rgba(20, 22, 21, 0.96) 65%
  );
  pointer-events: none;
}

.brand-splash__center {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
  max-width: 460px;
  width: 100%;
  text-align: center;
}

.brand-splash__isotipo-wrap {
  animation: splashIsotipoReveal 750ms var(--ease-editorial) forwards;
}

.brand-splash__isotipo {
  width: clamp(150px, 26vw, 220px);
  height: auto;
  object-fit: contain;
}

.brand-splash__logotipo-wrap {
  opacity: 0;
  animation: splashTextReveal 650ms var(--ease-editorial) 220ms forwards;
}

.brand-splash__logotipo {
  width: clamp(190px, 32vw, 280px);
  height: auto;
  object-fit: contain;
}

.brand-splash__meta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  font-size: 0.75rem;
  color: var(--brand-ochre);
  letter-spacing: 0.16em;
  opacity: 0;
  animation: splashTextReveal 600ms var(--ease-editorial) 360ms forwards;
}

.brand-splash__star {
  color: var(--brand-sage);
}

.brand-splash__progress {
  width: 160px;
  height: 2px;
  background-color: var(--border-dark-subtle);
  overflow: hidden;
  border-radius: 2px;
}

.brand-splash__progress-bar {
  display: block;
  width: 100%;
  height: 100%;
  background-color: var(--brand-terracotta);
  transform-origin: left center;
  animation: splashProgress 1500ms var(--ease-editorial) forwards;
}

.brand-splash__skip {
  position: absolute;
  bottom: var(--space-6);
  right: var(--space-6);
  z-index: 3;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: var(--touch-target-min);
  min-width: var(--touch-target-min);
  padding: var(--space-2) var(--space-4);
  font-size: 0.75rem;
  color: var(--brand-beige);
  border: 1px solid var(--border-dark-subtle);
  border-radius: 2px;
  cursor: pointer;
  transition:
    color var(--duration-fast) var(--ease-editorial),
    border-color var(--duration-fast) var(--ease-editorial),
    background-color var(--duration-fast) var(--ease-editorial);
}

.brand-splash__skip:hover {
  color: var(--brand-bone);
  border-color: var(--brand-sage);
  background-color: rgba(var(--brand-pine-rgb), 0.25);
}

@keyframes splashIsotipoReveal {
  0% {
    opacity: 0;
    transform: translateY(14px) scale(0.92);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes splashTextReveal {
  0% {
    opacity: 0;
    transform: translateY(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes splashProgress {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
</style>
