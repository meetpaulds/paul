import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { DialogComponent, DialogHeaderComponent, DialogTitleComponent, DialogDescriptionComponent, DialogFooterComponent, ButtonComponent, InputComponent, LabelComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Overlays/Dialog',
  component: DialogComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [DialogComponent, DialogHeaderComponent, DialogTitleComponent, DialogDescriptionComponent, DialogFooterComponent, ButtonComponent, InputComponent, LabelComponent] })],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    template: `
      <paul-dialog>
        <paul-dialog-header>
          <paul-dialog-title>Edit profile</paul-dialog-title>
          <paul-dialog-description>Make changes to your profile here.</paul-dialog-description>
        </paul-dialog-header>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <paul-label for="name" class="text-right">Name</paul-label>
            <paul-input id="name" value="Pedro Duarte" class="col-span-3"></paul-input>
          </div>
        </div>
        <paul-dialog-footer>
          <button paul-button>Save changes</button>
        </paul-dialog-footer>
      </paul-dialog>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
