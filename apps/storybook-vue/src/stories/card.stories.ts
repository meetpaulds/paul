import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Layout/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button },
    template: `
      <Card class="w-80">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </CardHeader>
        <CardContent><p class="text-sm">Card content area.</p></CardContent>
        <CardFooter class="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </CardFooter>
      </Card>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
