import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    template: `
      <Tabs default-value="account" class="w-80">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account" class="p-4 text-sm">Account settings content.</TabsContent>
        <TabsContent value="password" class="p-4 text-sm">Change your password here.</TabsContent>
      </Tabs>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
