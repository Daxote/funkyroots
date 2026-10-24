<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { funkyRootsRepository } from '@/core/data/funkyRootsRepository'
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import YouTubeEmbed from '@/components/ui/YouTubeEmbed.vue'

/**
 * ServiceDetailView — Vista dedicada de especificación de servicio del estudio.
 * Permite detallar cada servicio a fondo: metodología, etapas, equipamiento,
 * entregables y obras de referencia, con la misma elegancia visual que los artistas.
 */
const props = defineProps({
  slug: {
    type: String,
    default: ''
  }
})

const route = useRoute()
const router = useRouter()

const currentSlug = computed(() => props.slug || route.params.slug)
const service = computed(() => funkyRootsRepository.getServiceBySlug(currentSlug.value))
const allServices = funkyRootsRepository.getServices()

const otherServices = computed(() =>
  allServices.filter((item) => item.slug !== currentSlug.value)
)

watchEffect(() => {
  if (typeof document !== 'undefined' && service.value) {
    document.title = `${service.value.title} — FunkyRoots Estudios`
  }
})

const goBackToServices = () => {
  router.push({ path: '/test', hash: '#servicios' })
}
</script>

<template>
  <div class="service-detail theme-dark">
    <template v-if="service">
      <!-- Hero Visual del Servicio -->
      <section class="service-detail__hero" aria-labelledby="service-title-heading">
        <div class="service-detail__hero-backdrop" aria-hidden="true">
          <img
            :src="service.heroImage"
            :alt="service.title"
            class="service-detail__hero-image"
          />
          <div class="service-detail__hero-scrim"></div>
        </div>

        <div class="container-editorial service-detail__hero-content">
          <div class="service-detail__nav-bar">
            <button
              type="button"
              class="service-detail__back-btn"
              aria-label="Volver a la sección de servicios"
              @click="goBackToServices"
            >
              <span aria-hidden="true">←</span>
              <span>Volver a Servicios</span>
            </button>
          </div>

          <div class="service-detail__hero-main">
            <span class="service-detail__category">
              {{ service.category }}
            </span>

            <h1 id="service-title-heading" class="font-display service-detail__title">
              {{ service.title }}
            </h1>

            <p class="service-detail__lead">
              {{ service.description }}
            </p>

            <div class="service-detail__actions">
              <BaseButton
                variant="primary"
                :href="`mailto:estudios@funkyroots.cl?subject=Cotizaci%C3%B3n%20${encodeURIComponent(service.title)}`"
              >
                Cotizar / Agendar Sesión ↗
              </BaseButton>

              <BaseButton
                variant="ghost"
                href="#metodologia"
              >
                Ver Metodología &amp; Etapas ↓
              </BaseButton>
            </div>
          </div>
        </div>
      </section>

      <!-- Metodología & Etapas de Trabajo -->
      <section id="metodologia" class="service-detail__stages py-24" aria-label="Metodología y etapas">
        <div class="container-editorial">
          <SectionHeader
            eyebrow="Proceso de Trabajo"
            title="Cómo Desarrollamos Cada Proyecto"
            theme="dark"
          />

          <div class="service-detail__narrative">
            <p v-for="(paragraph, idx) in service.fullDescription" :key="idx" class="service-detail__paragraph">
              {{ paragraph }}
            </p>
          </div>

          <div class="service-detail__stages-grid gap-6">
            <div
              v-for="(stage, idx) in service.stages"
              :key="stage.title"
              class="stage-card"
            >
              <div class="stage-card__number">
                0{{ idx + 1 }}
              </div>
              <h3 class="font-display stage-card__title">
                {{ stage.title }}
              </h3>
              <p class="stage-card__desc">
                {{ stage.desc }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Ficha Técnica: Entregables & Equipamiento -->
      <section class="service-detail__specs theme-graphite py-24" aria-label="Ficha técnica y equipamiento">
        <div class="container-editorial">
          <SectionHeader
            eyebrow="Especificaciones Técnicas"
            title="Entregables &amp; Equipamiento en Estudio"
            theme="dark"
          />

          <div class="service-detail__specs-grid gap-8">
            <!-- Columna Entregables -->
            <div class="spec-card">
              <h3 class="font-display spec-card__heading">
                Entregables Incluidos
              </h3>
              <ul class="spec-card__list">
                <li
                  v-for="item in service.deliverables"
                  :key="item"
                  class="spec-card__item"
                >
                  <span class="spec-card__bullet" aria-hidden="true">✓</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Columna Equipamiento & Cadena -->
            <div class="spec-card">
              <h3 class="font-display spec-card__heading">
                Equipamiento &amp; Herramientas
              </h3>
              <ul class="spec-card__list">
                <li
                  v-for="gearItem in service.gear"
                  :key="gearItem"
                  class="spec-card__item"
                >
                  <span class="spec-card__bullet spec-card__bullet--pine" aria-hidden="true">✦</span>
                  <span>{{ gearItem }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Banner de Contacto Directo -->
          <div class="service-detail__cta-banner">
            <div>
              <h3 class="font-display service-detail__cta-title">
                ¿Listo para iniciar tu sesión?
              </h3>
              <p class="service-detail__cta-subtitle">
                Escríbenos con los detalles de tu proyecto o track y coordinamos la sesión en el estudio.
              </p>
            </div>

            <BaseButton
              variant="primary"
              :href="`mailto:estudios@funkyroots.cl?subject=Consulta%20${encodeURIComponent(service.title)}`"
            >
              Contactar al Estudio
            </BaseButton>
          </div>
        </div>
      </section>

      <!-- Obras de Referencia Producidas bajo este Servicio -->
      <section v-if="service.relatedVideos && service.relatedVideos.length" class="service-detail__works py-24" aria-label="Obras producidas con este servicio">
        <div class="container-editorial">
          <SectionHeader
            eyebrow="Catálogo &amp; Referencias"
            title="Obras Creadas en Esta Área"
            theme="dark"
          />

          <div class="service-detail__videos-grid gap-8">
            <div
              v-for="video in service.relatedVideos"
              :key="video.id"
              class="service-detail__video-item"
            >
              <YouTubeEmbed
                :youtube-id="video.id"
                :title="video.title"
                :custom-poster="video.poster"
                show-footer
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Otros Servicios del Estudio -->
      <section class="service-detail__more py-16" aria-label="Otros servicios">
        <div class="container-editorial">
          <div class="service-detail__more-header">
            <h2 class="font-display service-detail__more-heading">Otros Servicios del Estudio</h2>
            <BaseButton variant="ghost" to="/test#servicios">
              ← Volver a Todos los Servicios
            </BaseButton>
          </div>

          <div class="service-detail__more-grid gap-6">
            <RouterLink
              v-for="other in otherServices"
              :key="other.id"
              :to="`/test/servicios/${other.slug}`"
              class="service-detail__more-card"
            >
              <img
                :src="other.image"
                :alt="other.title"
                class="service-detail__more-img"
                loading="lazy"
              />
              <div class="service-detail__more-scrim" aria-hidden="true"></div>
              <div class="service-detail__more-info">
                <span class="service-detail__more-cat">{{ other.category }}</span>
                <strong class="font-display service-detail__more-title">{{ other.title }}</strong>
              </div>
            </RouterLink>
          </div>
        </div>
      </section>
    </template>

    <!-- Estado 404 -->
    <section v-else class="container-editorial py-24 service-detail__not-found">
      <h1 class="font-display service-detail__title">
        Servicio no encontrado
      </h1>
      <p class="service-detail__lead">
        El servicio solicitado no existe o ha sido modificado.
      </p>
      <div>
        <BaseButton variant="primary" to="/test#servicios">
          Volver a Servicios
        </BaseButton>
      </div>
    </section>
  </div>
</template>

<style scoped>
.service-detail {
  background-color: var(--brand-dark);
  color: var(--brand-bone);
}

.service-detail__hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: stretch;
  overflow: hidden;
}

.service-detail__hero-backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.service-detail__hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.92) contrast(1.05);
}

