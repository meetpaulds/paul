<script lang="ts">
  import Input from '@meetpaul/ui-svelte/Input.svelte'
  import InputGroup from '@meetpaul/ui-svelte/InputGroup.svelte'
  import InputGroupText from '@meetpaul/ui-svelte/InputGroupText.svelte'
</script>

<div class="space-y-4">
  <InputGroup class="w-72">
    <InputGroupText>@</InputGroupText>
    <Input placeholder="username" />
  </InputGroup>
  <InputGroup class="w-72">
    <Input placeholder="amount" />
    <InputGroupText>USD</InputGroupText>
  </InputGroup>
</div>
