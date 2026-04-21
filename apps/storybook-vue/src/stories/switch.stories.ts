import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Switch, Label } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Data Entry & Forms/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Switch, Label },
    template: `<div class="flex items-center gap-2"><Switch id="airplane" /><Label for="airplane">Airplane Mode</Label></div>`,
  }),
}

export const Checked: Story = {
  render: () => ({
    components: { Switch, Label },
    template: `<div class="flex items-center gap-2"><Switch id="checked" :model-value="true" /><Label for="checked">Enabled</Label></div>`,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Switch },
    template: `<Switch disabled />`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
