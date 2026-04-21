import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, Button } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Overlays/Sheet',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    components: { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, Button },
    template: `
      <Sheet>
        <SheetTrigger><Button variant="outline">Open Sheet</Button></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
          </SheetHeader>
          <div class="grid gap-4 py-4">
            <p class="text-sm text-muted-foreground">Profile form content goes here.</p>
          </div>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    `,
  }),
}

export const Left: Story = {
  render: () => ({
    components: { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, Button },
    template: `
      <Sheet>
        <SheetTrigger><Button variant="outline">Open Left</Button></SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>Browse the app navigation.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
