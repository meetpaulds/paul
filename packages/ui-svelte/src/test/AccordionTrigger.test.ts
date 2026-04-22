import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import AccordionTrigger from '../../lib/components/AccordionTrigger.svelte'

describe('AccordionTrigger', () => {
  it('renders without errors', () => {
    expect(() => render(AccordionTrigger)).not.toThrow()
  })
})
