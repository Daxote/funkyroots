<script setup>
/**
 * SectionHeader — Cabecera estandarizada de sección (UI UX Pro Max).
 * Compuesta por:
 *  1. Índice técnico monoespaciado (ej: `01 // SERVICIOS`)
 *  2. Título display en Poppins / Area Variable
 *  3. Subtítulo editorial en Inter
 */
defineProps({
  index: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  theme: {
    type: String,
    default: 'dark', // 'dark' | 'light' | 'pine'
    validator: (val) => ['dark', 'light', 'pine'].includes(val)
  }
})
</script>

<template>
  <header class="section-header" :class="`section-header--${theme}`">
    <div class="section-header__meta">
      <span class="section-header__indicator" aria-hidden="true"></span>
      <span class="technical-index section-header__index">{{ index }}</span>
    </div>

    <div class="section-header__main">
      <h2 class="font-display section-header__title">
        {{ title }}
      </h2>
      <p v-if="subtitle" class="section-header__subtitle">
        {{ subtitle }}
      </p>
    </div>

    <div v-if="$slots.actions" class="section-header__actions">
      <slot name="actions" />
    </div>
  </header>
</template>

<style scoped>
.section-header {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  padding-bottom: var(--space-8);
  margin-bottom: var(--space-12);
  border-bottom: 1px solid var(--border-dark-subtle);
}

.section-header--light {
  border-bottom-color: var(--border-light-subtle);
}

.section-header--pine {
  border-bottom-color: rgba(var(--brand-bone-rgb), 0.18);
}

@media (min-width: 960px) {
  .section-header {
    grid-template-columns: 220px 1fr auto;
    align-items: end;
    gap: var(--space-8);
  }
}

.section-header__meta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  align-self: start;
  padding-top: var(--space-2);
}

.section-header__indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--brand-terracotta);
}

.section-header--light .section-header__indicator {
  background-color: var(--brand-pine);
}

.section-header--pine .section-header__indicator {
  background-color: var(--brand-ochre);
}

.section-header__index {
  color: var(--brand-ochre);
}

.section-header--light .section-header__index {
  color: var(--brand-pine);
}

.section-header--pine .section-header__index {
  color: var(--brand-ochre);
}

.section-header__main {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  max-width: 720px;
}

.section-header__title {
  font-size: clamp(1.875rem, 3.5vw, 2.75rem);
  font-weight: 600;
  color: var(--brand-bone);
}

.section-header--light .section-header__title {
  color: var(--brand-graphite);
}

.section-header__subtitle {
  font-size: 1.0625rem;
  line-height: 1.65;
  color: var(--brand-beige);
}

.section-header--light .section-header__subtitle {
  color: rgba(var(--brand-graphite-rgb), 0.84);
}

.section-header--pine .section-header__subtitle {
  color: var(--brand-beige);
}

.section-header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}
</style>
