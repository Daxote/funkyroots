<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { applyPendingRouteScroll } from '@/router'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import BrandIntroSplash from '@/components/layout/BrandIntroSplash.vue'

const route = useRoute()
const isMaintenanceRoute = computed(() => Boolean(route.meta?.isMaintenance))
</script>

<template>
  <div class="app-shell">
    <template v-if="!isMaintenanceRoute">
      <BrandIntroSplash />

      <a href="#main-content" class="skip-link">
        Saltar al contenido
      </a>

      <AppNavbar />
    </template>

    <main id="main-content" class="app-shell__main">
      <RouterView v-slot="{ Component, route: currentRoute }">
        <Transition
          name="view-dissolve"
          mode="out-in"
          @after-leave="applyPendingRouteScroll"
        >
          <component :is="Component" :key="currentRoute.path" />
        </Transition>
      </RouterView>
    </main>

    <AppFooter v-if="!isMaintenanceRoute" />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--brand-dark);
  color: var(--brand-bone);
  overflow-x: hidden;
  overflow-x: clip;
  max-width: 100%;
  width: 100%;
}

.app-shell__main {
  flex: 1;
  overflow-x: hidden;
  overflow-x: clip;
  max-width: 100%;
  width: 100%;
}

/* Transición de difuminación (blur + fade) sin desplazamiento vertical confuso */
.view-dissolve-enter-active {
  transition:
    opacity 340ms var(--ease-editorial),
    filter 340ms var(--ease-editorial),
    transform 340ms var(--ease-editorial);
}

.view-dissolve-leave-active {
  transition:
    opacity 240ms var(--ease-editorial),
    filter 240ms var(--ease-editorial),
    transform 240ms var(--ease-editorial);
}

.view-dissolve-enter-from {
  opacity: 0;
  filter: blur(12px);
  transform: scale(1.012);
}

.view-dissolve-leave-to {
  opacity: 0;
  filter: blur(12px);
  transform: scale(0.988);
}
</style>
