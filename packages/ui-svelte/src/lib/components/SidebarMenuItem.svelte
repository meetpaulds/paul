<script lang="ts">
  let { class: className = '', ...props } = $props()
</script>
<li class={['group/menu-item relative', className].join(' ')} {...props}><slot /></li>
