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

export const WithProps: Story = {
  render: () => ({
    components: { Card, Button },
    template: `
      <Card class="w-80" title="Card with Props" description="This card uses title and description props, plus footer slot.">
        <p class="text-sm">Card content area.</p>
        <template #footer>
          <div class="flex justify-between w-full">
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </div>
        </template>
      </Card>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
