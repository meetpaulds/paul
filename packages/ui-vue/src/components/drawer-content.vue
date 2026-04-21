<script setup lang="ts">
import { inject, Ref } from 'vue'
import { cn } from '../lib/utils'
const open = inject<Ref<boolean>>('drawer-open')!
const close = inject<() => void>('drawer-close')!
const props = defineProps<{ class?: string }>()
</script>
<template>
  <Teleport to="body">
    <Transition name="drawer-fade">
      <div v-if="open" class="fixed inset-0 z-50 bg-black/80" @click="close" />
    </Transition>
    <Transition name="drawer-slide">
      <div v-if="open" role="dialog" :class="cn('fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background', props.class)">
        <div class="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>
<style scoped>
.drawer-fade-enter-active,.drawer-fade-leave-active{transition:opacity .2s}
.drawer-fade-enter-from,.drawer-fade-leave-to{opacity:0}
.drawer-slide-enter-active,.drawer-slide-leave-active{transition:transform .3s ease}
.drawer-slide-enter-from,.drawer-slide-leave-to{transform:translateY(100%)}
</style>
