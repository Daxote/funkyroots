<script setup>
/**
 * SectionHeader — Cabecera limpia y orgánica, sin numeraciones (01, 02, 03) ni textos redundantes.
 */
defineProps({
  eyebrow: {
    type: String,
    default: ''
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
    default: 'dark',
    validator: (val) => ['dark', 'light', 'pine'].includes(val)
  }
})
</script>

<template>
  <header class="section-header" :class="`section-header--${theme}`">
    <div class="section-header__main">
      <span v-if="eyebrow" class="section-header__eyebrow">
        {{ eyebrow }}
      </span>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-6);
  margin-bottom: var(--space-12);
}

@media (min-width: 900px) {
  .section-header {
    flex-direction: row;
    align-items: flex-end;
    gap: var(--space-8);
  }
}

.section-header__main {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 680px;
}

.section-header__eyebrow {
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--brand-ochre);
}

.section-header--light .section-header__eyebrow {
  color: var(--brand-pine);
}

.section-header--pine .section-header__eyebrow {
  color: var(--brand-ochre);
}

.section-header__title {
  font-size: clamp(2rem, 3.8vw, 3rem);
  font-weight: 700;
  color: var(--brand-bone);
  letter-spacing: -0.025em;
  line-height: 1.1;
}

.section-header--light .section-header__title {
  color: var(--brand-graphite);
}

.section-header__subtitle {
  font-size: 1.0625rem;
  line-height: 1.6;
  color: rgba(var(--brand-beige-rgb), 0.85);
  max-width: 56ch;
}

.section-header--light .section-header__subtitle {
  color: rgba(var(--brand-graphite-rgb), 0.78);
}

.section-header--pine .section-header__subtitle {
  color: rgba(var(--brand-beige-rgb), 0.9);
}

.section-header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-shrink: 0;
}
</style>
