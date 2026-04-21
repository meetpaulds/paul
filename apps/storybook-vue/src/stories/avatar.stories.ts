import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Avatar, AvatarImage, AvatarFallback } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Media/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Avatar, AvatarImage, AvatarFallback },
    template: `<Avatar><AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /><AvatarFallback>CN</AvatarFallback></Avatar>`,
  }),
}

export const Fallback: Story = {
  render: () => ({
    components: { Avatar, AvatarFallback },
    template: `<Avatar><AvatarFallback>AB</AvatarFallback></Avatar>`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
