<script lang="ts">
  import Alert from '@meetpaul/ui-svelte/Alert.svelte'
  import AlertTitle from '@meetpaul/ui-svelte/AlertTitle.svelte'
  import AlertDescription from '@meetpaul/ui-svelte/AlertDescription.svelte'
</script>

<Alert variant="destructive" class="max-w-md">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
</Alert>
