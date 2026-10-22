<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

/**
 * BaseButton — Botón atómico accesible (UI UX Pro Max).
 * Variantes:
 *  - 'primary' (Terracota Profundo #B8573C)
 *  - 'secondary' (Verde Pino Urbano #355A4C)
 *  - 'ghost' (Borde técnico sutil adaptable a modo claro/oscuro)
 * Cumple área mínima de toque 44x44px, estados :hover, :focus-visible (ring-2) y :active.
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
  gap: var(--space-3);
  min-height: var(--touch-target-min);
  min-width: var(--touch-target-min);
  padding: var(--space-3) var(--space-6);
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 2px;
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  transition:
    background-color var(--duration-base) var(--ease-editorial),
    border-color var(--duration-base) var(--ease-editorial),
    color var(--duration-base) var(--ease-editorial),
    transform var(--duration-fast) var(--ease-editorial);
}

/* Primary: Terracota Profundo (#B8573C) con texto Blanco Hueso (#F5F5F0) */
.base-button--primary {
  background-color: var(--brand-terracotta);
  color: var(--brand-bone);
  border-color: var(--brand-terracotta);
}

.base-button--primary:hover {
  background-color: #9e452c;
  border-color: var(--brand-ochre);
  transform: translateY(-1px);
}

.base-button--primary:active {
  transform: translateY(1px);
  background-color: #8c3b24;
}

/* Secondary: Verde Pino Urbano (#355A4C) */
.base-button--secondary {
  background-color: var(--brand-pine);
  color: var(--brand-bone);
  border-color: var(--brand-sage);
}

.base-button--secondary:hover {
  background-color: #29473c;
  border-color: var(--brand-bone);
  transform: translateY(-1px);
}

.base-button--secondary:active {
  transform: translateY(1px);
}

/* Ghost para fondos oscuros */
.base-button--ghost {
  background-color: rgba(var(--brand-bone-rgb), 0.03);
  color: var(--brand-bone);
  border-color: var(--border-dark-strong);
}

.base-button--ghost:hover {
  background-color: rgba(var(--brand-sage-rgb), 0.16);
  border-color: var(--brand-sage);
  color: var(--brand-bone);
  transform: translateY(-1px);
}

.base-button--ghost:active {
  transform: translateY(1px);
}

/* Ghost para fondos claros */
.base-button--ghost-light {
  background-color: transparent;
  color: var(--brand-graphite);
  border-color: var(--border-light-strong);
}

.base-button--ghost-light:hover {
  background-color: var(--brand-pine);
  border-color: var(--brand-pine);
  color: var(--brand-bone);
  transform: translateY(-1px);
}

.base-button--ghost-light:active {
  transform: translateY(1px);
}

/* Ring-2 accesible en foco por teclado */
.base-button:focus-visible {
  outline: 2px solid var(--brand-ochre);
  outline-offset: 3px;
  box-shadow: 0 0 0 2px var(--brand-dark);
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
