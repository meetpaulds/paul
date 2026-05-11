import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { SkipLink } from '@meetpaul/ui-vue'

const meta: Meta<typeof SkipLink> = {
  title: 'Accessibility/SkipLink',
  component: SkipLink,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A visually hidden anchor that becomes visible on focus, allowing keyboard users to bypass repeated navigation. Satisfies WCAG 2.4.1 / EN 301 549 §9.2.4.1.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof SkipLink>

export const Default: Story = {
  render: () => ({
    components: { SkipLink },
    template: `
      <div>
        <SkipLink />
        <nav class="bg-muted p-4">
          <p class="text-sm text-muted-foreground">Tab into this story to see the skip link appear.</p>
        </nav>
        <main id="main-content" tabindex="-1" class="p-4">
          <h1 class="text-2xl font-bold">Main Content</h1>
          <p class="text-muted-foreground mt-2">The skip link jumps here.</p>
        </main>
      </div>
    `,
  }),
}

export const CustomTarget: Story = {
  render: () => ({
    components: { SkipLink },
    template: `
      <div>
        <SkipLink target-id="content" />
        <nav class="bg-muted p-4">Navigation area</nav>
        <main id="content" tabindex="-1" class="p-4">
          <h1 class="text-2xl font-bold">Custom Target</h1>
        </main>
      </div>
    `,
  }),
}

export const CustomLabel: Story = {
  render: () => ({
    components: { SkipLink },
    template: `<SkipLink>Skip navigation</SkipLink>`,
  }),
}
