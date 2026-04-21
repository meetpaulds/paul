import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Command, CommandInput, CommandList, CommandGroup, CommandItem, CommandSeparator, CommandEmpty } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Data Entry & Forms/Command',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    components: { Command, CommandInput, CommandList, CommandGroup, CommandItem, CommandSeparator, CommandEmpty },
    template: `
      <Command class="rounded-lg border shadow-md w-64">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem value="Calendar">Calendar</CommandItem>
            <CommandItem value="Search Emoji">Search Emoji</CommandItem>
            <CommandItem value="Calculator">Calculator</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem value="Profile">Profile</CommandItem>
            <CommandItem value="Billing">Billing</CommandItem>
            <CommandItem value="Settings">Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
