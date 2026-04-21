<script lang="ts">
  import RadioGroup from '@meetpaul/ui-svelte/RadioGroup.svelte'
  import RadioGroupItem from '@meetpaul/ui-svelte/RadioGroupItem.svelte'
  import Label from '@meetpaul/ui-svelte/Label.svelte'
</script>

<RadioGroup value="option-one">
  <div class="flex items-center gap-2">
    <RadioGroupItem value="option-one" id="o1" />
    <Label for="o1">Option One</Label>
  </div>
  <div class="flex items-center gap-2">
    <RadioGroupItem value="option-two" id="o2" />
    <Label for="o2">Option Two</Label>
  </div>
  <div class="flex items-center gap-2">
    <RadioGroupItem value="option-three" id="o3" />
    <Label for="o3">Option Three</Label>
  </div>
</RadioGroup>
