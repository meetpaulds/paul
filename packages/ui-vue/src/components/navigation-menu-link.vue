<script setup lang="ts">
import { cn } from '../lib/utils'
const props = defineProps<{ href?: string; class?: string }>()
</script>
<template>
  <a :href="props.href" :class="cn('block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground', props.class)">
    <slot />
  </a>
</template>
