<script setup lang="ts">
import { inject, Ref, computed } from 'vue'
import { cn } from '../lib/utils'

const props = defineProps<{ value?: string; class?: string }>()
const emit = defineEmits(['select'])
const search = inject<Ref<string>>('command-search')!

const visible = computed(() =>
  !search?.value || !props.value || props.value.toLowerCase().includes(search.value.toLowerCase())
)
</script>
<template>
  <div
    v-if="visible"
    @click="emit('select', props.value)"
    :class="cn('relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground', props.class)"
  >
    <slot />
  </div>
</template>
