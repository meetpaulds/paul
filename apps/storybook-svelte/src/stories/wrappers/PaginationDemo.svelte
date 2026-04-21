<script lang="ts">
  import Pagination from '@meetpaul/ui-svelte/Pagination.svelte'
  import PaginationContent from '@meetpaul/ui-svelte/PaginationContent.svelte'
  import PaginationItem from '@meetpaul/ui-svelte/PaginationItem.svelte'
  import PaginationLink from '@meetpaul/ui-svelte/PaginationLink.svelte'
  import PaginationPrevious from '@meetpaul/ui-svelte/PaginationPrevious.svelte'
  import PaginationNext from '@meetpaul/ui-svelte/PaginationNext.svelte'
  import PaginationEllipsis from '@meetpaul/ui-svelte/PaginationEllipsis.svelte'
</script>

<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
    <PaginationItem><PaginationEllipsis /></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>
