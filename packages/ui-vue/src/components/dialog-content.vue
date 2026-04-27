<script setup lang="ts">
import { DialogPortal, DialogOverlay, DialogContent, DialogClose } from 'radix-vue'
import { X } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
/** Modal panel rendered in a portal. Shows a close button by default; pass `hideClose` to suppress it. */
defineOptions({ name: 'DialogContent' })
const props = defineProps<{ class?: string; hideClose?: boolean }>()
</script>
<template>
  <DialogPortal>
    <DialogOverlay class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
    <DialogContent :class="cn('fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out sm:rounded-lg print:shadow-none print:rounded-none print:border-black print:text-black', props.class)">
      <slot />
      <DialogClose v-if="!props.hideClose" class="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
        <X class="h-4 w-4" /><span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>