.service-detail__hero-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(20, 22, 21, 0.6) 0%,
    rgba(20, 22, 21, 0.5) 45%,
    rgba(20, 22, 21, 0.98) 100%
  );
}

.service-detail__hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: calc(var(--navbar-height) + var(--space-8));
  padding-bottom: var(--space-12);
  gap: var(--space-8);
}

.service-detail__nav-bar {
  display: flex;
  align-items: center;
}

.service-detail__back-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--touch-target-min);
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--brand-bone);
  background-color: rgba(20, 22, 21, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border-dark-strong);
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition:
    background-color var(--duration-fast) var(--ease-editorial),
    border-color var(--duration-fast) var(--ease-editorial),
    transform var(--duration-fast) var(--ease-editorial);
}

.service-detail__back-btn:hover {
  background-color: var(--brand-pine);
  border-color: var(--brand-sage);
  transform: translateX(-3px);
}

.service-detail__hero-main {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  max-width: 820px;
  margin-top: auto;
}

.service-detail__category {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--brand-ochre);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.service-detail__title {
  font-size: clamp(2.5rem, 5vw, 4.25rem);
  font-weight: 700;
  color: var(--brand-bone);
  letter-spacing: -0.025em;
  line-height: 1.1;
}

.service-detail__lead {
  font-size: clamp(1.125rem, 1.8vw, 1.3rem);
  line-height: 1.6;
  color: rgba(var(--brand-beige-rgb), 0.92);
  max-width: 58ch;
}

