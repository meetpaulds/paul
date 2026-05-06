<script setup lang="ts">
/**
 * Honeypot Field — invisible bot-trap as CAPTCHA-free spam prevention.
 *
 * WCAG 3.3.8 / EAA Art. 4 compliant:
 * - No cognitive challenge presented to users.
 * - `aria-hidden` removes it from the accessibility tree.
 * - `tabindex="-1"` prevents keyboard focus.
 *
 * Server side: reject any submission where this field is non-empty.
 */
const props = defineProps<{ name?: string }>()
defineOptions({ name: 'HoneypotField' })
</script>

<template>
  <div
    aria-hidden="true"
    style="position:absolute;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none"
  >
    <label :for="'hp-' + (props.name ?? 'website')">Leave this field empty</label>
    <input
      :id="'hp-' + (props.name ?? 'website')"
      type="text"
      :name="props.name ?? 'website'"
      tabindex="-1"
      autocomplete="off"
      value=""
    />
  </div>
</template>
