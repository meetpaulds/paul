import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { AspectRatio } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Layout/Aspect Ratio',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { AspectRatio },
    template: `<div class="w-72"><AspectRatio :ratio="16/9" class="rounded-md overflow-hidden bg-muted"><img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Photo" class="object-cover w-full h-full" /></AspectRatio></div>`,
  }),
}

export const Square: Story = {
  render: () => ({
    components: { AspectRatio },
    template: `<div class="w-72"><AspectRatio :ratio="1" class="rounded-md overflow-hidden bg-muted"><img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Photo" class="object-cover w-full h-full" /></AspectRatio></div>`,
  }),
}
