<script lang="ts">
  import HoverCard from '@meetpaul/ui-svelte/HoverCard.svelte'
</script>

<HoverCard>
  {#snippet trigger()}
    <a href="#" class="inline-flex items-center text-sm font-medium underline-offset-4 hover:underline">@meetpaul</a>
  {/snippet}
  <div class="flex justify-between space-x-4">
    <div class="space-y-1">
      <h4 class="text-sm font-semibold">@meetpaul</h4>
      <p class="text-sm">Pattern, Asset & UI Library – The React Framework for the Web.</p>
      <div class="flex items-center pt-2">
        <span class="text-xs text-muted-foreground">Joined December 2021</span>
      </div>
    </div>
  </div>
</HoverCard>
