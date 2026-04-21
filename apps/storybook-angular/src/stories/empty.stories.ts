import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { EmptyComponent } from '@meetpaul/ui-angular'

const meta: Meta<EmptyComponent> = {
  title: 'Feedback/Empty',
  component: EmptyComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [EmptyComponent] })],
  render: (args) => ({
    props: args,
    template: `<paul-empty [title]="title" [description]="description"></paul-empty>`,
  }),
}
export default meta
type Story = StoryObj<EmptyComponent>

export const Default: Story = { args: { title: 'No results found', description: 'Try adjusting your search or filters.' } }
export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
