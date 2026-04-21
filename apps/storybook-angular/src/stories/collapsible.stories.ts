import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { CollapsibleComponent, CollapsibleTriggerComponent, CollapsibleContentComponent, ButtonComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Disclosure/Collapsible',
  component: CollapsibleComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [CollapsibleComponent, CollapsibleTriggerComponent, CollapsibleContentComponent, ButtonComponent] })],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    template: `
      <paul-collapsible class="w-72 space-y-2">
        <div class="flex items-center justify-between">
          <h4 class="text-sm font-semibold">@peduarte starred 3 repositories</h4>
          <paul-collapsible-trigger>
            <button paul-button variant="ghost" size="sm">Toggle</button>
          </paul-collapsible-trigger>
        </div>
        <div class="rounded-md border px-4 py-2 text-sm font-mono">@radix-ui/primitives</div>
        <paul-collapsible-content class="space-y-2">
          <div class="rounded-md border px-4 py-2 text-sm font-mono">@radix-ui/colors</div>
          <div class="rounded-md border px-4 py-2 text-sm font-mono">@stitches/react</div>
        </paul-collapsible-content>
      </paul-collapsible>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
