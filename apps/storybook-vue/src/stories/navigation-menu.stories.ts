import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Navigation/Navigation Menu',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    components: { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink },
    template: `
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid gap-3 p-4 w-[300px]">
                <li><NavigationMenuLink href="/docs"><div class="text-sm font-medium">Introduction</div><p class="text-sm text-muted-foreground">Re-usable components built with Vue.</p></NavigationMenuLink></li>
                <li><NavigationMenuLink href="/docs/install"><div class="text-sm font-medium">Installation</div><p class="text-sm text-muted-foreground">How to install dependencies.</p></NavigationMenuLink></li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid w-[300px] gap-3 p-4 grid-cols-2">
                <li><NavigationMenuLink>Alert Dialog</NavigationMenuLink></li>
                <li><NavigationMenuLink>Progress</NavigationMenuLink></li>
                <li><NavigationMenuLink>Scroll Area</NavigationMenuLink></li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
