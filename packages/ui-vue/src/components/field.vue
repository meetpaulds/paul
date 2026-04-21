<script setup lang="ts">
import { useId } from 'vue'
import { cn } from '@/lib/utils'
/**
 * Field — form field wrapper that wires a label, hint, and error message to its input child.
 *
 * Passes the generated `id` to the default slot so the input can be associated with the label.
 *
 * @example
 * ```vue
 * <Field label="Email" hint="We'll never share your email." :error="errors.email" required>
 *   <template #default="{ id }">
 *     <Input :id="id" v-model="email" type="email" />
 *   </template>
 * </Field>
 * ```
 *
 * @accessibility The label is programmatically linked to the input via matching `for`/`id`.
 * Error messages use `text-destructive-text` and should also be linked via `aria-describedby`.
 */
defineOptions({ name: 'Field' })
const props = defineProps<{ label?: string; error?: string; hint?: string; required?: boolean; class?: string }>()
const id = useId()
</script>
<template>
  <div :class="cn('space-y-2', props.class)">
    <label v-if="props.label" :for="id" class="text-sm font-medium leading-none">{{ props.label }}<span v-if="props.required" class="text-destructive-text ml-1">*</span></label>
    <slot :id="id" />
    <p v-if="props.error" class="text-[0.8rem] font-medium text-destructive-text">{{ props.error }}</p>
    <p v-else-if="props.hint" class="text-[0.8rem] text-muted-foreground">{{ props.hint }}</p>
  </div>
</template>