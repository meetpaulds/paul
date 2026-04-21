<script lang="ts">
  import ToggleGroup from '@meetpaul/ui-svelte/ToggleGroup.svelte'
  import ToggleGroupItem from '@meetpaul/ui-svelte/ToggleGroupItem.svelte'
  let value = $state('center')
</script>

<ToggleGroup type="single" bind:value>
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>
