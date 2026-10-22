<script setup>
/**
 * BaseBadge — Etiqueta técnica atómica para sellos (ochre), códigos de índice y categorías.
 * Sigue la escala matemática 4px/8px y fuente monoespaciada JetBrains Mono.
 */
defineProps({
  variant: {
    type: String,
    default: 'ochre', // 'ochre' | 'sage' | 'pine' | 'neutral-dark' | 'neutral-light'
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
  padding: var(--space-1) var(--space-3);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
  border-radius: 2px;
  border: 1px solid transparent;
}

/* Sello / Año / Rol Técnico (Ocre Moderno #C1A875) */
.base-badge--ochre {
  background-color: rgba(var(--brand-ochre-rgb), 0.14);
  color: var(--brand-ochre);
  border-color: rgba(var(--brand-ochre-rgb), 0.38);
}

/* Indicador Activo / Salvia (#6F8F7A) */
.base-badge--sage {
  background-color: rgba(var(--brand-sage-rgb), 0.16);
  color: var(--brand-sage);
  border-color: rgba(var(--brand-sage-rgb), 0.4);
}

/* Marca Pino Urbano (#355A4C) — alto contraste sobre fondos claros */
.base-badge--pine {
  background-color: var(--brand-pine);
  color: var(--brand-bone);
  border-color: var(--brand-pine);
}

/* Neutro para Secciones Dark */
.base-badge--neutral-dark {
  background-color: rgba(var(--brand-bone-rgb), 0.06);
  color: var(--brand-beige);
  border-color: var(--border-dark-subtle);
}

/* Neutro para Secciones Claras */
.base-badge--neutral-light {
  background-color: rgba(var(--brand-graphite-rgb), 0.06);
  color: var(--brand-graphite);
  border-color: var(--border-light-subtle);
}
</style>
