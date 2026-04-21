<script lang="ts">
  let { openDelay = 700, class: className = '', ...props } = $props()
  let open = $state(false)
  let timer: ReturnType<typeof setTimeout> | undefined

  function onmouseenter() {
    timer = setTimeout(() => (open = true), openDelay)
  }
  function onmouseleave() {
    clearTimeout(timer)
    open = false
  }
</script>

<div class="relative inline-block" {onmouseenter} {onmouseleave}>
  <slot name="trigger" />
  {#if open}
    <div class={['absolute z-50 mt-1 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none', className].join(' ')} {...props}>
      <slot />
    </div>
  {/if}
</div>
