<script setup lang="ts">
import { DialogRoot, type DialogRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
/**
 * Dialog — modal window for focused tasks, confirmations, or forms.
 *
 * @example
 * ```vue
 * <Dialog>
 *   <DialogTrigger><Button>Open</Button></DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Edit Profile</DialogTitle>
 *       <DialogDescription>Make changes to your profile here.</DialogDescription>
 *     </DialogHeader>
 *   </DialogContent>
 * </Dialog>
 * ```
 *
 * @accessibility Focus is trapped inside the dialog while open. Pressing Escape closes it.
 */
defineOptions({ name: 'Dialog' })
const props = defineProps<{
  as?: string | any
  class?: string
}>()
const tag = props.as || DialogRoot
</script>
<template><component :is="tag" v-bind="props" :class="cn(props.class)"><slot /></component></template>
