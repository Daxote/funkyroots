import { createRouter, createWebHistory } from 'vue-router'
import MaintenanceView from '@/views/MaintenanceView.vue'
import HomeView from '@/views/HomeView.vue'

/**
 * Enrutamiento con transición difuminada sin scroll visible:
 * Guardamos la posición de lectura de '/test' y la aplicamos de forma instantánea
 * únicamente cuando la vista saliente ya se difuminó por completo.
 */
let lastTestHomeScrollTop = 0
let pendingScrollTarget = { top: 0, hash: '' }

export function applyPendingRouteScroll() {
  if (typeof window === 'undefined') return

  if (pendingScrollTarget.hash) {
    const el = document.querySelector(pendingScrollTarget.hash)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      return
    }
  }

  window.scrollTo({
    top: pendingScrollTarget.top || 0,
    left: 0,
    behavior: 'instant'
  })
}

const routes = [
  {
    path: '/',
    alias: ['/links', '/linktree'],
    name: 'maintenance',
    component: MaintenanceView,
    meta: {
      title: 'FunkyRoots Estudios — Enlaces Oficiales',
      isMaintenance: true
    }
  },
  {
    path: '/test',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'FunkyRoots Estudios — Producción & Sello Independiente'
    }
  },
  {
    path: '/test/artistas/:slug',
    alias: ['/artistas/:slug'],
    name: 'artist-detail',
    component: () => import('@/views/ArtistDetailView.vue'),
    props: true,
    meta: {
      title: 'Artista — FunkyRoots Estudios'
    }
  },
  {
    path: '/test/servicios/:slug',
    alias: ['/servicios/:slug'],
    name: 'service-detail',
    component: () => import('@/views/ServiceDetailView.vue'),
    props: true,
    meta: {
      title: 'Servicio — FunkyRoots Estudios'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  if (typeof window !== 'undefined' && from.name === 'home') {
    lastTestHomeScrollTop = window.scrollY || 0
  }

  if (to.hash) {
    pendingScrollTarget = { top: 0, hash: to.hash }
  } else if (to.name === 'home' && (from.name === 'artist-detail' || from.name === 'service-detail') && lastTestHomeScrollTop > 0) {
    pendingScrollTarget = { top: lastTestHomeScrollTop, hash: '' }
  } else {
    pendingScrollTarget = { top: 0, hash: '' }
  }
})

router.afterEach((to) => {
  if (typeof document !== 'undefined' && to.meta?.title) {
    document.title = to.meta.title
  }
})

export default router
