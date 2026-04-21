<script setup lang="ts">
import { inject, Ref } from 'vue'
import { cn } from '../lib/utils'
const open = inject<Ref<boolean>>('alert-dialog-open')!
const props = defineProps<{ class?: string }>()
</script>
<template>
  <Teleport to="body">
    <Transition name="ad-fade">
      <div v-if="open" class="fixed inset-0 z-50 bg-black/80" />
    </Transition>
    <Transition name="ad-zoom">
      <div
        v-if="open"
        role="alertdialog"
        aria-modal="true"
        :class="cn('fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg sm:rounded-lg', props.class)"
      >
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>
<style scoped>
.ad-fade-enter-active,.ad-fade-leave-active{transition:opacity .15s}
.ad-fade-enter-from,.ad-fade-leave-to{opacity:0}
.ad-zoom-enter-active,.ad-zoom-leave-active{transition:opacity .15s,transform .15s}
.ad-zoom-enter-from,.ad-zoom-leave-to{opacity:0;transform:translate(-50%,-48%) scale(.95)}
</style>
