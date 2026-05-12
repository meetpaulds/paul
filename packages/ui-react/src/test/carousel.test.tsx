import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../components/carousel'

const DefaultCarousel = () => (
  <Carousel>
    <CarouselContent>
      <CarouselItem>Slide 1</CarouselItem>
      <CarouselItem>Slide 2</CarouselItem>
      <CarouselItem>Slide 3</CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
)

describe('Carousel', () => {
  it('renders slide content', () => {
    render(<DefaultCarousel />)
    expect(screen.getByText('Slide 1')).toBeInTheDocument()
    expect(screen.getByText('Slide 2')).toBeInTheDocument()
    expect(screen.getByText('Slide 3')).toBeInTheDocument()
  })

  it('renders previous button', () => {
    render(<DefaultCarousel />)
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
  })

  it('renders next button', () => {
    render(<DefaultCarousel />)
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  it('renders carousel container', () => {
    const { container } = render(<DefaultCarousel />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('merges custom className', () => {
    const { container } = render(
      <Carousel className="custom-carousel">
        <CarouselContent><CarouselItem>A</CarouselItem></CarouselContent>
      </Carousel>
    )
    expect(container.firstChild).toHaveClass('custom-carousel')
  })
})
