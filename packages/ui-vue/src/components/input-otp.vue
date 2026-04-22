<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '../lib/utils'

const props = defineProps<{ maxLength?: number; class?: string }>()
const emit = defineEmits<{ (e: 'update:modelValue', v: string): void }>()
const modelValue = defineModel<string>({ default: '' })
const maxLen = computed(() => props.maxLength ?? 6)

function onInput(e: Event) {
  const val = (e.target as HTMLInputElement).value.replace(/\D/g, '').slice(0, maxLen.value)
  modelValue.value = val
}

function onPaste(e: ClipboardEvent) {
  e.preventDefault()
  const pasted = e.clipboardData?.getData('text')?.replace(/\D/g, '').slice(0, maxLen.value) ?? ''
  modelValue.value = pasted
}
</script>
<template>
  <div :class="cn('flex items-center gap-2', props.class)" aria-label="One-time password" @paste="onPaste">
    <input
      type="text"
      inputmode="numeric"
      autocomplete="one-time-code"
      :maxlength="maxLen"
      :value="modelValue"
      @input="onInput"
      class="sr-only"
    />
    <div class="flex items-center">
      <div
        v-for="i in maxLen"
        :key="i"
        :class="cn(
          'relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
        )"
      >
        {{ modelValue[i - 1] ?? '' }}
        <div v-if="!modelValue[i - 1]" class="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div class="h-4 w-px bg-foreground opacity-50" />
        </div>
      </div>
    </div>
  </div>
</template>
