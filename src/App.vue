<script setup>
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import BrandIntroSplash from '@/components/layout/BrandIntroSplash.vue'
</script>

<template>
  <div class="app-shell">
    <!-- Animación breve inicial con el Isotipo y Logotipo Oficial de FunkyRoots -->
    <BrandIntroSplash />

    <!-- Enlace de Salto Directo para Accesibilidad por Teclado -->
    <a href="#main-content" class="skip-link">
      SALTAR AL CONTENIDO PRINCIPAL
    </a>

    <AppNavbar />

    <main id="main-content" class="app-shell__main">
      <RouterView />
    </main>

    <AppFooter />
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
