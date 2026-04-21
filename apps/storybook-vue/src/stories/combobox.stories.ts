import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Combobox } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Data Entry & Forms/Combobox',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

const options = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

export const Default: Story = {
  render: () => ({
    components: { Combobox },
    data() { return { value: '', options } },
    template: `<Combobox v-model="value" :options="options" placeholder="Select framework..." />`,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
