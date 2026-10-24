<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import logoUrl from '@/assets/brand/FunkyRoots/IMAGOTIPO/Logo FunkyRoots.webp'

/**
 * Hub de enlaces — FunkyRoots Estudios.
 * Izquierda: logo grande y casi nada de texto. Derecha: chips de enlaces.
 * Fondo claro con aura verde que sigue el cursor (o deriva sola en táctil)
 * y raíces que se dibujan lentamente y luego respiran.
 */
const rootEl = ref(null)
let raf = null
let tx = 0.5
let ty = 0.5
let cx = 0.5
let cy = 0.5
let vx = 0
let vy = 0
let lastPointerAt = 0

const onPointer = (e) => {
  tx = e.clientX / window.innerWidth
  ty = e.clientY / window.innerHeight
  lastPointerAt = performance.now()
}

// Resorte amortiguado: respuesta viva pero sin tirones
const tick = (now) => {
  const idle = now - lastPointerAt > 2500
  if (idle) {
    const t = now / 1000
    tx = 0.5 + Math.sin(t * 0.25) * 0.22
    ty = 0.5 + Math.cos(t * 0.19) * 0.2
  }
  vx += (tx - cx) * 0.012
  vy += (ty - cy) * 0.012
  vx *= 0.86
  vy *= 0.86
  cx += vx
  cy += vy

  const el = rootEl.value
  if (el) {
    el.style.setProperty('--ax', `${(cx * 100).toFixed(2)}%`)
    el.style.setProperty('--ay', `${(cy * 100).toFixed(2)}%`)
    el.style.setProperty('--px', `${((cx - 0.5) * -26).toFixed(2)}px`)
    el.style.setProperty('--py', `${((cy - 0.5) * -26).toFixed(2)}px`)
  }
  raf = requestAnimationFrame(tick)
}

onMounted(() => {
  window.addEventListener('pointermove', onPointer, { passive: true })
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    raf = requestAnimationFrame(tick)
  }
})

onUnmounted(() => {
  window.removeEventListener('pointermove', onPointer)
  if (raf) cancelAnimationFrame(raf)
})

