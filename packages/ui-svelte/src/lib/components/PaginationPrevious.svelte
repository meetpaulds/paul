<script lang="ts">
  let { href = '#', class: className = '', ...props } = $props()
</script>
<a {href} aria-label="Go to previous page" class={['inline-flex items-center gap-1 pl-2.5 h-10 px-4 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground', className].join(' ')} {...props}>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
  <span>Previous</span>
</a>
