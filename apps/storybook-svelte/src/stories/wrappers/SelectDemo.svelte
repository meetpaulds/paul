<script lang="ts">
  import Select from '@meetpaul/ui-svelte/Select.svelte'
  import SelectItem from '@meetpaul/ui-svelte/SelectItem.svelte'
</script>

<Select placeholder="Select a fruit" class="w-48">
  <SelectItem value="apple">Apple</SelectItem>
  <SelectItem value="banana">Banana</SelectItem>
  <SelectItem value="blueberry">Blueberry</SelectItem>
  <SelectItem value="grapes">Grapes</SelectItem>
  <SelectItem value="pineapple">Pineapple</SelectItem>
</Select>
