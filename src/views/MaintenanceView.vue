<script setup>
import { funkyRootsRepository } from '@/core/data/funkyRootsRepository'
import imagotipoBlancoUrl from '@/assets/brand/FunkyRoots/IMAGOTIPO/FunkyRoots Blanco PNG.webp'

const brand = funkyRootsRepository.getBrandMetadata()
</script>

<template>
  <section
    class="maintenance-screen theme-dark"
    aria-label="FunkyRoots Estudios — Sitio en construcción"
  >
    <div class="maintenance-screen__auras" aria-hidden="true">
      <div class="maintenance-aura maintenance-aura--pine"></div>
      <div class="maintenance-aura maintenance-aura--sage"></div>
      <div class="maintenance-aura maintenance-aura--terracotta"></div>
      <div class="maintenance-aura maintenance-aura--ochre"></div>
    </div>

    <div class="maintenance-screen__waves" aria-hidden="true">
      <svg
        class="maintenance-waves-svg"
        viewBox="0 0 1440 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          class="wave-line wave-line--1"
          d="M-120 340 C 240 190, 520 490, 880 310 C 1180 160, 1340 390, 1560 280"
          stroke="rgba(111, 143, 122, 0.24)"
          stroke-width="1.5"
        />
        <path
          class="wave-line wave-line--2"
          d="M-120 390 C 200 510, 580 180, 940 360 C 1220 500, 1380 230, 1560 340"
          stroke="rgba(53, 90, 76, 0.45)"
          stroke-width="2"
        />
        <path
          class="wave-line wave-line--3"
          d="M-120 280 C 310 420, 640 140, 1020 290 C 1260 385, 1410 210, 1560 260"
          stroke="rgba(193, 168, 117, 0.2)"
          stroke-width="1.25"
        />
        <path
          class="wave-line wave-line--4"
          d="M-120 440 C 260 310, 690 520, 1080 350 C 1310 250, 1430 410, 1560 390"
          stroke="rgba(184, 87, 60, 0.22)"
          stroke-width="1.25"
        />
      </svg>
    </div>

    <div class="container-editorial maintenance-screen__container">
      <div class="maintenance-screen__center">
        <div class="maintenance-screen__logo-stage">
          <div class="maintenance-screen__logo-ring" aria-hidden="true"></div>
          <img
            :src="imagotipoBlancoUrl"
            alt="FunkyRoots Estudios"
            class="maintenance-screen__imagotipo"
          />
        </div>

        <h1 class="font-display maintenance-screen__title">
          Sitio en construcción, pronto nuevos proyectos
        </h1>

        <p class="maintenance-screen__subtitle">
          Preparando nuestras próximas sesiones audiovisuales y lanzamientos desde el estudio.
        </p>

        <div class="maintenance-screen__eq" aria-hidden="true">
          <span class="eq-bar eq-bar--1"></span>
          <span class="eq-bar eq-bar--2"></span>
          <span class="eq-bar eq-bar--3"></span>
          <span class="eq-bar eq-bar--4"></span>
          <span class="eq-bar eq-bar--5"></span>
          <span class="eq-bar eq-bar--6"></span>
          <span class="eq-bar eq-bar--7"></span>
        </div>
      </div>

      <footer class="maintenance-screen__footer">
        <ul class="maintenance-screen__socials" aria-label="Canales oficiales de FunkyRoots Estudios">
          <li v-for="social in brand.contact.socials" :key="social.label">
            <a
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="maintenance-screen__social-link"
            >
              <span>{{ social.label }}</span>
              <span class="maintenance-screen__arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.maintenance-screen {
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: stretch;
  background-color: var(--brand-dark);
  color: var(--brand-bone);
  overflow: hidden;
}

.maintenance-screen__auras {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.maintenance-aura {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  will-change: transform, opacity;
}

.maintenance-aura--pine {
  width: min(68vw, 720px);
  height: min(68vw, 720px);
  top: -14%;
  left: -10%;
  background: radial-gradient(
    circle,
    rgba(var(--brand-pine-rgb), 0.62) 0%,
    rgba(var(--brand-pine-rgb), 0) 72%
  );
  animation: auraFloatPrimary 16s ease-in-out infinite alternate;
}

.maintenance-aura--sage {
  width: min(58vw, 620px);
  height: min(58vw, 620px);
  bottom: -16%;
  right: -8%;
  background: radial-gradient(
    circle,
    rgba(var(--brand-sage-rgb), 0.42) 0%,
    rgba(var(--brand-sage-rgb), 0) 72%
  );
  animation: auraFloatSecondary 20s ease-in-out infinite alternate;
}

.maintenance-aura--terracotta {
  width: min(44vw, 480px);
  height: min(44vw, 480px);
  top: 42%;
  left: 52%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle,
    rgba(var(--brand-terracotta-rgb), 0.24) 0%,
    rgba(var(--brand-terracotta-rgb), 0) 70%
  );
  animation: auraPulseCenter 12s ease-in-out infinite alternate;
}

.maintenance-aura--ochre {
  width: min(38vw, 420px);
  height: min(38vw, 420px);
  top: 18%;
  right: 14%;
  background: radial-gradient(
    circle,
    rgba(var(--brand-ochre-rgb), 0.2) 0%,
    rgba(var(--brand-ochre-rgb), 0) 70%
  );
  animation: auraFloatPrimary 18s ease-in-out infinite alternate-reverse;
}

