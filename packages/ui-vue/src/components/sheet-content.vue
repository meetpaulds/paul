<script setup lang="ts">
import { inject, Ref } from 'vue'
import { cn } from '../lib/utils'

const props = defineProps<{ side?: 'top' | 'bottom' | 'left' | 'right'; class?: string }>()
const open = inject<Ref<boolean>>('sheet-open')!
const close = inject<() => void>('sheet-close')!

const sideClasses: Record<string, string> = {
  top: 'inset-x-0 top-0 border-b',
  bottom: 'inset-x-0 bottom-0 border-t',
  left: 'inset-y-0 start-0 h-full w-3/4 border-e sm:max-w-sm',
  right: 'inset-y-0 end-0 h-full w-3/4 border-s sm:max-w-sm',
}
</script>

<template>
  <Teleport to="body">
    <Transition name="sheet-fade">
      <div v-if="open" class="fixed inset-0 z-50 bg-black/80" @click="close" />
    </Transition>
    <Transition :name="`sheet-slide-${props.side ?? 'right'}`">
      <div
        v-if="open"
        role="dialog"
        :class="cn('fixed z-50 gap-4 bg-background p-6 shadow-lg print:shadow-none print:rounded-none print:border-black print:text-black', sideClasses[props.side ?? 'right'], props.class)"
      >
        <button
          class="absolute end-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          @click="close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          <span class="sr-only">Close</span>
        </button>
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.sheet-fade-enter-active, .sheet-fade-leave-active { transition: opacity 0.2s; }
.sheet-fade-enter-from, .sheet-fade-leave-to { opacity: 0; }
.sheet-slide-right-enter-active, .sheet-slide-right-leave-active { transition: transform 0.3s ease; }
.sheet-slide-right-enter-from, .sheet-slide-right-leave-to { transform: translateX(100%); }
.sheet-slide-left-enter-active, .sheet-slide-left-leave-active { transition: transform 0.3s ease; }
.sheet-slide-left-enter-from, .sheet-slide-left-leave-to { transform: translateX(-100%); }
.sheet-slide-top-enter-active, .sheet-slide-top-leave-active { transition: transform 0.3s ease; }
.sheet-slide-top-enter-from, .sheet-slide-top-leave-to { transform: translateY(-100%); }
.sheet-slide-bottom-enter-active, .sheet-slide-bottom-leave-active { transition: transform 0.3s ease; }
.sheet-slide-bottom-enter-from, .sheet-slide-bottom-leave-to { transform: translateY(100%); }
</style>
