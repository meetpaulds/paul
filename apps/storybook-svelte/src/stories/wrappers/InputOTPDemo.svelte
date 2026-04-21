<script lang="ts">
  import InputOTP from '@meetpaul/ui-svelte/InputOTP.svelte'
  let value = $state('')
</script>

<div class="flex flex-col items-center gap-4">
  <InputOTP bind:value maxLength={6} />
  {#if value.length === 6}
    <p class="text-sm text-muted-foreground">You entered: <span class="font-mono font-medium">{value}</span></p>
  {:else}
    <p class="text-sm text-muted-foreground">Enter your one-time password.</p>
  {/if}
</div>
