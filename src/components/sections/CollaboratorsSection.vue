<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import isotipoVerdeUrl from '@/assets/brand/FunkyRoots/ISOTIPO/FunkyRoots PNG.webp'

/**
 * CollaboratorsSection — Red creativa en formato orgánico redondeado,
 * usando el Isotipo oficial en WebP y sin numeraciones ni chips innecesarios.
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
    aria-label="Comunidad y colaboradores"
  >
    <div class="container-editorial">
      <div class="collaborators-section__pine-banner">
        <SectionHeader
          eyebrow="Red Creativa"
          title="Músicos, MCs & Arte Visual"
          theme="pine"
        >
          <template #actions>
            <BaseButton
              variant="primary"
              href="https://www.instagram.com/funkyroots.cl"
              target="_blank"
            >
              Instagram ↗
            </BaseButton>
          </template>
        </SectionHeader>

        <div class="collaborators-section__grid gap-6">
          <article
            v-for="person in collaborators"
            :key="person.id"
            class="collaborator-card"
          >
            <div class="collaborator-card__header">
              <img
                :src="isotipoVerdeUrl"
                alt=""
                class="collaborator-card__isotipo"
                loading="lazy"
              />
              <div>
                <h3 class="font-display collaborator-card__name">
                  {{ person.name }}
                </h3>
                <p class="collaborator-card__role">
                  {{ person.role }}
                </p>
              </div>
            </div>

            <p class="collaborator-card__bio">
              {{ person.bio }}
            </p>
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
}

.collaborators-section__pine-banner {
  padding: clamp(2rem, 4vw, 3.5rem);
  background-color: var(--brand-pine);
  color: var(--brand-bone);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-soft);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.collaborators-section__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  width: 100%;
}

@media (min-width: 768px) {
  .collaborators-section__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.collaborator-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-6);
  background-color: var(--brand-bone);
  color: var(--brand-graphite);
  border-radius: var(--radius-lg);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  transition: transform var(--duration-base) var(--ease-editorial);
}

.collaborator-card:hover {
  transform: translateY(-3px);
}

.collaborator-card__header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.collaborator-card__isotipo {
  height: 28px;
  width: auto;
  object-fit: contain;
  flex-shrink: 0;
}

.collaborator-card__name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--brand-graphite);
}

.collaborator-card__role {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--brand-terracotta);
}

.collaborator-card__bio {
  font-size: 0.9375rem;
  line-height: 1.55;
  color: rgba(var(--brand-graphite-rgb), 0.84);
}
</style>
