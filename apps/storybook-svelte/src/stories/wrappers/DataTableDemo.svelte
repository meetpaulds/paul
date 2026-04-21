<script lang="ts">
  import Table from '@meetpaul/ui-svelte/Table.svelte'
  import TableHeader from '@meetpaul/ui-svelte/TableHeader.svelte'
  import TableBody from '@meetpaul/ui-svelte/TableBody.svelte'
  import TableRow from '@meetpaul/ui-svelte/TableRow.svelte'
  import TableHead from '@meetpaul/ui-svelte/TableHead.svelte'
  import TableCell from '@meetpaul/ui-svelte/TableCell.svelte'

  type Payment = { id: string; amount: number; status: string; email: string }

  const data: Payment[] = [
    { id: 'INV001', amount: 316, status: 'success', email: 'ken99@yahoo.com' },
    { id: 'INV002', amount: 242, status: 'success', email: 'abe45@gmail.com' },
    { id: 'INV003', amount: 837, status: 'processing', email: 'Monserrat44@gmail.com' },
    { id: 'INV004', amount: 874, status: 'success', email: 'Silas22@gmail.com' },
    { id: 'INV005', amount: 721, status: 'failed', email: 'carmella@hotmail.com' },
  ]
</script>

<div class="rounded-md border w-full max-w-2xl">
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]">ID</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Email</TableHead>
        <TableHead class="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {#each data as row}
        <TableRow>
          <TableCell class="font-medium">{row.id}</TableCell>
          <TableCell>{row.status}</TableCell>
          <TableCell>{row.email}</TableCell>
          <TableCell class="text-right">${row.amount.toFixed(2)}</TableCell>
        </TableRow>
      {/each}
    </TableBody>
  </Table>
</div>
