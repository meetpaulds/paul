<script lang="ts">
  let { value = $bindable(''), maxLength = 6, class: className = '', ...props } = $props()

  let slots = $derived(Array.from({ length: maxLength }, (_, i) => value[i] ?? ''))
  let inputEl: HTMLInputElement

  function oninput(e: Event) {
    const v = (e.target as HTMLInputElement).value.replace(/\D/g, '').slice(0, maxLength)
    value = v
  }
</script>

<div class={['relative flex items-center gap-2', className].join(' ')} {...props} onclick={() => inputEl?.focus()}>
  <input
    bind:this={inputEl}
    type="text"
    inputmode="numeric"
    autocomplete="one-time-code"
    maxlength={maxLength}
    value={value}
    {oninput}
    aria-label={'Enter one-time password, ' + maxLength + ' digits'}
    class="sr-only"
  />
  {#each slots as slot, i}
    <div
      class={['relative flex h-11 w-11 items-center justify-center border-y border-e border-input text-sm transition-all first:rounded-s-md first:border-s last:rounded-e-md', i === value.length ? 'ring-2 ring-ring ring-offset-background z-10' : ''].join(' ')}
      aria-hidden="true"
    >
      {slot}
      {#if i === value.length}
        <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div class="animate-caret-blink h-4 w-px bg-foreground duration-1000"></div>
        </div>
      {/if}
    </div>
  {/each}
</div>
