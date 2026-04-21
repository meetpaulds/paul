import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, Card, CardContent } from '@meetpaul/ui-vue'

const meta: Meta = {
  title: 'Media/Carousel',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => ({
    components: { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, Card, CardContent },
    template: `
      <Carousel class="w-full max-w-xs">
        <CarouselContent>
          <CarouselItem v-for="n in 5" :key="n">
            <div class="p-1">
              <Card><CardContent class="flex aspect-square items-center justify-center p-6">
                <span class="text-4xl font-semibold">{{ n }}</span>
              </CardContent></Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    `,
  }),
}

export const Dark: Story = { ...Default, globals: { theme: 'dark' } }
