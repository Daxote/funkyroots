<script setup>
import { funkyRootsRepository } from '@/core/data/funkyRootsRepository'
import HeroVideoSection from '@/components/sections/HeroVideoSection.vue'
import SpotifyPlaylistSection from '@/components/sections/SpotifyPlaylistSection.vue'
import ArtistsSection from '@/components/sections/ArtistsSection.vue'
import WorksSection from '@/components/sections/WorksSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import CollaboratorsSection from '@/components/sections/CollaboratorsSection.vue'

const brand = funkyRootsRepository.getBrandMetadata()
const services = funkyRootsRepository.getServices()
const artists = funkyRootsRepository.getArtists()
const works = funkyRootsRepository.getWorks()
const collaborators = funkyRootsRepository.getCollaborators()
</script>

<template>
  <div class="home-view">
    <HeroVideoSection :brand="brand" />

    <SpotifyPlaylistSection />

    <ArtistsSection :artists="artists" />

    <WorksSection :works="works" />

    <ServicesSection :services="services" />

    <CollaboratorsSection :collaborators="collaborators" />
  </div>
</template>
