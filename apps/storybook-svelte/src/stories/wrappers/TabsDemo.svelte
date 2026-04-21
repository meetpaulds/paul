<script lang="ts">
  import Tabs from '@meetpaul/ui-svelte/Tabs.svelte'
  import TabsList from '@meetpaul/ui-svelte/TabsList.svelte'
  import TabsTrigger from '@meetpaul/ui-svelte/TabsTrigger.svelte'
  import TabsContent from '@meetpaul/ui-svelte/TabsContent.svelte'
</script>

<Tabs value="account" class="w-80">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account" class="p-4 text-sm">Account settings content.</TabsContent>
  <TabsContent value="password" class="p-4 text-sm">Change your password here.</TabsContent>
</Tabs>
