import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Button } from '@meetpaul/ui-vue'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: { variant: 'default', size: 'default' },
  render: (args: any) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">Button</Button>',
  }),
}

export const Outline: Story = {
  args: { variant: 'outline' },
  render: (args: any) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">Button</Button>',
  }),
}

export const Destructive: Story = {
  args: { variant: 'destructive' },
  render: (args: any) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">Delete</Button>',
  }),
}
