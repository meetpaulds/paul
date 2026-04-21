<script lang="ts">
  let { defaultSize = 50, class: className = '', ...props } = $props()
</script>
<div class={['flex flex-col overflow-hidden', className].join(' ')} style={`flex: ${defaultSize} 1 0px`} {...props}><slot /></div>