.service-detail__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  padding-top: var(--space-3);
}

/* Metodología & Etapas */
.service-detail__narrative {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  max-width: 780px;
  margin-bottom: var(--space-12);
}

.service-detail__paragraph {
  font-size: 1.0625rem;
  line-height: 1.75;
  color: rgba(var(--brand-beige-rgb), 0.88);
}

.service-detail__stages-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  width: 100%;
}

@media (min-width: 768px) {
  .service-detail__stages-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.stage-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-8);
  background-color: var(--brand-graphite);
  border: 1px solid var(--border-dark-subtle);
  border-radius: var(--radius-xl);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  transition:
    transform var(--duration-base) var(--ease-editorial),
    border-color var(--duration-base) var(--ease-editorial);
}

.stage-card:hover {
  transform: translateY(-4px);
  border-color: rgba(var(--brand-sage-rgb), 0.4);
}

.stage-card__number {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--brand-ochre);
  line-height: 1;
}

.stage-card__title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--brand-bone);
}

.stage-card__desc {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: rgba(var(--brand-beige-rgb), 0.82);
}

/* Ficha Técnica */
.service-detail__specs-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  margin-bottom: var(--space-12);
  width: 100%;
}

@media (min-width: 768px) {
  .service-detail__specs-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.spec-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  padding: var(--space-8);
  background-color: var(--brand-dark);
  border: 1px solid var(--border-dark-subtle);
  border-radius: var(--radius-xl);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.spec-card__heading {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--brand-bone);
}

.spec-card__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.spec-card__item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: 0.96875rem;
  line-height: 1.5;
  color: rgba(var(--brand-bone-rgb), 0.88);
}

.spec-card__bullet {
  font-size: 1rem;
  font-weight: 700;
  color: var(--brand-terracotta);
  line-height: 1.4;
  flex-shrink: 0;
}

.spec-card__bullet--pine {
  color: var(--brand-sage);
}

.service-detail__cta-banner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-6);
  padding: clamp(2rem, 4vw, 3rem);
  background: linear-gradient(
    135deg,
    rgba(var(--brand-pine-rgb), 0.85) 0%,
    rgba(20, 22, 21, 0.95) 100%
  );
  border: 1px solid rgba(var(--brand-sage-rgb), 0.35);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-soft);
}

@media (min-width: 800px) {
  .service-detail__cta-banner {
    flex-direction: row;
    align-items: center;
  }
}

.service-detail__cta-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--brand-bone);
  margin-bottom: var(--space-2);
}

.service-detail__cta-subtitle {
  font-size: 0.96875rem;
  color: rgba(var(--brand-beige-rgb), 0.88);
  max-width: 52ch;
}

/* Obras Relacionadas */
.service-detail__videos-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  width: 100%;
}

@media (min-width: 768px) {
  .service-detail__videos-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Otros Servicios */
.service-detail__more-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.service-detail__more-heading {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--brand-bone);
}

.service-detail__more-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  width: 100%;
}

@media (min-width: 768px) {
  .service-detail__more-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.service-detail__more-card {
  position: relative;
  aspect-ratio: 16 / 10;
  display: flex;
  align-items: flex-end;
  padding: var(--space-6);
  background-color: var(--brand-graphite);
  border: 1px solid var(--border-dark-subtle);
  border-radius: var(--radius-lg);
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  transition:
    border-color var(--duration-fast) var(--ease-editorial),
    transform var(--duration-fast) var(--ease-editorial);
}

.service-detail__more-card:hover {
  border-color: var(--brand-sage);
  transform: translateY(-3px);
}

.service-detail__more-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-editorial);
}

.service-detail__more-card:hover .service-detail__more-img {
  transform: scale(1.06);
}

.service-detail__more-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(20, 22, 21, 0.1) 0%,
    rgba(20, 22, 21, 0.88) 100%
  );
}

.service-detail__more-info {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.service-detail__more-cat {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--brand-ochre);
}

.service-detail__more-title {
  font-size: 1.25rem;
  color: var(--brand-bone);
}

.service-detail__not-found {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  padding-top: calc(var(--navbar-height) + var(--space-16));
}
</style>
