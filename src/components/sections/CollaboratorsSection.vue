<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import isotipoVerdeUrl from '@/assets/brand/FunkyRoots/ISOTIPO/FunkyRoots PNG.png'

/**
 * CollaboratorsSection — Tema Marca/Claro (#355A4C Verde Pino Urbano y #E6E0D8 Beige Suave).
 * - Presenta a los colaboradores reales de FunkyRoots Estudios (Calde, Fabián Rocco, 10BAG & Maskao, Nicolás Burgos Pérez).
 * - Incluye el Isotipo oficial en Verde Pino Urbano sobre las tarjetas claras.
 */
defineProps({
  collaborators: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section
    id="colaboradores"
    class="collaborators-section theme-beige py-24"
    aria-label="Red de colaboradores y aliados creativos"
  >
    <div class="container-editorial">
      <!-- Bloque Destacado en Verde Pino Urbano (#355A4C) -->
      <div class="collaborators-section__pine-banner p-8">
        <SectionHeader
          index="04 // COLABORADORES"
          title="Instrumentistas, MCs Invitados & Arte Visual"
          subtitle="Músicos, intérpretes y creativos que participan activamente en las producciones, singles y dirección gráfica de FunkyRoots Estudios."
          theme="pine"
        >
          <template #actions>
            <BaseButton
              variant="primary"
              href="https://www.instagram.com/funkyroots.cl"
              target="_blank"
            >
              CONECTAR EN INSTAGRAM ↗
            </BaseButton>
          </template>
        </SectionHeader>

        <!-- Grilla de Colaboradores sobre Superficie Clara (#F5F5F0) -->
        <div class="collaborators-section__grid gap-6">
          <article
            v-for="person in collaborators"
            :key="person.id"
            class="collaborator-card p-6"
          >
            <div class="collaborator-card__top">
              <div class="collaborator-card__code-wrap">
                <img
                  :src="isotipoVerdeUrl"
                  alt=""
                  class="collaborator-card__isotipo"
                />
                <span class="font-mono collaborator-card__code">{{ person.code }}</span>
              </div>
              <BaseBadge variant="neutral-light">{{ person.location }}</BaseBadge>
            </div>

            <h3 class="font-display collaborator-card__name">
              {{ person.name }}
            </h3>

            <p class="font-mono collaborator-card__role">
              {{ person.role }}
            </p>

            <p class="collaborator-card__bio">
              {{ person.bio }}
            </p>

            <div class="collaborator-card__footer font-mono">
              <span>APORTE // {{ person.specialty }}</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.collaborators-section {
  background-color: var(--brand-beige);
  color: var(--brand-graphite);
  border-bottom: 1px solid var(--border-light-subtle);
}

.collaborators-section__pine-banner {
  background-color: var(--brand-pine);
  color: var(--brand-bone);
  border: 1px solid var(--border-light-strong);
  border-radius: 2px;
}

.collaborators-section__grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .collaborators-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.collaborator-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-4);
  background-color: var(--brand-bone);
  color: var(--brand-graphite);
  border: 1px solid var(--border-light-subtle);
  border-radius: 2px;
  transition:
    transform var(--duration-base) var(--ease-editorial),
    border-color var(--duration-base) var(--ease-editorial);
}

.collaborator-card:hover {
  transform: translateY(-2px);
  border-color: var(--brand-ochre);
}

.collaborator-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--border-light-subtle);
}

.collaborator-card__code-wrap {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.collaborator-card__isotipo {
  height: 20px;
  width: auto;
  object-fit: contain;
}

.collaborator-card__code {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--brand-pine);
}

.collaborator-card__name {
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--brand-graphite);
}

.collaborator-card__role {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--brand-terracotta);
  text-transform: uppercase;
}

.collaborator-card__bio {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: rgba(var(--brand-graphite-rgb), 0.86);
}

.collaborator-card__footer {
  padding-top: var(--space-3);
  border-top: 1px solid var(--border-light-subtle);
  font-size: 0.75rem;
  color: var(--brand-pine);
}
</style>
