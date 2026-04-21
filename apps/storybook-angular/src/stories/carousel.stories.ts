import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { CarouselComponent, CarouselItemComponent } from '@meetpaul/ui-angular'

const meta: Meta = {
  title: 'Display/Carousel',
  component: CarouselComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [moduleMetadata({ imports: [CarouselComponent, CarouselItemComponent] })],
  render: () => ({
    template: `
      <div class="w-72">
        <paul-carousel [total]="3">
          <paul-carousel-item><div class="flex h-32 items-center justify-center rounded-md border bg-muted text-lg font-semibold">1</div></paul-carousel-item>
          <paul-carousel-item><div class="flex h-32 items-center justify-center rounded-md border bg-muted text-lg font-semibold">2</div></paul-carousel-item>
          <paul-carousel-item><div class="flex h-32 items-center justify-center rounded-md border bg-muted text-lg font-semibold">3</div></paul-carousel-item>
        </paul-carousel>
      </div>
    `,
  }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
export const Dark: Story = { globals: { theme: 'dark' } }
