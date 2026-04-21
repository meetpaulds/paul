<script lang="ts">
  let { class: className = '', config = {}, ...props } = $props()
</script>
<div class={['flex aspect-video justify-center text-xs', className].join(' ')} {...props}>
  <slot />
</div>
