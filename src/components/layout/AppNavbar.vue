<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import BaseButton from '@/components/ui/BaseButton.vue'
import isotipoBlancoUrl from '@/assets/brand/FunkyRoots/ISOTIPO/FunkyRoots Blanco PNG.png'
import logotipoBlancoUrl from '@/assets/brand/FunkyRoots/LOGOTIPO/FunkyRoots Blanco PNG.png'

/**
 * AppNavbar — Navegación fija con backdrop-blur, adaptación según scroll e identidad visual oficial de FunkyRoots.
 */
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const route = useRoute()
const router = useRouter()

const navItems = [
  { code: '01', label: 'Servicios', hash: '#servicios' },
  { code: '02', label: 'Artistas', hash: '#artistas' },
  { code: '03', label: 'Obras', hash: '#obras' },
  { code: '04', label: 'Colaboradores', hash: '#colaboradores' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 32
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
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
      'app-navbar--menu-open': isMobileMenuOpen
    }"
  >
    <div class="container-editorial app-navbar__inner">
      <!-- Identidad Oficial de Marca (Isotipo + Logotipo sin fondo) -->
      <RouterLink
        to="/test"
        class="app-navbar__brand"
        aria-label="FunkyRoots Estudios — Ir al inicio"
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

      <!-- Navegación Desktop -->
      <nav class="app-navbar__nav" aria-label="Navegación principal">
        <ul class="app-navbar__list">
          <li v-for="item in navItems" :key="item.code">
            <a
              :href="`/test${item.hash}`"
              class="app-navbar__link"
              @click.prevent="navigateToSection(item.hash)"
            >
              <span class="font-mono app-navbar__link-code">{{ item.code }}</span>
              <span>{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </nav>

      <!-- Acción Primaria Desktop -->
      <div class="app-navbar__cta">
        <BaseButton
          variant="primary"
          href="https://www.youtube.com/@FunkyRootsEstudios"
          target="_blank"
          aria-label="Visitar canal oficial de YouTube @FunkyRootsEstudios"
        >
          @FUNKYROOTSESTUDIOS ↗
        </BaseButton>
      </div>

      <!-- Botón Menú Móvil (>= 44x44px) -->
      <button
        type="button"
        class="app-navbar__burger"
        :aria-expanded="isMobileMenuOpen ? 'true' : 'false'"
        aria-controls="mobile-nav-drawer"
        :aria-label="isMobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'"
        @click="toggleMobileMenu"
      >
        <span class="font-mono app-navbar__burger-label">
          {{ isMobileMenuOpen ? 'CERRAR' : 'MENÚ' }}
        </span>
        <svg
          width="20"
          height="20"
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

    <!-- Drawer de Navegación Móvil -->
    <div
      v-if="isMobileMenuOpen"
      id="mobile-nav-drawer"
      class="app-navbar__drawer"
    >
      <div class="container-editorial app-navbar__drawer-inner">
        <ul class="app-navbar__drawer-list">
          <li v-for="item in navItems" :key="item.code">
            <a
              :href="`/test${item.hash}`"
              class="app-navbar__drawer-link"
              @click.prevent="navigateToSection(item.hash)"
            >
              <span class="font-mono app-navbar__link-code">{{ item.code }} //</span>
              <span class="font-display">{{ item.label }}</span>
            </a>
          </li>
        </ul>

        <div class="app-navbar__drawer-footer">
          <BaseButton
            variant="primary"
            href="https://www.youtube.com/@FunkyRootsEstudios"
            target="_blank"
          >
            CANAL OFICIAL YOUTUBE ↗
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
  background-color: rgba(20, 22, 21, 0.45);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-dark-subtle);
  transition:
    background-color var(--duration-base) var(--ease-editorial),
    border-color var(--duration-base) var(--ease-editorial);
}

.app-navbar--scrolled,
.app-navbar--menu-open {
  background-color: rgba(20, 22, 21, 0.92);
  border-bottom-color: rgba(var(--brand-sage-rgb), 0.28);
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
  gap: var(--space-2);
  min-height: var(--touch-target-min);
  padding: var(--space-1) var(--space-2);
  border-radius: 2px;
}

.app-navbar__isotipo {
  height: 36px;
  width: auto;
  object-fit: contain;
  flex-shrink: 0;
}

.app-navbar__logotipo {
  height: 28px;
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
}

.app-navbar__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--touch-target-min);
  padding: var(--space-2) var(--space-4);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--brand-bone);
  border: 1px solid transparent;
  border-radius: 2px;
  transition:
    color var(--duration-fast) var(--ease-editorial),
    border-color var(--duration-fast) var(--ease-editorial),
    background-color var(--duration-fast) var(--ease-editorial);
}

.app-navbar__link:hover {
  color: var(--brand-bone);
  background-color: rgba(var(--brand-pine-rgb), 0.28);
  border-color: rgba(var(--brand-sage-rgb), 0.45);
}

.app-navbar__link:active {
  transform: translateY(1px);
}

.app-navbar__link-code {
  font-size: 0.75rem;
  color: var(--brand-ochre);
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
  gap: var(--space-2);
  min-height: var(--touch-target-min);
  min-width: var(--touch-target-min);
  padding: var(--space-2) var(--space-3);
  color: var(--brand-bone);
  border: 1px solid var(--border-dark-strong);
  border-radius: 2px;
  cursor: pointer;
}

@media (min-width: 960px) {
  .app-navbar__burger {
    display: none;
  }
}

.app-navbar__burger-label {
  font-size: 0.75rem;
  color: var(--brand-ochre);
}

.app-navbar__drawer {
  background-color: var(--brand-dark);
  border-bottom: 1px solid var(--border-dark-strong);
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
  gap: var(--space-3);
  min-height: var(--touch-target-min);
  padding: var(--space-3) var(--space-4);
  font-size: 1.25rem;
  color: var(--brand-bone);
  border-bottom: 1px solid var(--border-dark-subtle);
}

.app-navbar__drawer-link:hover {
  background-color: rgba(var(--brand-pine-rgb), 0.25);
}

.app-navbar__drawer-footer {
  padding-top: var(--space-2);
}
</style>
