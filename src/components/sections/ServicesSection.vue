<script setup>
import { RouterLink } from 'vue-router'
import SectionHeader from '@/components/ui/SectionHeader.vue'

/**
 * ServicesSection — Tarjetas visuales interactivas para cada servicio,
 * con navegación a su vista dedicada para conocer especificaciones, etapas y entregables.
 */
defineProps({
  services: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section id="servicios" class="services-section theme-light py-24" aria-label="Servicios del estudio">
    <div class="container-editorial">
      <SectionHeader
        eyebrow="Servicios"
        title="Producción &amp; Servicios de Estudio"
        subtitle="Acompañamos cada etapa fonográfica y visual: desde la idea rítmica en el sampler hasta el master final y la dirección de arte."
        theme="light"
      />

      <div class="services-section__grid gap-8">
        <article
          v-for="service in services"
          :key="service.id"
          class="service-card"
        >
          <RouterLink
            :to="`/test/servicios/${service.slug}`"
            class="service-card__link"
            :aria-label="`Explorar especificaciones de ${service.title}`"
          >
            <div class="service-card__media">
              <img
                :src="service.image"
                :alt="service.title"
                class="service-card__image"
                loading="lazy"
                decoding="async"
              />
              <div class="service-card__media-scrim" aria-hidden="true"></div>
              <span class="service-card__category">{{ service.category }}</span>
            </div>

            <div class="service-card__body">
              <h3 class="font-display service-card__title">
                {{ service.title }}
              </h3>

              <p class="service-card__description">
                {{ service.description }}
              </p>

              <div class="service-card__footer">
                <span class="service-card__cta">
                  <span>Ver detalles del servicio</span>
                  <span class="service-card__arrow" aria-hidden="true">→</span>
                </span>
              </div>
            </div>
          </RouterLink>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  background-color: var(--brand-bone);
  color: var(--brand-graphite);
}

.services-section__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  width: 100%;
}

@media (min-width: 768px) {
  .services-section__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.service-card {
  display: flex;
  flex-direction: column;
  background-color: var(--brand-beige);
  border: 1px solid var(--border-light-subtle);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-light);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  transition:
    transform var(--duration-base) var(--ease-editorial),
    border-color var(--duration-base) var(--ease-editorial),
    box-shadow var(--duration-base) var(--ease-editorial);
}

.service-card:hover {
  border-color: rgba(var(--brand-pine-rgb), 0.45);
  transform: translateY(-4px);
  box-shadow: var(--shadow-soft);
}

.service-card__link {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.service-card__media {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background-color: var(--brand-dark);
}

.service-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-editorial);
}

.service-card:hover .service-card__image {
  transform: scale(1.05);
}

.service-card__media-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(20, 22, 21, 0.05) 0%,
    rgba(20, 22, 21, 0.65) 100%
  );
}

.service-card__category {
  position: absolute;
  left: var(--space-6);
  bottom: var(--space-4);
  z-index: 2;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--brand-ochre);
  letter-spacing: 0.04em;
}

.service-card__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: var(--space-3);
  padding: var(--space-6) var(--space-8) var(--space-8);
}

.service-card__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--brand-graphite);
}

.service-card__description {
  font-size: 0.96875rem;
  line-height: 1.6;
  color: rgba(var(--brand-graphite-rgb), 0.82);
  flex: 1;
}

.service-card__footer {
  padding-top: var(--space-4);
}

.service-card__cta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: 40px;
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--brand-bone);
  background-color: var(--brand-pine);
  border-radius: var(--radius-pill);
  transition:
    background-color var(--duration-fast) var(--ease-editorial),
    transform var(--duration-fast) var(--ease-editorial);
}

.service-card:hover .service-card__cta {
  background-color: var(--brand-terracotta);
}

.service-card__arrow {
  transition: transform var(--duration-fast) var(--ease-editorial);
}

.service-card:hover .service-card__arrow {
  transform: translateX(3px);
}
</style>
