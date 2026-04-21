import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel, Button } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Feedback/Alert Dialog',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    components: { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel, Button },
    template: `
      <AlertDialog>
        <AlertDialogTrigger><Button variant="outline">Show Dialog</Button></AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
