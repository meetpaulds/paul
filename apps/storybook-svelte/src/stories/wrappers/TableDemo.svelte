<script lang="ts">
  import Table from '@meetpaul/ui-svelte/Table.svelte'
  import TableHeader from '@meetpaul/ui-svelte/TableHeader.svelte'
  import TableBody from '@meetpaul/ui-svelte/TableBody.svelte'
  import TableRow from '@meetpaul/ui-svelte/TableRow.svelte'
  import TableHead from '@meetpaul/ui-svelte/TableHead.svelte'
  import TableCell from '@meetpaul/ui-svelte/TableCell.svelte'
  import TableCaption from '@meetpaul/ui-svelte/TableCaption.svelte'
</script>

<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead class="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead class="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell class="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell class="text-right">$250.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell class="font-medium">INV002</TableCell>
      <TableCell>Pending</TableCell>
      <TableCell>PayPal</TableCell>
      <TableCell class="text-right">$150.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell class="font-medium">INV003</TableCell>
      <TableCell>Unpaid</TableCell>
      <TableCell>Bank Transfer</TableCell>
      <TableCell class="text-right">$350.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
