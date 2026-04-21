<script setup lang="ts">
import { DialogRoot, type DialogRootProps } from 'radix-vue'
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
const props = defineProps<{}>()
</script>
<template><DialogRoot v-bind="props"><slot /></DialogRoot></template>