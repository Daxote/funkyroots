<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

/**
 * ServicesSection — Tema Claro (#F5F5F0 Blanco Hueso).
 * - Superficies de tarjetas en Beige Suave (#E6E0D8).
 * - Texto primario en Gris Grafito (#2E2E2E).
 * - Bordes técnicos sutiles de 1px (`border-[#2E2E2E]/10`).
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
        index="01 // SERVICIOS"
        title="Arquitectura Sonora & Producción Integral"
        subtitle="Infraestructura híbrida diseñada para capturar la identidad orgánica de cada proyecto: desde la toma acústica en sala hasta el corte de master y la realización en vivo."
        theme="light"
      >
        <template #actions>
          <BaseButton
            variant="secondary"
            href="mailto:sesiones@funkyroots.cl?subject=Cotizaci%C3%B3n%20Servicios%20Funky%20Roots"
          >
            SOLICITAR FICHA TÉCNICA
          </BaseButton>
        </template>
      </SectionHeader>

      <div class="services-section__grid gap-8">
        <article
          v-for="service in services"
          :key="service.id"
          class="service-card p-8"
        >
          <div class="service-card__top">
            <span class="font-mono service-card__code">{{ service.code }}</span>
            <BaseBadge variant="pine">{{ service.category }}</BaseBadge>
          </div>

          <h3 class="font-display service-card__title">
            {{ service.title }}
          </h3>

          <p class="service-card__description">
            {{ service.description }}
          </p>

          <ul class="service-card__deliverables">
            <li
              v-for="item in service.deliverables"
              :key="item"
              class="service-card__deliverable-item"
            >
              <span class="font-mono service-card__bullet" aria-hidden="true">+</span>
              <span>{{ item }}</span>
            </li>
          </ul>

          <div class="service-card__footer">
            <span class="font-mono service-card__duration">
              MODALIDAD // {{ service.duration }}
            </span>
            <a
              :href="`mailto:sesiones@funkyroots.cl?subject=Consulta%20${encodeURIComponent(service.title)}`"
              class="service-card__cta font-mono"
              :aria-label="`Consultar disponibilidad para ${service.title}`"
            >
              <span>RESERVAR</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  background-color: var(--brand-bone);
  color: var(--brand-graphite);
  border-bottom: 1px solid var(--border-light-subtle);
}

.services-section__grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .services-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.service-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-6);
  background-color: var(--brand-beige);
  border: 1px solid var(--border-light-subtle);
  border-radius: 2px;
  transition:
    border-color var(--duration-base) var(--ease-editorial),
    transform var(--duration-base) var(--ease-editorial);
}

.service-card:hover {
  border-color: var(--brand-pine);
  transform: translateY(-2px);
}

.service-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--border-light-subtle);
}

.service-card__code {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--brand-pine);
}

.service-card__title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--brand-graphite);
}

.service-card__description {
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(var(--brand-graphite-rgb), 0.88);
}

.service-card__deliverables {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-4);
  background-color: var(--brand-bone);
  border: 1px solid var(--border-light-subtle);
}

.service-card__deliverable-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: 0.875rem;
  color: var(--brand-graphite);
}

.service-card__bullet {
  color: var(--brand-terracotta);
  font-weight: 600;
}

.service-card__footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding-top: var(--space-4);
  border-top: 1px solid var(--border-light-subtle);
}

.service-card__duration {
  font-size: 0.75rem;
  color: rgba(var(--brand-graphite-rgb), 0.78);
}

.service-card__cta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--touch-target-min);
  padding: var(--space-2) var(--space-4);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--brand-bone);
  background-color: var(--brand-pine);
  border: 1px solid var(--brand-pine);
  border-radius: 2px;
  transition:
    background-color var(--duration-fast) var(--ease-editorial),
    border-color var(--duration-fast) var(--ease-editorial);
}

.service-card__cta:hover {
  background-color: var(--brand-terracotta);
  border-color: var(--brand-terracotta);
}

.service-card__cta:active {
  transform: translateY(1px);
}
</style>
