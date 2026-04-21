<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<div class="relative w-full overflow-auto">
  <table class={['w-full caption-bottom text-sm', className].join(' ')} {...props}><slot /></table>
</div>
