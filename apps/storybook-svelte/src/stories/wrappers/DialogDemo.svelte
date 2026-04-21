<script lang="ts">
  import Dialog from '@meetpaul/ui-svelte/Dialog.svelte'
  import DialogHeader from '@meetpaul/ui-svelte/DialogHeader.svelte'
  import DialogTitle from '@meetpaul/ui-svelte/DialogTitle.svelte'
  import DialogDescription from '@meetpaul/ui-svelte/DialogDescription.svelte'
  import DialogFooter from '@meetpaul/ui-svelte/DialogFooter.svelte'
  import Button from '@meetpaul/ui-svelte/Button.svelte'
  import Input from '@meetpaul/ui-svelte/Input.svelte'
  import Label from '@meetpaul/ui-svelte/Label.svelte'

  let open = $state(false)
</script>

<Button variant="outline" onclick={() => open = true}>Edit Profile</Button>

<Dialog bind:open>
  <DialogHeader>
    <DialogTitle>Edit profile</DialogTitle>
    <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
  </DialogHeader>
  <div class="grid gap-4 py-4">
    <div class="grid grid-cols-4 items-center gap-4">
      <Label for="name" class="text-right">Name</Label>
      <Input id="name" value="Pedro Duarte" class="col-span-3" />
    </div>
  </div>
  <DialogFooter>
    <Button onclick={() => open = false}>Save changes</Button>
  </DialogFooter>
</Dialog>
