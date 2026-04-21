<script lang="ts">
  import Avatar from '@meetpaul/ui-svelte/Avatar.svelte'
  import AvatarImage from '@meetpaul/ui-svelte/AvatarImage.svelte'
  import AvatarFallback from '@meetpaul/ui-svelte/AvatarFallback.svelte'
</script>

<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
