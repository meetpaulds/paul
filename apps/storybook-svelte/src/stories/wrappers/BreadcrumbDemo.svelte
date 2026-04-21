<script lang="ts">
  import Breadcrumb from '@meetpaul/ui-svelte/Breadcrumb.svelte'
  import BreadcrumbList from '@meetpaul/ui-svelte/BreadcrumbList.svelte'
  import BreadcrumbItem from '@meetpaul/ui-svelte/BreadcrumbItem.svelte'
  import BreadcrumbLink from '@meetpaul/ui-svelte/BreadcrumbLink.svelte'
  import BreadcrumbPage from '@meetpaul/ui-svelte/BreadcrumbPage.svelte'
  import BreadcrumbSeparator from '@meetpaul/ui-svelte/BreadcrumbSeparator.svelte'
</script>

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
