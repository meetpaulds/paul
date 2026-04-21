<script lang="ts">
  import Popover from '@meetpaul/ui-svelte/Popover.svelte'
</script>

<Popover>
  <button slot="trigger" class="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
    Open popover
  </button>
  <div class="grid gap-4">
    <div class="space-y-2">
      <h4 class="font-medium leading-none">Dimensions</h4>
      <p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
    </div>
    <div class="grid gap-2 text-sm">
      <div class="grid grid-cols-3 items-center gap-4">
        <span>Width</span>
        <input class="col-span-2 h-8 rounded border px-2" value="100%" />
      </div>
      <div class="grid grid-cols-3 items-center gap-4">
        <span>Height</span>
        <input class="col-span-2 h-8 rounded border px-2" value="25px" />
      </div>
    </div>
  </div>
</Popover>
