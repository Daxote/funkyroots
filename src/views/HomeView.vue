<script setup>
import { funkyRootsRepository } from '@/core/data/funkyRootsRepository'
import HeroVideoSection from '@/components/sections/HeroVideoSection.vue'
import ParallaxBannerSection from '@/components/sections/ParallaxBannerSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import ArtistsSection from '@/components/sections/ArtistsSection.vue'
import WorksSection from '@/components/sections/WorksSection.vue'
import CollaboratorsSection from '@/components/sections/CollaboratorsSection.vue'

/**
 * HomeView — Ensamblaje limpio de las secciones de la Landing Principal ('/').
 * Alimentada exclusivamente desde la capa de datos desacoplada (`funkyRootsRepository`).
 * Respeta la alternancia rítmica Dark / Light / Dark / Marca.
 */
const brand = funkyRootsRepository.getBrandMetadata()
const services = funkyRootsRepository.getServices()
const artists = funkyRootsRepository.getArtists()
const works = funkyRootsRepository.getWorks()
const collaborators = funkyRootsRepository.getCollaborators()
</script>

<template>
  <div class="home-view">
    <!-- 1. Hero con Video a Pantalla Completa (100vh — Dark #141615) -->
    <HeroVideoSection :brand="brand" />

    <!-- 2. Sección Manifiesto con Efecto Parallax (Dark #141615 + Verde Pino) -->
    <ParallaxBannerSection
      :manifesto="brand.parallaxManifesto"
      :title="brand.manifestoTitle"
    />

    <!-- 3. Prestación de Servicios del Estudio (Tema Claro #F5F5F0) -->
    <ServicesSection :services="services" />

    <!-- 4. Grilla de Artistas con Navegación a Vista Dedicada (Tema Dark #141615) -->
    <ArtistsSection :artists="artists" />

    <!-- 5. Catálogo de Obras & Sesiones con YouTube Facade (Tema Dark #2E2E2E) -->
    <WorksSection :works="works" />

    <!-- 6. Red de Colaboradores (Tema Marca #355A4C / Claro #E6E0D8) -->
    <CollaboratorsSection :collaborators="collaborators" />
  </div>
</template>
