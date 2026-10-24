<script setup>
defineProps({
  variant: {
    type: String,
    default: 'ochre',
    validator: (val) =>
      ['ochre', 'sage', 'pine', 'neutral-dark', 'neutral-light'].includes(val)
  }
})
</script>

<template>
  <span class="base-badge" :class="`base-badge--${variant}`">
    <slot />
  </span>
</template>

<style scoped>
.base-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0.3rem 0.85rem;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.03em;
  white-space: nowrap;
  border-radius: var(--radius-pill);
}

.base-badge--ochre {
  background-color: rgba(var(--brand-ochre-rgb), 0.15);
  color: var(--brand-ochre);
}

.base-badge--sage {
  background-color: rgba(var(--brand-sage-rgb), 0.18);
  color: var(--brand-sage);
}

.base-badge--pine {
  background-color: var(--brand-pine);
  color: var(--brand-bone);
}

.base-badge--neutral-dark {
  background-color: rgba(var(--brand-bone-rgb), 0.08);
  color: var(--brand-beige);
}

.base-badge--neutral-light {
  background-color: rgba(var(--brand-graphite-rgb), 0.08);
  color: var(--brand-graphite);
}
</style>