const icons = {
  instagram: { stroke: true, d: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z M16 11.4a4 4 0 1 1-7.9 1.2 4 4 0 0 1 7.9-1.2z M17.5 6.5h.01' },
  spotify: { d: 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z' },
  youtube: { d: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  soundcloud: { d: 'M2 14.5v3M5 12.5v5M8 11v6.5M11 9.5v8M14 8.5v9h5a3.5 3.5 0 0 0 .6-6.95A5.5 5.5 0 0 0 14 8.5z', stroke: true },
  email: { stroke: true, d: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M22 6l-10 7L2 6' },
  drive: { d: 'M7.71 3.5L1.15 15l3.43 6 6.55-11.5L7.71 3.5zm3.72 6.5l3.43 6h8.57l-3.43-6h-8.57zm5.14-6.5l-3.43 6 4.29 7.5 3.43-6-4.29-7.5z' },
  disc: { stroke: true, d: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z' },
  site: { d: 'M12 3l2.2 6.3L21 12l-6.8 2.7L12 21l-2.2-6.3L3 12l6.8-2.7z' }
}

const socials = [
  { name: 'Instagram', url: 'https://instagram.com/funkyroots.estudios', icon: 'instagram' },
  { name: 'Spotify', url: 'https://open.spotify.com/artist/1xvmnBIxZoMPqw6lyQMSQf', icon: 'spotify' },
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UC32wHweWt7hMQT5LAphUDng', icon: 'youtube' },
  { name: 'SoundCloud', url: 'https://soundcloud.com/funkyroots_estudios', icon: 'soundcloud' },
  { name: 'Email', url: 'mailto:funkyroots.estudios@gmail.com', icon: 'email' }
]

const chips = [
  { id: 'site', title: 'Visitar el sitio', url: '/test', icon: 'site', internal: true },
  { id: 'abril', title: 'ABRIL — Video oficial', url: 'https://www.youtube.com/watch?v=z4UVHULCsA4&ab_channel=FunkyRootsEstudios', icon: 'youtube' },
  { id: 'yt', title: 'Suscríbete a nuestro YouTube', url: 'https://www.youtube.com/channel/UC32wHweWt7hMQT5LAphUDng?sub_confirmation=1', icon: 'youtube' },
  { id: 'drive', title: 'Descarga nuestra música', url: 'https://drive.google.com/drive/folders/1GIgokeoJ_X3IoSdNaoS00GjB2SSp_W9A', icon: 'drive' },
  { id: 'spotify', title: 'Playlist en Spotify', url: 'https://open.spotify.com/playlist/2Qt6APOGuJ1BhNbqtw8MAo?si=KvbiQDDTRre3RZPMUQ0q_A', icon: 'spotify' },
  { id: 'ytpl', title: 'Playlist en YouTube', url: 'https://www.youtube.com/playlist?list=PL4qYFD02sS1BHBNFVn7I7t9xinHVaAwbQ', icon: 'youtube' },
  { id: 'rescoldo', title: 'Rescoldo (Beat Tape, 2020)', url: 'https://open.spotify.com/album/5ui3WCw1j95miQV5ps0Xe3?si=CTQQWMOfQVWm9dikCVLd7Q', icon: 'disc' }
]
</script>

<template>
  <main ref="rootEl" class="hub" aria-label="FunkyRoots Estudios — Enlaces">
    <!-- Fondo: aura que sigue el cursor + raíces -->
    <div class="hub__bg" aria-hidden="true">
      <div class="aura aura--main"></div>
      <div class="aura aura--soft"></div>
      <div class="drift drift--a"></div>
      <div class="drift drift--b"></div>

      <svg class="roots" viewBox="0 0 1600 1000" fill="none" preserveAspectRatio="xMidYMid slice">
        <g class="roots__layer">
          <path class="root root--1" pathLength="1" d="M-40 940 C 200 860, 260 700, 320 540 C 370 410, 300 300, 420 170 C 500 85, 640 90, 760 40" />
          <path class="root root--2" pathLength="1" d="M320 540 C 420 520, 520 580, 600 500 C 690 410, 710 310, 840 260 C 960 215, 1080 235, 1200 190" />
          <path class="root root--3" pathLength="1" d="M600 500 C 660 600, 790 660, 930 640 C 1070 620, 1150 540, 1290 560 C 1420 575, 1520 500, 1660 530" />
          <path class="root root--4" pathLength="1" d="M640 1060 C 690 930, 760 870, 800 770 C 840 670, 820 590, 880 490 C 930 410, 1020 370, 1100 330" />
          <path class="root root--5" pathLength="1" d="M420 170 C 460 200, 500 225, 560 215 C 620 205, 660 165, 720 155" />
          <path class="root root--6" pathLength="1" d="M930 640 C 970 720, 1030 780, 1110 800 C 1190 820, 1270 770, 1350 800" />
        </g>
      </svg>
    </div>

    <div class="hub__inner">
      <!-- Izquierda: solo logo + una línea + redes -->
      <section class="brand">
        <img :src="logoUrl" alt="FunkyRoots Estudios" class="brand__logo" fetchpriority="high" />
        <p class="brand__tagline">No la clasifiques;</p>
        <nav class="brand__socials" aria-label="Redes">
          <a
            v-for="s in socials"
            :key="s.name"
            :href="s.url"
            target="_blank"
            rel="noopener noreferrer"
            class="social"
            :aria-label="s.name"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              :fill="icons[s.icon].stroke ? 'none' : 'currentColor'"
              :stroke="icons[s.icon].stroke ? 'currentColor' : 'none'"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path :d="icons[s.icon].d" />
            </svg>
          </a>
        </nav>
      </section>

      <!-- Derecha: chips -->
      <section class="links" aria-label="Enlaces">
        <template v-for="(c, i) in chips" :key="c.id">
          <component
            :is="c.internal ? RouterLink : 'a'"
            v-bind="c.internal ? { to: c.url } : { href: c.url, target: '_blank', rel: 'noopener noreferrer' }"
            class="chip"
            :class="{ 'chip--primary': c.internal }"
            :style="{ '--i': i }"
          >
            <span class="chip__icon" aria-hidden="true">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                :fill="icons[c.icon].stroke ? 'none' : 'currentColor'"
                :stroke="icons[c.icon].stroke ? 'currentColor' : 'none'"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path :d="icons[c.icon].d" />
              </svg>
            </span>
            <span class="chip__title">{{ c.title }}</span>
            <span class="chip__arrow" aria-hidden="true">{{ c.internal ? '→' : '↗' }}</span>
          </component>
        </template>
      </section>
    </div>
  </main>
</template>

<style scoped>
.hub {
  --ax: 50%;
  --ay: 50%;
  --px: 0px;
  --py: 0px;
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  background: #f7f5ee;
  color: #141615;
  overflow-x: hidden;
  overflow-x: clip;
  display: flex;
  align-items: center;
}

/* ---------- Fondo ---------- */
.hub__bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  overflow: clip;
  pointer-events: none;
}

.aura {
  position: absolute;
  left: var(--ax);
  top: var(--ay);
  border-radius: 50%;
  translate: -50% -50%;
  will-change: left, top;
}

.aura--main {
  width: min(640px, 110vw);
  height: min(640px, 110vw);
  background: radial-gradient(circle, rgba(111, 143, 122, 0.34) 0%, rgba(111, 143, 122, 0.12) 45%, transparent 70%);
  filter: blur(40px);
}

.aura--soft {
  width: min(280px, 60vw);
  height: min(280px, 60vw);
  background: radial-gradient(circle, rgba(53, 90, 76, 0.22) 0%, transparent 70%);
  filter: blur(30px);
}

.drift {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  will-change: transform;
}

.drift--a {
  top: -140px;
  right: -100px;
  width: 460px;
  height: 460px;
  background: radial-gradient(circle, rgba(111, 143, 122, 0.22), transparent 68%);
  animation: drift 22s ease-in-out infinite alternate;
}

.drift--b {
  bottom: -160px;
  left: -120px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(193, 168, 117, 0.18), transparent 68%);
  animation: drift 26s ease-in-out infinite alternate-reverse;
}

@keyframes drift {
  from { transform: translate3d(0, 0, 0) scale(0.96); }
  to { transform: translate3d(36px, -28px, 0) scale(1.06); }
}

/* Raíces: se dibujan una vez y luego respiran con paralaje sutil */
.roots {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.roots__layer {
  transform: translate(var(--px), var(--py));
  transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
}

.root {
  stroke: rgba(53, 90, 76, 0.2);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation:
    rootDraw 3.6s cubic-bezier(0.45, 0, 0.2, 1) forwards,
    rootBreath 9s ease-in-out 3.6s infinite alternate;
}

.root--2 { animation-delay: 0.5s, 4.1s; stroke: rgba(111, 143, 122, 0.26); }
.root--3 { animation-delay: 1s, 4.6s; stroke-width: 1.6; }
.root--4 { animation-delay: 0.3s, 3.9s; }
.root--5 { animation-delay: 1.8s, 5.4s; stroke: rgba(193, 168, 117, 0.3); stroke-width: 1.2; }
.root--6 { animation-delay: 2.2s, 5.8s; stroke-width: 1.3; }

@keyframes rootDraw {
  to { stroke-dashoffset: 0; }
}

@keyframes rootBreath {
  from { opacity: 0.75; }
  to { opacity: 1; }
}

/* ---------- Layout ---------- */
.hub__inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 2.25rem;
  align-items: center;
}

@media (min-width: 900px) {
  .hub__inner {
    grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
    gap: 5rem;
    padding: 3rem 2.5rem;
  }
}

/* ---------- Marca ---------- */
.brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.1rem;
  animation: rise 900ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

@media (min-width: 900px) {
  .brand {
    align-items: flex-start;
    text-align: left;
  }
}

.brand__logo {
  width: min(78vw, 360px);
  height: auto;
  display: block;
}

@media (min-width: 900px) {
  .brand__logo {
    width: min(100%, 520px);
  }
}

.brand__tagline {
  font-family: var(--font-display);
  font-size: 1rem;
  font-style: italic;
  color: rgba(53, 90, 76, 0.9);
}

.brand__socials {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

.social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  color: rgba(20, 22, 21, 0.72);
  transition: color 300ms ease, background-color 300ms ease, transform 400ms cubic-bezier(0.22, 1, 0.36, 1);
}

.social:hover {
  color: var(--brand-pine);
  background: rgba(53, 90, 76, 0.1);
  transform: translateY(-2px);
}

/* ---------- Chips ---------- */
.links {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 100%;
  max-width: 460px;
  margin: 0 auto;
}

@media (min-width: 900px) {
  .links {
    margin: 0;
    max-width: none;
  }
}

.chip {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  min-height: 56px;
  padding: 0.6rem 1.25rem 0.6rem 0.8rem;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(53, 90, 76, 0.14);
  border-radius: var(--radius-pill);
  color: #141615;
  text-decoration: none;
  animation: rise 800ms cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: calc(180ms + var(--i) * 70ms);
  transition:
    transform 450ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 450ms ease,
    border-color 300ms ease,
    background-color 300ms ease;
}

.chip:hover {
  transform: translateY(-2px);
  background: #ffffff;
  border-color: rgba(53, 90, 76, 0.34);
  box-shadow: 0 14px 30px -14px rgba(53, 90, 76, 0.35);
}

.chip:active {
  transform: translateY(0) scale(0.99);
}

.chip--primary {
  background: var(--brand-pine);
  border-color: var(--brand-pine);
  color: #f7f5ee;
}

.chip--primary:hover {
  background: #2b4a3e;
  border-color: #2b4a3e;
}

.chip__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(53, 90, 76, 0.09);
  color: var(--brand-pine);
}

.chip--primary .chip__icon {
  background: rgba(247, 245, 238, 0.16);
  color: #f7f5ee;
}

.chip__title {
  flex: 1;
  min-width: 0;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.3;
}

.chip__arrow {
  flex-shrink: 0;
  opacity: 0.45;
  transition: transform 400ms cubic-bezier(0.22, 1, 0.36, 1), opacity 300ms ease;
}

.chip:hover .chip__arrow {
  transform: translateX(3px);
  opacity: 1;
}

@keyframes rise {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ---------- Mobile: todo cabe en una pantalla compacta ---------- */
@media (max-width: 899px) {
  .hub { align-items: flex-start; }

  .hub__inner {
    padding: 2rem 1.1rem 2.5rem;
    gap: 1.6rem;
  }

  .brand { gap: 0.8rem; }
  .brand__tagline { font-size: 0.95rem; }
  .chip { min-height: 52px; }
  .chip__title { font-size: 0.92rem; }
}

@media (prefers-reduced-motion: reduce) {
  .root { animation: none; stroke-dashoffset: 0; }
  .drift, .brand, .chip { animation: none; }
  .roots__layer, .chip, .social { transition: none; }
}
</style>
