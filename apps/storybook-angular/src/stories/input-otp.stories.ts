import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { InputOTPComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Inputs/InputOTP',
  component: InputOTPComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [InputOTPComponent] })],
  render: () => ({ template: `<paul-input-otp [maxLength]="6" />` }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
