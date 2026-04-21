import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription, Button } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Overlays/Drawer',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    components: { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription, Button },
    template: `
      <Drawer>
        <DrawerTrigger><Button variant="outline">Open Drawer</Button></DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div class="p-4 pb-0">
            <p class="text-sm text-muted-foreground">You can adjust this at any time from your settings.</p>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <Button variant="outline">Cancel</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
