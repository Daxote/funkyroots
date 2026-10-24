<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import isotipoBlancoUrl from '@/assets/brand/FunkyRoots/ISOTIPO/FunkyRoots Blanco PNG.webp'
import logotipoBlancoUrl from '@/assets/brand/FunkyRoots/LOGOTIPO/FunkyRoots Blanco PNG.webp'

/**
 * BrandIntroSplash — Apertura con animación de ondas acústicas fluidas
 * y revelación dinámica del logotipo en fade-in orgánico, sin barras de carga.
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
  }, 440)
}

onMounted(() => {
  if (typeof window === 'undefined') return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const duration = prefersReduced ? 400 : 1550

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
    aria-label="Presentación FunkyRoots Estudios"
  >
    <!-- Capa de fondo con ondas acústicas dinámicas -->
    <div class="brand-splash__waves" aria-hidden="true">
      <div class="wave-glow wave-glow--pine"></div>
      <div class="wave-glow wave-glow--sage"></div>

      <!-- Ondas expansivas concéntricas detrás del logo -->
      <div class="sound-ripples">
        <span class="sound-ripple sound-ripple--1"></span>
        <span class="sound-ripple sound-ripple--2"></span>
        <span class="sound-ripple sound-ripple--3"></span>
      </div>

      <!-- Ondas sinusoidales armónicas en movimiento -->
      <svg
        class="wave-svg"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          class="wave-path wave-path--1"
          d="M-100 320 C 260 200, 520 440, 820 300 C 1120 180, 1340 380, 1540 310"
          stroke="rgba(111, 143, 122, 0.35)"
          stroke-width="1.75"
        />
        <path
          class="wave-path wave-path--2"
          d="M-100 360 C 220 480, 560 220, 900 360 C 1180 460, 1360 250, 1540 340"
          stroke="rgba(53, 90, 76, 0.55)"
          stroke-width="2.25"
        />
        <path
          class="wave-path wave-path--3"
          d="M-100 280 C 300 380, 620 190, 960 300 C 1220 370, 1380 230, 1540 270"
          stroke="rgba(245, 245, 240, 0.28)"
          stroke-width="1.5"
        />
      </svg>
    </div>

    <!-- Centro: Logo con fade-in dinámico -->
    <div class="brand-splash__center">
      <div class="brand-splash__logo-wrap">
        <img
          :src="isotipoBlancoUrl"
          alt="Isotipo FunkyRoots"
          class="brand-splash__isotipo"
        />
        <img
          :src="logotipoBlancoUrl"
          alt="FunkyRoots"
          class="brand-splash__logotipo"
        />
      </div>

      <!-- Indicador sutil de frecuencia acústica -->
      <div class="brand-splash__frequencies" aria-hidden="true">
        <span class="freq-bar freq-bar--1"></span>
        <span class="freq-bar freq-bar--2"></span>
        <span class="freq-bar freq-bar--3"></span>
        <span class="freq-bar freq-bar--4"></span>
        <span class="freq-bar freq-bar--5"></span>
        <span class="freq-bar freq-bar--6"></span>
        <span class="freq-bar freq-bar--7"></span>
      </div>
    </div>

    <button
      type="button"
      class="brand-splash__skip"
      aria-label="Entrar directamente al sitio"
      @click="finishIntro"
    >
      Entrar →
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
  overflow: hidden;
  overflow: clip;
  contain: paint;
  max-width: 100vw;
  width: 100%;
  opacity: 1;
  transition:
    opacity 440ms var(--ease-editorial),
    filter 440ms var(--ease-editorial),
    transform 440ms var(--ease-editorial);
}

.brand-splash--closing {
  opacity: 0;
  filter: blur(10px);
  transform: scale(1.02);
  pointer-events: none;
}

/* Ondas acústicas de fondo */
.brand-splash__waves {
  position: absolute;
  inset: 0;
  overflow: hidden;
  overflow: clip;
  contain: paint;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  width: 100%;
}

.wave-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(85px);
  will-change: transform, opacity;
}

.wave-glow--pine {
  width: min(70vw, 680px);
  height: min(70vw, 680px);
  background: radial-gradient(
    circle,
    rgba(var(--brand-pine-rgb), 0.55) 0%,
    transparent 70%
  );
  animation: waveGlowPulse 4s ease-in-out infinite alternate;
}

.wave-glow--sage {
  width: min(55vw, 540px);
  height: min(55vw, 540px);
  background: radial-gradient(
    circle,
    rgba(var(--brand-sage-rgb), 0.35) 0%,
    transparent 65%
  );
  animation: waveGlowPulse 5s ease-in-out infinite alternate-reverse;
}

/* Ondas sonoras concéntricas que nacen del logo */
.sound-ripples {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  pointer-events: none;
}

.sound-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1px solid rgba(var(--brand-sage-rgb), 0.35);
  box-shadow: 0 0 35px rgba(var(--brand-pine-rgb), 0.35);
  opacity: 0;
  will-change: transform, opacity;
  animation: soundRipplePulse 3s cubic-bezier(0.1, 0.8, 0.3, 1) infinite;
}

