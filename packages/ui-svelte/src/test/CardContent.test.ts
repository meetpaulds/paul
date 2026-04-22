import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import CardContent from '../../lib/components/CardContent.svelte'

describe('CardContent', () => {
  it('renders without errors', () => {
    expect(() => render(CardContent)).not.toThrow()
  })
})
