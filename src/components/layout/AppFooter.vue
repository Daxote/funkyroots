<script setup>
import { RouterLink } from 'vue-router'
import { funkyRootsRepository } from '@/core/data/funkyRootsRepository'
import imagotipoBlancoUrl from '@/assets/brand/FunkyRoots/IMAGOTIPO/FunkyRoots Blanco PNG.png'

/**
 * AppFooter — Cierre institucional con el Imagotipo Blanco Oficial de FunkyRoots y los 5 enlaces oficiales (YouTube, Instagram, SoundCloud, Apple Music, Spotify Playlist).
 */
const brand = funkyRootsRepository.getBrandMetadata()
const artists = funkyRootsRepository.getArtists()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer theme-dark">
    <div class="container-editorial py-16">
      <div class="app-footer__grid">
        <!-- Columna 1: Identidad e Imagotipo Oficial -->
        <div class="app-footer__brand-col">
          <RouterLink to="/" class="app-footer__logo-link" aria-label="FunkyRoots Estudios — Inicio">
            <img
              :src="imagotipoBlancoUrl"
              alt="FunkyRoots Estudios"
              class="app-footer__imagotipo"
            />
          </RouterLink>
          <p class="app-footer__description">
            {{ brand.manifestoLead }}
          </p>
          <p class="font-mono app-footer__coords">
            {{ brand.location }}
          </p>
        </div>

        <!-- Columna 2: Roster del Sello -->
        <div class="app-footer__col">
          <h3 class="font-mono app-footer__heading">ROSTER // ARTISTAS</h3>
          <ul class="app-footer__list">
            <li v-for="artist in artists" :key="artist.id">
              <RouterLink
                :to="`/artistas/${artist.slug}`"
                class="app-footer__link"
              >
                <span class="font-mono app-footer__link-code">{{ artist.index }}</span>
                <span>{{ artist.name }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Columna 3: Enlaces Oficiales de Marca -->
        <div class="app-footer__col">
          <h3 class="font-mono app-footer__heading">CANALES // OFICIALES</h3>
          <ul class="app-footer__list">
            <li v-for="social in brand.contact.socials" :key="social.label">
              <a
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="app-footer__link"
              >
                <span>{{ social.label }}</span>
                <span class="font-mono app-footer__arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Columna 4: Estudio & Contacto -->
        <div class="app-footer__col">
          <h3 class="font-mono app-footer__heading">CONTACTO // ESTUDIO</h3>
          <p class="app-footer__address">{{ brand.contact.address }}</p>
          <a
            :href="`mailto:${brand.contact.bookingEmail}`"
            class="app-footer__email font-mono"
          >
            {{ brand.contact.bookingEmail }}
          </a>
          <a
            :href="`mailto:${brand.contact.email}`"
            class="app-footer__email font-mono"
          >
            {{ brand.contact.email }}
          </a>
        </div>
      </div>

      <!-- Línea Técnica Inferior -->
      <div class="app-footer__bottom">
        <span class="font-mono app-footer__copy">
          © {{ currentYear }} FUNKYROOTS ESTUDIOS. TODOS LOS DERECHOS RESERVADOS.
        </span>
        <span class="font-mono app-footer__spec">
          IDENTIDAD VISUAL // NICOLÁS BURGOS PÉREZ · ARQUITECTURA CLEAN
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: var(--brand-dark);
  border-top: 1px solid var(--border-dark-subtle);
}

.app-footer__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
  padding-bottom: var(--space-12);
  border-bottom: 1px solid var(--border-dark-subtle);
}

@media (min-width: 768px) {
  .app-footer__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1080px) {
  .app-footer__grid {
    grid-template-columns: 1.5fr 1fr 1fr 1.1fr;
  }
}

.app-footer__brand-col {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.app-footer__logo-link {
  display: inline-flex;
  align-items: center;
  min-height: var(--touch-target-min);
  width: fit-content;
}

.app-footer__imagotipo {
  height: 54px;
  width: auto;
  object-fit: contain;
}

.app-footer__description {
  font-size: 0.9375rem;
  color: var(--brand-beige);
  max-width: 38ch;
  line-height: 1.65;
}

.app-footer__coords {
  font-size: 0.75rem;
  color: var(--brand-ochre);
}

.app-footer__col {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.app-footer__heading {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--brand-ochre);
  letter-spacing: 0.12em;
}

.app-footer__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.app-footer__link {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  min-height: var(--touch-target-min);
  padding: var(--space-2) var(--space-3);
  margin-left: calc(var(--space-3) * -1);
  font-size: 0.9375rem;
  color: var(--brand-bone);
  border-radius: 2px;
  border: 1px solid transparent;
  transition:
    color var(--duration-fast) var(--ease-editorial),
    background-color var(--duration-fast) var(--ease-editorial),
    border-color var(--duration-fast) var(--ease-editorial);
}

.app-footer__link:hover {
  color: var(--brand-bone);
  background-color: rgba(var(--brand-pine-rgb), 0.25);
  border-color: rgba(var(--brand-sage-rgb), 0.35);
}

.app-footer__link-code {
  font-size: 0.75rem;
  color: var(--brand-sage);
}

.app-footer__arrow {
  color: var(--brand-ochre);
}

.app-footer__address {
  font-size: 0.9375rem;
  color: var(--brand-beige);
}

.app-footer__email {
  display: inline-flex;
  align-items: center;
  min-height: var(--touch-target-min);
  font-size: 0.8125rem;
  color: var(--brand-bone);
  text-decoration: underline;
  text-decoration-color: var(--brand-sage);
  text-underline-offset: 4px;
  transition: color var(--duration-fast) var(--ease-editorial);
}

.app-footer__email:hover {
  color: var(--brand-ochre);
}

.app-footer__bottom {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-8);
  font-size: 0.75rem;
  color: var(--brand-beige);
}

@media (min-width: 768px) {
  .app-footer__bottom {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.app-footer__spec {
  color: var(--brand-sage);
}
</style>
