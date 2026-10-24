<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import BaseButton from '@/components/ui/BaseButton.vue'
import isotipoBlancoUrl from '@/assets/brand/FunkyRoots/ISOTIPO/FunkyRoots Blanco PNG.webp'
import logotipoBlancoUrl from '@/assets/brand/FunkyRoots/LOGOTIPO/FunkyRoots Blanco PNG.webp'

/**
 * AppNavbar — Navegación orgánica que se esconde suavemente al hacer scroll hacia abajo
 * y reaparece al subir. Sin numeraciones (01, 02, 03) ni tipografía monoespaciada.
 */
const isScrolled = ref(false)
const isHidden = ref(false)
const isMobileMenuOpen = ref(false)

let lastScrollY = 0

const route = useRoute()
const router = useRouter()

const navItems = [
  { label: 'Artistas', hash: '#artistas' },
  { label: 'Obras y Videos', hash: '#obras' },
  { label: 'Servicios', hash: '#servicios' },
  { label: 'Comunidad', hash: '#colaboradores' }
]

const handleScroll = () => {
  const currentScrollY = window.scrollY || 0
  isScrolled.value = currentScrollY > 32

  if (isMobileMenuOpen.value) {
    isHidden.value = false
    lastScrollY = currentScrollY
    return
  }

  if (currentScrollY <= 72) {
    isHidden.value = false
  } else if (currentScrollY > lastScrollY + 6) {
    isHidden.value = true
  } else if (currentScrollY < lastScrollY - 8) {
    isHidden.value = false
  }

  lastScrollY = currentScrollY
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    isHidden.value = false
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const navigateToSection = async (hash) => {
  closeMobileMenu()
  if (route.path !== '/test') {
    await router.push({ path: '/test', hash })
  } else {
    const target = document.querySelector(hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

onMounted(() => {
  lastScrollY = window.scrollY || 0
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="app-navbar"
    :class="{
      'app-navbar--scrolled': isScrolled,
      'app-navbar--hidden': isHidden,
      'app-navbar--menu-open': isMobileMenuOpen
    }"
  >
    <div class="container-editorial app-navbar__inner">
      <RouterLink
        to="/test"
        class="app-navbar__brand"
        aria-label="FunkyRoots Estudios — Inicio"
        @click="closeMobileMenu"
      >
        <img
          :src="isotipoBlancoUrl"
          alt=""
          class="app-navbar__isotipo"
        />
        <img
          :src="logotipoBlancoUrl"
          alt="FunkyRoots"
          class="app-navbar__logotipo"
        />
      </RouterLink>

      <nav class="app-navbar__nav" aria-label="Navegación principal">
        <ul class="app-navbar__list">
          <li v-for="item in navItems" :key="item.hash">
            <a
              :href="`/test${item.hash}`"
              class="app-navbar__link"
              @click.prevent="navigateToSection(item.hash)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="app-navbar__cta">
        <BaseButton
          variant="primary"
          href="https://www.youtube.com/@FunkyRootsEstudios"
          target="_blank"
          aria-label="Visitar canal oficial de YouTube"
        >
          Canal YouTube ↗
        </BaseButton>
      </div>

      <button
        type="button"
        class="app-navbar__burger"
        :aria-expanded="isMobileMenuOpen ? 'true' : 'false'"
        aria-controls="mobile-nav-drawer"
        :aria-label="isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
        @click="toggleMobileMenu"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <path v-if="!isMobileMenuOpen" d="M4 8h16M4 16h16" />
          <path v-else d="M6 6l12 12M6 18L18 6" />
        </svg>
      </button>
    </div>

    <div
      v-if="isMobileMenuOpen"
      id="mobile-nav-drawer"
      class="app-navbar__drawer"
    >
      <div class="container-editorial app-navbar__drawer-inner">
        <ul class="app-navbar__drawer-list">
          <li v-for="item in navItems" :key="item.hash">
            <a
              :href="`/test${item.hash}`"
              class="app-navbar__drawer-link font-display"
              @click.prevent="navigateToSection(item.hash)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>

        <div class="app-navbar__drawer-footer">
          <BaseButton
            variant="primary"
            href="https://www.youtube.com/@FunkyRootsEstudios"
            target="_blank"
          >
            Canal Oficial YouTube ↗
          </BaseButton>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--navbar-height);
  background-color: rgba(20, 22, 21, 0.35);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid transparent;
  transform: translateY(0);
  transition:
    transform 360ms var(--ease-editorial),
    background-color var(--duration-base) var(--ease-editorial),
    border-color var(--duration-base) var(--ease-editorial);
}

.app-navbar--scrolled,
.app-navbar--menu-open {
  background-color: rgba(20, 22, 21, 0.88);
  border-bottom-color: var(--border-dark-subtle);
}

.app-navbar--hidden {
  transform: translateY(-110%);
}

.app-navbar__inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
}

.app-navbar__brand {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  min-height: var(--touch-target-min);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-pill);
}

.app-navbar__isotipo {
  height: 34px;
  width: auto;
  object-fit: contain;
  flex-shrink: 0;
}

.app-navbar__logotipo {
  height: 22px;
  width: auto;
  object-fit: contain;
}

.app-navbar__nav {
  display: none;
}

@media (min-width: 960px) {
  .app-navbar__nav {
    display: block;
  }
}

.app-navbar__list {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0.3rem;
  background-color: rgba(245, 245, 240, 0.04);
  border: 1px solid var(--border-dark-subtle);
  border-radius: var(--radius-pill);
}

.app-navbar__link {
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 0.45rem 1.15rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: rgba(var(--brand-bone-rgb), 0.86);
  border-radius: var(--radius-pill);
  transition:
    color var(--duration-fast) var(--ease-editorial),
    background-color var(--duration-fast) var(--ease-editorial);
}

.app-navbar__link:hover {
  color: var(--brand-bone);
  background-color: rgba(var(--brand-pine-rgb), 0.45);
}

.app-navbar__cta {
  display: none;
}

@media (min-width: 960px) {
  .app-navbar__cta {
    display: flex;
    align-items: center;
  }
}

.app-navbar__burger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: var(--touch-target-min);
  min-width: var(--touch-target-min);
  padding: var(--space-2);
  color: var(--brand-bone);
  background-color: rgba(245, 245, 240, 0.06);
  border: 1px solid var(--border-dark-strong);
  border-radius: var(--radius-pill);
  cursor: pointer;
}

@media (min-width: 960px) {
  .app-navbar__burger {
    display: none;
  }
}

.app-navbar__drawer {
  background-color: rgba(20, 22, 21, 0.96);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--border-dark-strong);
  border-bottom-left-radius: var(--radius-lg);
  border-bottom-right-radius: var(--radius-lg);
  padding: var(--space-6) 0 var(--space-8);
}

@media (min-width: 960px) {
  .app-navbar__drawer {
    display: none;
  }
}

.app-navbar__drawer-inner {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.app-navbar__drawer-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.app-navbar__drawer-link {
  display: flex;
  align-items: center;
  min-height: var(--touch-target-min);
  padding: var(--space-3) var(--space-4);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--brand-bone);
  border-radius: var(--radius-md);
  transition: background-color var(--duration-fast) var(--ease-editorial);
}

.app-navbar__drawer-link:hover {
  background-color: rgba(var(--brand-pine-rgb), 0.3);
}

.app-navbar__drawer-footer {
  padding-top: var(--space-2);
}
</style>
