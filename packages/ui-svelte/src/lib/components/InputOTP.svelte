<script lang="ts">
  let { value = $bindable(''), maxLength = 6, class: className = '', ...props } = $props()

  let slots = $derived(Array.from({ length: maxLength }, (_, i) => value[i] ?? ''))

  function onkeydown(e: KeyboardEvent) {
    if (e.key === 'Backspace') {
      value = value.slice(0, -1)
    } else if (e.key.length === 1 && /^\d$/.test(e.key) && value.length < maxLength) {
      value = value + e.key
    }
  }
</script>

<div class={['flex items-center gap-2', className].join(' ')} {...props} tabindex="0" role="textbox" aria-label="OTP Input" {onkeydown}>
  {#each slots as slot, i}
    <div class={['relative flex h-10 w-10 items-center justify-center border-y border-r text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md', i === value.length ? 'ring-2 ring-ring ring-offset-background' : ''].join(' ')}>
      {slot}
      {#if i === value.length}
        <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div class="animate-caret-blink h-4 w-px bg-foreground duration-1000"></div>
        </div>
      {/if}
    </div>
  {/each}
</div>
