<script setup>
import { funkyRootsRepository } from '@/core/data/funkyRootsRepository'
import imagotipoBlancoUrl from '@/assets/brand/FunkyRoots/IMAGOTIPO/FunkyRoots Blanco PNG.png'
import isotipoBlancoUrl from '@/assets/brand/FunkyRoots/ISOTIPO/FunkyRoots Blanco PNG.png'

/**
 * MaintenanceView — Pantalla oficial de mantención en la raíz ('/') de FunkyRoots Estudios.
 * - Integra el Imagotipo e Isotipo oficiales sin fondo.
 * - Fondo atmosférico con auras orgánicas (Verde Pino #355A4C, Verde Salvia #6F8F7A, Terracota #B8573C, Ocre #C1A875)
 *   y ondas sonoras / de frecuencia animadas suavemente.
 * - Incluye el mensaje solicitado: "Sitio en construcción, pronto nuevos proyectos".
 */
const brand = funkyRootsRepository.getBrandMetadata()
</script>

<template>
  <section
    class="maintenance-screen theme-dark"
    aria-label="FunkyRoots Estudios — Sitio en construcción"
  >
    <!-- Auras de color orgánicas de la marca -->
    <div class="maintenance-screen__auras" aria-hidden="true">
      <div class="maintenance-aura maintenance-aura--pine"></div>
      <div class="maintenance-aura maintenance-aura--sage"></div>
      <div class="maintenance-aura maintenance-aura--terracotta"></div>
      <div class="maintenance-aura maintenance-aura--ochre"></div>
    </div>

    <!-- Ondas acústicas / vectoriales en movimiento suave -->
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

    <!-- Retícula técnica sutil -->
    <div class="maintenance-screen__grid-overlay" aria-hidden="true"></div>

    <div class="container-editorial maintenance-screen__container">
      <!-- Barra superior de estado del estudio -->
      <header class="maintenance-screen__top font-mono">
        <div class="maintenance-screen__status">
          <span class="maintenance-screen__pulse-dot" aria-hidden="true"></span>
          <span>FUNKYROOTS ESTUDIOS // MODO LABORATORIO</span>
        </div>
        <span class="maintenance-screen__coords">{{ brand.location }}</span>
      </header>

      <!-- Contenido Central: Logo Oficial + Mensaje de Construcción -->
      <div class="maintenance-screen__center">
        <!-- Halo detrás del logo -->
        <div class="maintenance-screen__logo-stage">
          <div class="maintenance-screen__logo-ring" aria-hidden="true"></div>
          <img
            :src="imagotipoBlancoUrl"
            alt="FunkyRoots Estudios"
            class="maintenance-screen__imagotipo"
          />
        </div>

        <div class="maintenance-screen__badge font-mono">
          <img
            :src="isotipoBlancoUrl"
            alt=""
            class="maintenance-screen__mini-isotipo"
            aria-hidden="true"
          />
          <span>ACTUALIZACIÓN DE CATÁLOGO &amp; PLATAFORMA</span>
        </div>

        <h1 class="font-display maintenance-screen__title">
          Sitio en construcción, pronto nuevos proyectos
        </h1>

        <p class="maintenance-screen__subtitle">
          Estamos preparando nuestra nueva plataforma editorial, sesiones audiovisuales y catálogo fonográfico desde el estudio.
        </p>

        <!-- Ecualizador / Indicador de Onda Acústica -->
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

      <!-- Pie con Canales Oficiales Activos mientras el sitio está en construcción -->
      <footer class="maintenance-screen__footer">
        <span class="font-mono maintenance-screen__footer-label">
          MIENTRAS TANTO, ESCUCHA Y CONECTA EN NUESTROS CANALES OFICIALES:
        </span>

        <ul class="maintenance-screen__socials" aria-label="Canales oficiales de FunkyRoots Estudios">
          <li v-for="social in brand.contact.socials" :key="social.label">
            <a
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="maintenance-screen__social-link font-mono"
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

/* Auras orgánicas con colores del manual de marca */
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

/* Ondas vectoriales animadas */
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

.maintenance-screen__grid-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background-image:
    linear-gradient(to right, rgba(245, 245, 240, 0.025) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(245, 245, 240, 0.025) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(circle at 50% 50%, black 35%, transparent 90%);
  -webkit-mask-image: radial-gradient(circle at 50% 50%, black 35%, transparent 90%);
}

/* Contenedor Principal */
.maintenance-screen__container {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: var(--space-8);
  padding-bottom: var(--space-8);
  gap: var(--space-8);
}

.maintenance-screen__top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--border-dark-subtle);
  font-size: 0.75rem;
}

.maintenance-screen__status {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--brand-ochre);
  letter-spacing: 0.1em;
}

