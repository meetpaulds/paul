<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '../lib/utils'

/**
 * Magic Link — password-free email authentication pattern.
 *
 * WCAG 3.3.8 / EAA Art. 4 compliant:
 * - No cognitive test (CAPTCHA-free).
 * - `aria-live="polite"` announces status changes to screen readers.
 * - `autocomplete="email"` enables autofill.
 */
const props = defineProps<{
  status?: 'idle' | 'sending' | 'sent' | 'error'
  statusMessage?: string
  class?: string
}>()
const emit = defineEmits<{ (e: 'submit', email: string): void }>()

const email = ref('')
const isBusy = computed(() => props.status === 'sending')

const statusMessages: Record<string, string> = {
  idle: '',
  sending: 'Sending magic link…',
  sent: 'Magic link sent! Check your inbox.',
  error: 'Something went wrong. Please try again.',
}

const message = computed(() => props.statusMessage ?? statusMessages[props.status ?? 'idle'] ?? '')

function handleSubmit(e: Event) {
  e.preventDefault()
  if (isBusy.value || !email.value) return
  emit('submit', email.value)
}
defineOptions({ name: 'MagicLink' })
</script>

<template>
  <form
    :class="cn('flex flex-col gap-3', props.class)"
    novalidate
    @submit="handleSubmit"
  >
    <div class="flex flex-col gap-1.5">
      <label for="magic-link-email" class="text-sm font-medium leading-none">
        Email address
      </label>
      <input
        id="magic-link-email"
        type="email"
        autocomplete="email"
        required
        :disabled="isBusy"
        v-model="email"
        placeholder="you@example.com"
        aria-describedby="magic-link-status"
        class="flex h-11 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
    <button
      type="submit"
      :disabled="isBusy || !email"
      class="inline-flex h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    >
      {{ isBusy ? 'Sending…' : 'Send magic link' }}
    </button>
    <div
      id="magic-link-status"
      role="status"
      aria-live="polite"
      aria-atomic="true"
      :class="cn(
        'text-sm',
        status === 'sent' ? 'text-green-600 dark:text-green-400' : '',
        status === 'error' ? 'text-destructive' : '',
        !message ? 'sr-only' : ''
      )"
    >
      {{ message }}
    </div>
  </form>
</template>
