<script lang="ts">
  /**
   * Card — styled surface container with border, background, and shadow.
   *
   * @example
   * ```svelte
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
  import { cn } from '../utils'
  interface Props { class?: string; children?: import('svelte').Snippet }
  const { class: cls = '', children }: Props = $props()
</script>
<div class={cn('rounded-xl border bg-card text-card-foreground shadow', cls)}>{@render children?.()}</div>
