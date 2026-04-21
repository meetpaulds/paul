import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { AvatarComponent, AvatarImageComponent, AvatarFallbackComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Media/Avatar',
  component: AvatarComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [AvatarComponent, AvatarImageComponent, AvatarFallbackComponent] })],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    template: `<paul-avatar><paul-avatar-image src="https://github.com/shadcn.png" alt="@shadcn" /></paul-avatar>`,
  }),
}

export const Fallback: Story = {
  render: () => ({
    template: `<paul-avatar><paul-avatar-fallback>AB</paul-avatar-fallback></paul-avatar>`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
