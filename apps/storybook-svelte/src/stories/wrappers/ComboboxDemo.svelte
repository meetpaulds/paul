<script lang="ts">
  let open = $state(false)
  let value = $state('')

  const frameworks = [
    { value: 'svelte', label: 'Svelte' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
  ]

  const selected = $derived(frameworks.find(f => f.value === value))
</script>

<div class="relative w-64">
  <button
    onclick={() => (open = !open)}
    class="flex w-full items-center justify-between rounded-md border px-3 py-2 text-sm hover:bg-accent"
  >
    {selected ? selected.label : 'Select framework...'}
    <span class="ml-2 opacity-50">▾</span>
  </button>
  {#if open}
    <div class="absolute z-10 mt-1 w-full rounded-md border bg-popover shadow-md">
      {#each frameworks as framework}
        <button
          onclick={() => { value = framework.value; open = false }}
          class="flex w-full items-center px-3 py-2 text-sm hover:bg-accent {value === framework.value ? 'font-medium' : ''}"
        >
          {framework.label}
          {#if value === framework.value}<span class="ml-auto">✓</span>{/if}
        </button>
      {/each}
    </div>
  {/if}
</div>
