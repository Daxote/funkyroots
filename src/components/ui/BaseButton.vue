<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

/**
 * BaseButton — Botón orgánico redondeado y accesible.
 */
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (val) => ['primary', 'secondary', 'ghost', 'ghost-light'].includes(val)
  },
  to: {
    type: [String, Object],
    default: null
  },
  href: {
    type: String,
    default: null
  },
  target: {
    type: String,
    default: null
  },
  rel: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'button'
  },
  ariaLabel: {
    type: String,
    default: null
  }
})

const componentTag = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})

const computedRel = computed(() => {
  if (props.rel) return props.rel
  if (props.target === '_blank') return 'noopener noreferrer'
  return undefined
})
</script>

<template>
  <component
    :is="componentTag"
    :to="to || undefined"
    :href="href || undefined"
    :target="target || undefined"
    :rel="computedRel"
    :type="!to && !href ? type : undefined"
    :aria-label="ariaLabel || undefined"
    class="base-button"
    :class="`base-button--${variant}`"
  >
    <span class="base-button__content">
      <slot />
    </span>
    <span v-if="$slots.icon" class="base-button__icon" aria-hidden="true">
      <slot name="icon" />
    </span>
  </component>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  min-height: var(--touch-target-min);
  min-width: var(--touch-target-min);
  padding: 0.75rem 1.5rem;
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  border-radius: var(--radius-pill);
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  transition:
    background-color var(--duration-base) var(--ease-editorial),
    border-color var(--duration-base) var(--ease-editorial),
    color var(--duration-base) var(--ease-editorial),
    transform var(--duration-fast) var(--ease-editorial),
    box-shadow var(--duration-base) var(--ease-editorial);
}

.base-button--primary {
  background-color: var(--brand-terracotta);
  color: var(--brand-bone);
  border-color: var(--brand-terracotta);
  box-shadow: 0 8px 24px -6px rgba(var(--brand-terracotta-rgb), 0.45);
}

.base-button--primary:hover {
  background-color: #a34930;
  border-color: #a34930;
  transform: translateY(-2px);
  box-shadow: 0 12px 28px -6px rgba(var(--brand-terracotta-rgb), 0.6);
}

.base-button--primary:active {
  transform: translateY(0);
}

.base-button--secondary {
  background-color: var(--brand-pine);
  color: var(--brand-bone);
  border-color: rgba(var(--brand-sage-rgb), 0.4);
}

.base-button--secondary:hover {
  background-color: #2c4c40;
  border-color: var(--brand-sage);
  transform: translateY(-2px);
}

.base-button--secondary:active {
  transform: translateY(0);
}

.base-button--ghost {
  background-color: rgba(var(--brand-bone-rgb), 0.06);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: var(--brand-bone);
  border-color: var(--border-dark-strong);
}

.base-button--ghost:hover {
  background-color: rgba(var(--brand-sage-rgb), 0.2);
  border-color: var(--brand-sage);
  color: var(--brand-bone);
  transform: translateY(-2px);
}

.base-button--ghost:active {
  transform: translateY(0);
}

.base-button--ghost-light {
  background-color: rgba(var(--brand-graphite-rgb), 0.05);
  color: var(--brand-graphite);
  border-color: var(--border-light-strong);
}

.base-button--ghost-light:hover {
  background-color: var(--brand-pine);
  border-color: var(--brand-pine);
  color: var(--brand-bone);
  transform: translateY(-2px);
}

.base-button:focus-visible {
  outline: 2px solid var(--brand-ochre);
  outline-offset: 3px;
}

.base-button__content {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.base-button__icon {
  display: inline-flex;
  align-items: center;
  transition: transform var(--duration-fast) var(--ease-editorial);
}

.base-button:hover .base-button__icon {
  transform: translateX(3px);
}
</style>
