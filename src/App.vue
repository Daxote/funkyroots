<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import BrandIntroSplash from '@/components/layout/BrandIntroSplash.vue'

const route = useRoute()
const isMaintenanceRoute = computed(() => Boolean(route.meta?.isMaintenance))
</script>

<template>
  <div class="app-shell">
    <!-- En la ruta oculta (/test) mostramos la animación de bienvenida, el Navbar y el Footer -->
    <template v-if="!isMaintenanceRoute">
      <BrandIntroSplash />

      <a href="#main-content" class="skip-link">
        SALTAR AL CONTENIDO PRINCIPAL
      </a>

      <AppNavbar />
    </template>

    <main id="main-content" class="app-shell__main">
      <RouterView />
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
}

.app-shell__main {
  flex: 1;
}
</style>
