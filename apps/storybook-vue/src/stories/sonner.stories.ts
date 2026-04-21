import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Toaster, Button } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Feedback/Sonner',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    components: { Toaster, Button },
    data() { return { toaster: null as any } },
    methods: {
      showDefault() { this.toaster?.show('Event has been created') },
      showSuccess() { this.toaster?.show('Event has been created', 'success') },
      showError() { this.toaster?.show('Failed to create event', 'error') },
    },
    template: `
      <div>
        <Toaster ref="toaster" />
        <div class="space-x-2">
          <Button @click="showDefault">Show Toast</Button>
          <Button variant="outline" @click="showSuccess">Success</Button>
          <Button variant="destructive" @click="showError">Error</Button>
        </div>
      </div>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
