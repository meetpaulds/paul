import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { SwitchComponent, LabelComponent } from '@meetpaul/ui-angular'

const meta: Meta<SwitchComponent> = {
  title: 'Data Entry & Forms/Switch',
  component: SwitchComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [SwitchComponent, LabelComponent] })],
  render: (args) => ({
    props: args,
    template: `<div class="flex items-center gap-2"><paul-switch [disabled]="disabled"></paul-switch><paul-label>Airplane Mode</paul-label></div>`,
  }),
  argTypes: { disabled: { control: 'boolean' } },
}
export default meta
type Story = StoryObj<SwitchComponent>

export const Default: Story = { args: { disabled: false } }
export const Disabled: Story = { args: { disabled: true } }
export const Dark: Story = { args: { disabled: false }, globals: { theme: 'dark' } }
