<script setup lang="ts">
import { cn } from '@/lib/utils'
/**
 * Card — styled surface container with border, background, and shadow.
 *
 * Compose with CardHeader, CardTitle, CardDescription, CardContent, CardFooter.
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
 */
defineOptions({ name: 'Card' })
const props = defineProps<{ class?: string }>()
</script>

<template>
  <div :class="cn('rounded-xl border bg-card text-card-foreground shadow print:shadow-none print:rounded-none print:border-black print:text-black', props.class)"><slot /></div>
</template>
