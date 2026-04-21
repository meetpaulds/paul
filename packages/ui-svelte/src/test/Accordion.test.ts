import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Accordion from '../../lib/components/Accordion.svelte'

describe('Accordion', () => {
  it('renders without errors', () => {
    expect(() => render(Accordion)).not.toThrow()
  })
})
