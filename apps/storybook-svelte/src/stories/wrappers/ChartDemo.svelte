<script lang="ts">
  import ChartContainer from '@meetpaul/ui-svelte/ChartContainer.svelte'
  import ChartTooltip from '@meetpaul/ui-svelte/ChartTooltip.svelte'

  const data = [
    { month: 'Jan', value: 186 },
    { month: 'Feb', value: 305 },
    { month: 'Mar', value: 237 },
    { month: 'Apr', value: 273 },
    { month: 'May', value: 209 },
    { month: 'Jun', value: 214 },
  ]
  const max = Math.max(...data.map(d => d.value))
</script>

<ChartContainer class="w-full max-w-sm">
  <div class="flex items-end gap-2 h-40 w-full px-2">
    {#each data as d}
      <div class="flex flex-col items-center gap-1 flex-1">
        <div class="w-full rounded-t bg-primary" style={`height: ${(d.value / max) * 100}%`}></div>
        <span class="text-xs text-muted-foreground">{d.month}</span>
      </div>
    {/each}
  </div>
</ChartContainer>