.maintenance-screen__pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--brand-terracotta);
  box-shadow: 0 0 12px rgba(var(--brand-terracotta-rgb), 0.9);
  animation: statusBlink 2.2s ease-in-out infinite;
}

.maintenance-screen__coords {
  color: var(--brand-beige);
}

/* Bloque Central */
.maintenance-screen__center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-6);
  max-width: 780px;
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
  width: clamp(220px, 38vw, 380px);
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 8px 28px rgba(20, 22, 21, 0.7));
}

.maintenance-screen__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-4);
  background-color: rgba(var(--brand-pine-rgb), 0.28);
  border: 1px solid rgba(var(--brand-sage-rgb), 0.45);
  border-radius: 2px;
  font-size: 0.75rem;
  color: var(--brand-bone);
  letter-spacing: 0.12em;
}

.maintenance-screen__mini-isotipo {
  height: 16px;
  width: auto;
  object-fit: contain;
}

.maintenance-screen__title {
  font-size: clamp(2rem, 4.6vw, 3.5rem);
  font-weight: 700;
  color: var(--brand-bone);
  letter-spacing: -0.025em;
  line-height: 1.12;
  text-wrap: balance;
}

.maintenance-screen__subtitle {
  font-size: clamp(1rem, 1.6vw, 1.1875rem);
  line-height: 1.65;
  color: var(--brand-beige);
  max-width: 56ch;
}

/* Ecualizador sutil de ondas */
.maintenance-screen__eq {
  display: inline-flex;
  align-items: flex-end;
  gap: 6px;
  height: 28px;
  padding-top: var(--space-2);
}

.eq-bar {
  width: 3px;
  background: linear-gradient(to top, var(--brand-pine), var(--brand-sage), var(--brand-ochre));
  border-radius: 2px;
  animation: eqBounce 1.6s ease-in-out infinite alternate;
}

.eq-bar--1 { height: 10px; animation-delay: 0.1s; }
.eq-bar--2 { height: 20px; animation-delay: 0.35s; }
.eq-bar--3 { height: 14px; animation-delay: 0.2s; }
.eq-bar--4 { height: 26px; animation-delay: 0.5s; }
.eq-bar--5 { height: 16px; animation-delay: 0.15s; }
.eq-bar--6 { height: 22px; animation-delay: 0.4s; }
.eq-bar--7 { height: 12px; animation-delay: 0.25s; }

/* Footer de canales activos */
.maintenance-screen__footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding-top: var(--space-6);
  border-top: 1px solid var(--border-dark-subtle);
}

@media (min-width: 960px) {
  .maintenance-screen__footer {
    flex-direction: row;
  }
}

.maintenance-screen__footer-label {
  font-size: 0.75rem;
  color: var(--brand-ochre);
  text-align: center;
}

.maintenance-screen__socials {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
}

.maintenance-screen__social-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--touch-target-min);
  padding: var(--space-2) var(--space-4);
  font-size: 0.75rem;
  color: var(--brand-bone);
  background-color: rgba(46, 46, 46, 0.45);
  border: 1px solid var(--border-dark-subtle);
  border-radius: 2px;
  transition:
    background-color var(--duration-fast) var(--ease-editorial),
    border-color var(--duration-fast) var(--ease-editorial),
    transform var(--duration-fast) var(--ease-editorial);
}

.maintenance-screen__social-link:hover {
  background-color: rgba(var(--brand-pine-rgb), 0.38);
  border-color: var(--brand-sage);
  transform: translateY(-1px);
}

.maintenance-screen__arrow {
  color: var(--brand-ochre);
}

/* Keyframes de Auras y Ondas */
@keyframes auraFloatPrimary {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  100% {
    transform: translate3d(45px, 30px, 0) scale(1.12);
  }
}

@keyframes auraFloatSecondary {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  100% {
    transform: translate3d(-50px, -35px, 0) scale(1.15);
  }
}

@keyframes auraPulseCenter {
  0% {
    transform: translate(-50%, -50%) scale(0.92);
    opacity: 0.65;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.18);
    opacity: 1;
  }
}

@keyframes waveDrift1 {
  0% {
    transform: translateY(-14px) scaleY(0.94);
  }
  100% {
    transform: translateY(14px) scaleY(1.06);
  }
}

@keyframes waveDrift2 {
  0% {
    transform: translateY(16px) scaleY(1.05);
  }
  100% {
    transform: translateY(-16px) scaleY(0.92);
  }
}

@keyframes ringBreathe {
  0% {
    transform: scale(0.96);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.06);
    opacity: 1;
  }
}

@keyframes statusBlink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.35;
  }
}

@keyframes eqBounce {
  0% {
    transform: scaleY(0.4);
  }
  100% {
    transform: scaleY(1.15);
  }
}
</style>
