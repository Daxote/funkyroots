<script setup>
import { RouterLink } from 'vue-router'
import { funkyRootsRepository } from '@/core/data/funkyRootsRepository'
import imagotipoBlancoUrl from '@/assets/brand/FunkyRoots/IMAGOTIPO/FunkyRoots Blanco PNG.webp'

const brand = funkyRootsRepository.getBrandMetadata()
const artists = funkyRootsRepository.getArtists()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer theme-dark">
    <div class="container-editorial py-16">
      <div class="app-footer__grid">
        <div class="app-footer__brand-col">
          <RouterLink to="/test" class="app-footer__logo-link" aria-label="FunkyRoots Estudios — Inicio">
            <img
              :src="imagotipoBlancoUrl"
              alt="FunkyRoots Estudios"
              class="app-footer__imagotipo"
              loading="lazy"
            />
          </RouterLink>
          <p class="app-footer__description">
            {{ brand.manifestoLead }}
          </p>
        </div>

        <div class="app-footer__col">
          <h3 class="app-footer__heading">Artistas</h3>
          <ul class="app-footer__list">
            <li v-for="artist in artists" :key="artist.id">
              <RouterLink
                :to="`/test/artistas/${artist.slug}`"
                class="app-footer__link"
              >
                {{ artist.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div class="app-footer__col">
          <h3 class="app-footer__heading">Plataformas</h3>
          <ul class="app-footer__list">
            <li v-for="social in brand.contact.socials" :key="social.label">
              <a
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="app-footer__link"
              >
                <span>{{ social.label }}</span>
                <span class="app-footer__arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="app-footer__col">
          <h3 class="app-footer__heading">Contacto</h3>
          <p class="app-footer__address">{{ brand.location }}</p>
          <a
            :href="`mailto:${brand.contact.bookingEmail}`"
            class="app-footer__email"
          >
            {{ brand.contact.bookingEmail }}
          </a>
        </div>
      </div>

      <div class="app-footer__bottom">
        <span class="app-footer__copy">
          © {{ currentYear }} FunkyRoots Estudios
        </span>
        <span class="app-footer__spec">
          Identidad Visual por Nicolás Burgos Pérez
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: var(--brand-dark);
  border-top: 1px solid var(--border-dark-subtle);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.app-footer__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-8);
  padding-bottom: var(--space-12);
  border-bottom: 1px solid var(--border-dark-subtle);
  width: 100%;
}

@media (min-width: 768px) {
  .app-footer__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1080px) {
  .app-footer__grid {
    grid-template-columns: minmax(0, 1.5fr) repeat(3, minmax(0, 1fr));
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
  height: 48px;
  width: auto;
  object-fit: contain;
}

.app-footer__description {
  font-size: 0.9375rem;
  color: rgba(var(--brand-beige-rgb), 0.8);
  max-width: 36ch;
  line-height: 1.6;
}

.app-footer__col {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.app-footer__heading {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--brand-ochre);
  letter-spacing: 0.06em;
  text-transform: uppercase;
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
  min-height: 40px;
  padding: var(--space-1) var(--space-3);
  font-size: 0.9375rem;
  color: rgba(var(--brand-bone-rgb), 0.88);
  border-radius: var(--radius-pill);
  transition:
    color var(--duration-fast) var(--ease-editorial),
    background-color var(--duration-fast) var(--ease-editorial);
}

.app-footer__link:hover {
  color: var(--brand-bone);
  background-color: rgba(var(--brand-pine-rgb), 0.3);
}

.app-footer__arrow {
  color: var(--brand-ochre);
}

.app-footer__address {
  font-size: 0.9375rem;
  color: rgba(var(--brand-beige-rgb), 0.8);
}

.app-footer__email {
  display: inline-flex;
  align-items: center;
  min-height: var(--touch-target-min);
  font-size: 0.9375rem;
  font-weight: 500;
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
  gap: var(--space-2);
  padding-top: var(--space-6);
  font-size: 0.8125rem;
  color: rgba(var(--brand-beige-rgb), 0.65);
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
