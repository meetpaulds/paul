import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { CardComponent, CardHeaderComponent, CardTitleComponent, CardDescriptionComponent, CardContentComponent, CardFooterComponent, ButtonComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Layout/Card',
  component: CardComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [CardComponent, CardHeaderComponent, CardTitleComponent, CardDescriptionComponent, CardContentComponent, CardFooterComponent, ButtonComponent] })],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    template: `
      <paul-card class="w-80">
        <paul-card-header>
          <paul-card-title>Card Title</paul-card-title>
          <paul-card-description>Card description goes here.</paul-card-description>
        </paul-card-header>
        <paul-card-content><p class="text-sm">Card content area.</p></paul-card-content>
        <paul-card-footer class="flex justify-between">
          <button paul-button variant="outline">Cancel</button>
          <button paul-button>Save</button>
        </paul-card-footer>
      </paul-card>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
