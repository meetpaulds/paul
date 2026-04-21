import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, Button, Input, Label } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Overlays/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, Button, Input, Label },
    template: `
      <Dialog>
        <DialogTrigger as-child><Button variant="outline">Edit Profile</Button></DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="name" class="text-right">Name</Label>
              <Input id="name" model-value="Pedro Duarte" class="col-span-3" />
            </div>
          </div>
          <DialogFooter><Button type="submit">Save changes</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
