<script lang="ts">
  import Carousel from '@meetpaul/ui-svelte/Carousel.svelte'
  import CarouselItem from '@meetpaul/ui-svelte/CarouselItem.svelte'
</script>

<div class="w-full max-w-xs">
  <Carousel>
    <CarouselItem>
      <div class="flex aspect-square items-center justify-center rounded-md border bg-muted text-4xl font-semibold">1</div>
    </CarouselItem>
    <CarouselItem>
      <div class="flex aspect-square items-center justify-center rounded-md border bg-muted text-4xl font-semibold">2</div>
    </CarouselItem>
    <CarouselItem>
      <div class="flex aspect-square items-center justify-center rounded-md border bg-muted text-4xl font-semibold">3</div>
    </CarouselItem>
  </Carousel>
</div>
