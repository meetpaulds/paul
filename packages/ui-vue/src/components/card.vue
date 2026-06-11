<script setup lang="ts">
import { cn } from '@/lib/utils'
import CardHeader from './card-header.vue'
import CardTitle from './card-title.vue'
import CardDescription from './card-description.vue'
import CardContent from './card-content.vue'
import CardFooter from './card-footer.vue'
/**
 * Card — styled surface container with border, background, and shadow.
 *
 * Compose with CardHeader, CardTitle, CardDescription, CardContent, CardFooter.
 * Or use props/slots directly for simpler usage.
 *
 * @example
 * ```vue
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Account</CardTitle>
 *     <CardDescription>Manage your settings.</CardDescription>
 *   </CardHeader>
 *   <CardContent>...</CardContent>
 *   <CardFooter><Button>Save</Button></CardFooter>
 * </Card>
 * ```
 * @example
 * ```vue
 * <Card title="Card title" description="Card description">
 *   Content
 *   <template #footer>
 *     Footer
 *   </template>
 * </Card>
 * ```
 */
defineOptions({ name: 'Card' })
const props = defineProps<{
  as?: string
  class?: string
  title?: string
  description?: string
}>()
const tag = props.as || 'div'
</script>

<template>
  <component :is="tag" :class="cn('rounded-xl border bg-card text-card-foreground shadow print:shadow-none print:rounded-none print:border-black print:text-black', props.class)">
    <slot name="header">
      <CardHeader v-if="props.title || props.description || $slots.title || $slots.description">
        <slot name="title">
          <CardTitle v-if="props.title">{{ props.title }}</CardTitle>
        </slot>
        <slot name="description">
          <CardDescription v-if="props.description">{{ props.description }}</CardDescription>
        </slot>
      </CardHeader>
    </slot>
    <CardContent>
      <slot />
    </CardContent>
    <CardFooter v-if="$slots.footer">
      <slot name="footer" />
    </CardFooter>
  </component>
</template>
