import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@meetpaul/ui'
import { Button } from '@meetpaul/ui'
import { Label, Input } from '@meetpaul/ui'

const meta = {
  title: 'Overlays/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Edit Profile' }))
    await expect(within(document.body).getByRole('dialog')).toBeVisible()
    await expect(within(document.body).getByText('Edit profile')).toBeVisible()
  },
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={fn()}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

/**
 * WCAG 2.2 SC 2.4.13 — Focus Not Obscured (AAA)
 *
 * Scenario: a sticky header sits above a long scrollable form inside a Dialog.
 * Every focusable element must have its focus ring **fully visible** and never
 * obscured by the sticky header or any other painted layer.
 *
 * Manual test steps:
 * 1. Open the dialog.
 * 2. Tab through every input field.
 * 3. Verify the blue focus ring is visible on every field, including after the
 *    sticky header scrolls past the top of the panel.
 * 4. Repeat with keyboard-only navigation (no mouse).
 */
export const FocusNotObscuredStickyHeader: Story = {
  name: 'Focus Not Obscured — Sticky Header (WCAG 2.4.13 AAA)',
  render: () => {
    const fields = [
      'Given name', 'Family name', 'Email address', 'Phone number',
      'Street address', 'City', 'Postcode', 'Country',
    ]
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open long form (sticky header test)</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[480px] max-h-[80vh] flex flex-col p-0 overflow-hidden">
          {/* Sticky header — must not obscure focus rings below it */}
          <div className="sticky top-0 z-10 bg-background border-b px-6 py-4 shrink-0">
            <DialogHeader>
              <DialogTitle>Sticky Header Form</DialogTitle>
              <DialogDescription>
                Scroll down and Tab through fields. Focus rings must remain fully visible (WCAG 2.4.13).
              </DialogDescription>
            </DialogHeader>
          </div>
          {/* Scrollable body — scroll-padding ensures focused inputs are not hidden behind the sticky header */}
          <div className="overflow-y-auto scroll-pt-[72px] px-6 py-4 flex flex-col gap-4 flex-1">
            {fields.map((field) => (
              <div key={field} className="flex flex-col gap-1.5">
                <Label htmlFor={field.toLowerCase().replace(' ', '-')}>{field}</Label>
                <Input id={field.toLowerCase().replace(' ', '-')} placeholder={`Enter ${field.toLowerCase()}`} />
              </div>
            ))}
          </div>
          <div className="border-t px-6 py-4 shrink-0">
            <DialogFooter>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    )
  },
}

export const Dark: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dark Mode Dialog</DialogTitle>
          <DialogDescription>This dialog is shown in dark mode.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={fn()}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  globals: { theme: 'dark' },
}
