<script lang="ts">
  let { direction = 'horizontal', class: className = '', ...props } = $props()
</script>
<div class={['flex h-full w-full data-[panel-group-direction=vertical]:flex-col', className].join(' ')} data-panel-group-direction={direction} {...props}><slot /></div>
