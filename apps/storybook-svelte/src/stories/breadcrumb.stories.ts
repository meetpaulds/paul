import type { Meta, StoryObj } from '@storybook/svelte-vite'
import BreadcrumbDemo from './wrappers/BreadcrumbDemo.svelte'

const meta: Meta = {
  title: 'Navigation/Breadcrumb',
  component: BreadcrumbDemo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
