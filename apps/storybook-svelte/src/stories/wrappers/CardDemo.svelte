<script lang="ts">
  import Card from '@meetpaul/ui-svelte/Card.svelte'
  import CardHeader from '@meetpaul/ui-svelte/CardHeader.svelte'
  import CardTitle from '@meetpaul/ui-svelte/CardTitle.svelte'
  import CardDescription from '@meetpaul/ui-svelte/CardDescription.svelte'
  import CardContent from '@meetpaul/ui-svelte/CardContent.svelte'
  import CardFooter from '@meetpaul/ui-svelte/CardFooter.svelte'
  import Button from '@meetpaul/ui-svelte/Button.svelte'
</script>

<Card class="w-80">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p class="text-sm">Card content area.</p>
  </CardContent>
  <CardFooter class="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </CardFooter>
</Card>
