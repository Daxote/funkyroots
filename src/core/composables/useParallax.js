import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable reactivo y ligero para efecto Parallax usando requestAnimationFrame.
 * Respeta automáticamente `prefers-reduced-motion: reduce` (Regla UI UX Pro Max).
 *
 * @param {Object} options
 * @param {number} options.speed - Factor de velocidad del desplazamiento (default: 0.22)
 * @param {number} options.maxOffset - Límite máximo en píxeles para evitar desbordes (default: 120)
 */
export function useParallax({ speed = 0.22, maxOffset = 120 } = {}) {
  const containerRef = ref(null)
  const offsetY = ref(0)
  const isReducedMotion = ref(false)

  let rafId = null
  let mediaQuery = null

  const updateParallax = () => {
    rafId = null
    if (isReducedMotion.value || !containerRef.value) {
      offsetY.value = 0
      return
    }

    const rect = containerRef.value.getBoundingClientRect()
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight

    // Solo calcula cuando la sección está visible en el viewport
    if (rect.bottom < 0 || rect.top > viewportHeight) {
      return
    }

    const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2
    const rawOffset = -centerOffset * speed
    const clampedOffset = Math.max(-maxOffset, Math.min(maxOffset, rawOffset))

    offsetY.value = Math.round(clampedOffset * 10) / 10
  }

  const onScrollOrResize = () => {
    if (rafId === null) {
      rafId = window.requestAnimationFrame(updateParallax)
    }
  }

  const handleMotionPreferenceChange = (event) => {
    isReducedMotion.value = event.matches
    if (isReducedMotion.value) {
      offsetY.value = 0
    } else {
      onScrollOrResize()
    }
  }

  onMounted(() => {
    if (typeof window === 'undefined') return

    mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    isReducedMotion.value = mediaQuery.matches

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMotionPreferenceChange)
    }

    updateParallax()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize, { passive: true })
  })

  onUnmounted(() => {
    if (typeof window === 'undefined') return

    window.removeEventListener('scroll', onScrollOrResize)
    window.removeEventListener('resize', onScrollOrResize)

    if (mediaQuery && mediaQuery.removeEventListener) {
      mediaQuery.removeEventListener('change', handleMotionPreferenceChange)
    }

    if (rafId !== null) {
      window.cancelAnimationFrame(rafId)
      rafId = null
    }
  })

  return {
    containerRef,
    offsetY,
    isReducedMotion
  }
}
