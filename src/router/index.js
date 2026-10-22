import { createRouter, createWebHistory } from 'vue-router'
import MaintenanceView from '@/views/MaintenanceView.vue'
import HomeView from '@/views/HomeView.vue'

/**
 * Enrutamiento Clean con modo Mantención en '/' y vista previa completa en '/test':
 * - '/' -> Pantalla oficial de sitio en construcción (MaintenanceView)
 * - '/test' -> Proyecto completo (HomeView) para revisión interna y colaboradores
 * - '/test/artistas/:slug' (y alias '/artistas/:slug') -> Vista dedicada de artista
 */
let lastTestHomeScrollTop = 0

const routes = [
  {
    path: '/',
    name: 'maintenance',
    component: MaintenanceView,
    meta: {
      title: 'FunkyRoots Estudios // Sitio en construcción',
      isMaintenance: true
    }
  },
  {
    path: '/test',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'FunkyRoots Estudios // Preview Colaboradores'
    }
  },
  {
    path: '/test/artistas/:slug',
    alias: ['/artistas/:slug'],
    name: 'artist-detail',
    component: () => import('@/views/ArtistDetailView.vue'),
    props: true,
    meta: {
      title: 'Expediente de Artista // FunkyRoots Estudios'
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

    if (to.name === 'home' && from.name === 'artist-detail' && lastTestHomeScrollTop > 0) {
      return {
        top: lastTestHomeScrollTop,
        left: 0
      }
    }

    return { top: 0, left: 0 }
  }
})

router.beforeEach((to, from) => {
  if (typeof window !== 'undefined' && from.name === 'home') {
    lastTestHomeScrollTop = window.scrollY || 0
  }
})

router.afterEach((to) => {
  if (typeof document !== 'undefined' && to.meta?.title) {
    document.title = to.meta.title
  }
})

export default router