.sound-ripple--1 {
  width: 200px;
  height: 200px;
  animation-delay: 0s;
}

.sound-ripple--2 {
  width: 380px;
  height: 380px;
  animation-delay: 0.6s;
}

.sound-ripple--3 {
  width: 580px;
  height: 580px;
  animation-delay: 1.2s;
}

/* Ondas sinusoidales */
.wave-svg {
  position: absolute;
  width: 100%;
  height: 80%;
  opacity: 0.85;
}

.wave-path {
  vector-effect: non-scaling-stroke;
  transform-origin: center;
}

.wave-path--1 {
  animation: waveSinDrift1 6s ease-in-out infinite alternate;
}

.wave-path--2 {
  animation: waveSinDrift2 7s ease-in-out infinite alternate;
}

.wave-path--3 {
  animation: waveSinDrift1 8s ease-in-out infinite alternate-reverse;
}

/* Contenido central y Fade-in Dinámico */
.brand-splash__center {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
  text-align: center;
  padding: var(--space-6);
}

.brand-splash__logo-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  animation: dynamicLogoFadeIn 850ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.brand-splash__isotipo {
  width: clamp(120px, 22vw, 170px);
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.6));
}

.brand-splash__logotipo {
  width: clamp(180px, 30vw, 250px);
  height: auto;
  object-fit: contain;
  opacity: 0;
  animation: dynamicLogoTextFadeIn 700ms cubic-bezier(0.16, 1, 0.3, 1) 200ms forwards;
}

/* Ecualizador sutil de ondas armónicas */
.brand-splash__frequencies {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 24px;
  padding-top: var(--space-2);
  opacity: 0;
  animation: dynamicLogoTextFadeIn 600ms cubic-bezier(0.16, 1, 0.3, 1) 350ms forwards;
}

.freq-bar {
  width: 3px;
  background: linear-gradient(to top, var(--brand-pine), var(--brand-sage), var(--brand-bone));
  border-radius: var(--radius-pill);
  animation: freqBounce 1.2s ease-in-out infinite alternate;
}

.freq-bar--1 { height: 8px; animation-delay: 0.1s; }
.freq-bar--2 { height: 18px; animation-delay: 0.3s; }
.freq-bar--3 { height: 12px; animation-delay: 0.15s; }
.freq-bar--4 { height: 22px; animation-delay: 0.45s; }
.freq-bar--5 { height: 14px; animation-delay: 0.25s; }
.freq-bar--6 { height: 19px; animation-delay: 0.35s; }
.freq-bar--7 { height: 10px; animation-delay: 0.1s; }

/* Botón Saltar */
.brand-splash__skip {
  position: absolute;
  bottom: var(--space-6);
  right: var(--space-6);
  z-index: 3;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: var(--touch-target-min);
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--brand-beige);
  background-color: rgba(245, 245, 240, 0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border-dark-subtle);
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition:
    color var(--duration-fast) var(--ease-editorial),
    background-color var(--duration-fast) var(--ease-editorial),
    transform var(--duration-fast) var(--ease-editorial);
}

.brand-splash__skip:hover {
  color: var(--brand-bone);
  background-color: rgba(var(--brand-pine-rgb), 0.45);
  transform: translateY(-1px);
}

/* Keyframes de ondas acústicas y fade-in dinámico */
@keyframes dynamicLogoFadeIn {
  0% {
    opacity: 0;
    transform: scale(0.86) translateY(12px);
    filter: blur(12px) drop-shadow(0 0 35px rgba(var(--brand-pine-rgb), 0.8));
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
    filter: blur(0) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.7));
  }
}

@keyframes dynamicLogoTextFadeIn {
  0% {
    opacity: 0;
    transform: translateY(10px);
    filter: blur(6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes soundRipplePulse {
  0% {
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 0.85;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.6);
    opacity: 0;
  }
}

@keyframes waveSinDrift1 {
  0% { transform: translateY(-10px) scaleY(0.96); }
  100% { transform: translateY(10px) scaleY(1.04); }
}

@keyframes waveSinDrift2 {
  0% { transform: translateY(12px) scaleY(1.03); }
  100% { transform: translateY(-12px) scaleY(0.97); }
}

@keyframes waveGlowPulse {
  0% { transform: scale(0.95); opacity: 0.7; }
  100% { transform: scale(1.08); opacity: 1; }
}

@keyframes freqBounce {
  0% { transform: scaleY(0.4); }
  100% { transform: scaleY(1.15); }
}

@media (prefers-reduced-motion: reduce) {
  .sound-ripple,
  .wave-path,
  .freq-bar,
  .wave-glow {
    animation: none !important;
  }
  .brand-splash__logo-wrap,
  .brand-splash__logotipo {
    animation-duration: 200ms !important;
  }
}
</style>
