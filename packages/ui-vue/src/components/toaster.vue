<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '../lib/utils'

const props = defineProps<{ class?: string }>()

interface ToastItem { id: number; message: string; type?: 'default' | 'success' | 'error' }
const toasts = ref<ToastItem[]>([])
let nextId = 0

function show(message: string, type: ToastItem['type'] = 'default') {
  const id = nextId++
  toasts.value.push({ id, message, type })
  setTimeout(() => { toasts.value = toasts.value.filter(t => t.id !== id) }, 4000)
}

defineExpose({ show })
</script>

<template>
  <div :class="cn('fixed bottom-4 end-4 z-[100] flex flex-col gap-2 w-80', props.class)">
    <TransitionGroup name="toast">
      <div
        v-for="t in toasts"
        :key="t.id"
        :class="cn(
          'rounded-md border p-4 shadow-lg text-sm',
          t.type === 'error' ? 'bg-destructive text-destructive-foreground border-destructive' : 'bg-background text-foreground border-border'
        )"
      >
        {{ t.message }}
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.toast-enter-active, .toast-leave-active { transition: all 0.2s ease; }
.toast-enter-from { opacity: 0; transform: translateY(8px); }
.toast-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
