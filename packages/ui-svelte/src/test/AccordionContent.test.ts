import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import AccordionContent from '../../lib/components/AccordionContent.svelte'

describe('AccordionContent', () => {
  it('renders without errors', () => {
    expect(() => render(AccordionContent)).not.toThrow()
  })
})
