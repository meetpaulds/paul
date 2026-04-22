import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import AvatarImage from '../../lib/components/AvatarImage.svelte'

describe('AvatarImage', () => {
  it('renders without errors', () => {
    expect(() => render(AvatarImage)).not.toThrow()
  })
})
