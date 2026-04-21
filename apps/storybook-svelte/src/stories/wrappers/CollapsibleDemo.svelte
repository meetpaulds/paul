<script lang="ts">
  import Collapsible from '@meetpaul/ui-svelte/Collapsible.svelte'
  import CollapsibleTrigger from '@meetpaul/ui-svelte/CollapsibleTrigger.svelte'
  import CollapsibleContent from '@meetpaul/ui-svelte/CollapsibleContent.svelte'
  import Button from '@meetpaul/ui-svelte/Button.svelte'
</script>

<Collapsible class="w-72 space-y-2">
  <div class="flex items-center justify-between">
    <h4 class="text-sm font-semibold">@peduarte starred 3 repositories</h4>
    <CollapsibleTrigger>
      <Button variant="ghost" size="sm">Toggle</Button>
    </CollapsibleTrigger>
  </div>
  <div class="rounded-md border px-4 py-2 text-sm font-mono">@radix-ui/primitives</div>
  <CollapsibleContent class="space-y-2">
    <div class="rounded-md border px-4 py-2 text-sm font-mono">@radix-ui/colors</div>
    <div class="rounded-md border px-4 py-2 text-sm font-mono">@stitches/react</div>
  </CollapsibleContent>
</Collapsible>
