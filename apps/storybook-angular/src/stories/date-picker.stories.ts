import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { CalendarComponent, PopoverComponent, ButtonComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Inputs/DatePicker',
  component: CalendarComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [CalendarComponent, PopoverComponent, ButtonComponent] })],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    template: `
      <paul-popover>
        <button slot="trigger" paul-button variant="outline" class="w-56 justify-start text-left font-normal">
          <span>📅</span>
          {{ selected ? selected.toLocaleDateString() : 'Pick a date' }}
        </button>
        <paul-calendar (selectedChange)="selected = $event; popover.open = false" />
      </paul-popover>
    `,
    props: { selected: null },
  }),
}
export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