.maintenance-screen__waves {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  pointer-events: none;
  opacity: 0.9;
}

.maintenance-waves-svg {
  width: 100%;
  height: 75%;
  overflow: visible;
}

.wave-line {
  vector-effect: non-scaling-stroke;
  transform-origin: center;
}

.wave-line--1 {
  animation: waveDrift1 11s ease-in-out infinite alternate;
}

.wave-line--2 {
  animation: waveDrift2 14s ease-in-out infinite alternate;
}

.wave-line--3 {
  animation: waveDrift1 17s ease-in-out infinite alternate-reverse;
}

.wave-line--4 {
  animation: waveDrift2 13s ease-in-out infinite alternate-reverse;
}

.maintenance-screen__container {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: var(--space-12);
  padding-bottom: var(--space-8);
  gap: var(--space-8);
}

.maintenance-screen__center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-6);
  max-width: 740px;
  margin: auto;
  padding: var(--space-8) 0;
}

.maintenance-screen__logo-stage {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-6);
}

.maintenance-screen__logo-ring {
  position: absolute;
  width: clamp(220px, 36vw, 360px);
  height: clamp(110px, 18vw, 180px);
  border-radius: 50%;
  border: 1px solid rgba(var(--brand-sage-rgb), 0.25);
  box-shadow:
    0 0 60px rgba(var(--brand-pine-rgb), 0.45),
    inset 0 0 40px rgba(var(--brand-sage-rgb), 0.12);
  animation: ringBreathe 6s ease-in-out infinite alternate;
}

.maintenance-screen__imagotipo {
  position: relative;
  z-index: 1;
  width: clamp(210px, 34vw, 340px);
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 8px 28px rgba(20, 22, 21, 0.7));
}

.maintenance-screen__title {
  font-size: clamp(2rem, 4.4vw, 3.25rem);
  font-weight: 700;
  color: var(--brand-bone);
  letter-spacing: -0.025em;
  line-height: 1.12;
  text-wrap: balance;
}

.maintenance-screen__subtitle {
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  line-height: 1.6;
  color: rgba(var(--brand-beige-rgb), 0.88);
  max-width: 48ch;
}

.maintenance-screen__eq {
  display: inline-flex;
  align-items: flex-end;
  gap: 6px;
  height: 28px;
  padding-top: var(--space-2);
}

.eq-bar {
  width: 4px;
  background: linear-gradient(to top, var(--brand-pine), var(--brand-sage), var(--brand-ochre));
  border-radius: var(--radius-pill);
  animation: eqBounce 1.6s ease-in-out infinite alternate;
}

.eq-bar--1 { height: 10px; animation-delay: 0.1s; }
.eq-bar--2 { height: 20px; animation-delay: 0.35s; }
.eq-bar--3 { height: 14px; animation-delay: 0.2s; }
.eq-bar--4 { height: 26px; animation-delay: 0.5s; }
.eq-bar--5 { height: 16px; animation-delay: 0.15s; }
.eq-bar--6 { height: 22px; animation-delay: 0.4s; }
.eq-bar--7 { height: 12px; animation-delay: 0.25s; }

.maintenance-screen__footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: var(--space-6);
}

.maintenance-screen__socials {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
}

.maintenance-screen__social-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--touch-target-min);
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--brand-bone);
  background-color: rgba(46, 46, 46, 0.45);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid var(--border-dark-subtle);
  border-radius: var(--radius-pill);
  transition:
    background-color var(--duration-fast) var(--ease-editorial),
    border-color var(--duration-fast) var(--ease-editorial),
    transform var(--duration-fast) var(--ease-editorial);
}

.maintenance-screen__social-link:hover {
  background-color: rgba(var(--brand-pine-rgb), 0.45);
  border-color: var(--brand-sage);
  transform: translateY(-2px);
}

.maintenance-screen__arrow {
  color: var(--brand-ochre);
}

@keyframes auraFloatPrimary {
  0% { transform: translate3d(0, 0, 0) scale(1); }
  100% { transform: translate3d(45px, 30px, 0) scale(1.12); }
}

@keyframes auraFloatSecondary {
  0% { transform: translate3d(0, 0, 0) scale(1); }
  100% { transform: translate3d(-50px, -35px, 0) scale(1.15); }
}

@keyframes auraPulseCenter {
  0% { transform: translate(-50%, -50%) scale(0.92); opacity: 0.65; }
  100% { transform: translate(-50%, -50%) scale(1.18); opacity: 1; }
}

@keyframes waveDrift1 {
  0% { transform: translateY(-14px) scaleY(0.94); }
  100% { transform: translateY(14px) scaleY(1.06); }
}

@keyframes waveDrift2 {
  0% { transform: translateY(16px) scaleY(1.05); }
  100% { transform: translateY(-16px) scaleY(0.92); }
}

@keyframes ringBreathe {
  0% { transform: scale(0.96); opacity: 0.6; }
  100% { transform: scale(1.06); opacity: 1; }
}

@keyframes eqBounce {
  0% { transform: scaleY(0.4); }
  100% { transform: scaleY(1.15); }
}
</style>
