import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

/**
 * Enrutamiento Clean con preservación de posición de scroll:
 * - Si existe `savedPosition` (botón Atrás/Adelante), restaura la coordenada exacta.
 * - Si regresamos a '/' desde una vista de artista y hemos guardado el último scroll de la landing,
 *   restaura esa posición para no perder el contexto en la grilla de artistas.
 * - Si hay un `to.hash` (ej. `/#servicios`), desplaza suavemente al ancla.
 */
let lastHomeScrollTop = 0

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Funky Roots // Editorial Sound Studio & Sello Independiente'
    }
  },
  {
    path: '/artistas/:slug',
    name: 'artist-detail',
    component: () => import('@/views/ArtistDetailView.vue'),
    props: true,
    meta: {
      title: 'Expediente de Artista // Funky Roots'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }

    if (to.name === 'home' && from.name === 'artist-detail' && lastHomeScrollTop > 0) {
      return {
        top: lastHomeScrollTop,
        left: 0
      }
    }

    return { top: 0, left: 0 }
  }
})

router.beforeEach((to, from) => {
  if (typeof window !== 'undefined' && from.name === 'home') {
    lastHomeScrollTop = window.scrollY || 0
  }
})

router.afterEach((to) => {
  if (typeof document !== 'undefined' && to.meta?.title) {
    document.title = to.meta.title
  }
})

export default router
