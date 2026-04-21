import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ScrollAreaComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Layout/Scroll Area',
  component: ScrollAreaComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [ScrollAreaComponent] })],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    template: `
      <paul-scroll-area class="h-48 w-64 rounded-md border p-4">
        <div *ngFor="let tag of tags" class="text-sm py-1">{{ tag }}</div>
      </paul-scroll-area>
    `,
    props: {
      tags: ['v1.2.0 — 6 days ago', 'v1.1.0 — 2 weeks ago', 'v1.0.1 — 3 weeks ago', 'v1.0.0 — 1 month ago', 'v0.9.0 — 2 months ago', 'v0.8.0 — 3 months ago'],
    },
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
