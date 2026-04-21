import type { Meta, StoryObj } from '@storybook/svelte-vite'
import AspectRatio from '@meetpaul/ui-svelte/AspectRatio.svelte'

const meta: Meta<typeof AspectRatio> = {
  title: 'Layout/Aspect Ratio',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { ratio: { control: 'number' } },
}
export default meta
type Story = StoryObj<typeof AspectRatio>

export const SixteenByNine: Story = { args: { ratio: 16 / 9, class: 'w-72 rounded-md overflow-hidden bg-muted' } }
export const Square: Story = { args: { ratio: 1, class: 'w-72 rounded-md overflow-hidden bg-muted' } }
export const Dark: Story = { ...SixteenByNine, globals: { theme: 'dark' } }
