import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import AccordionItem from '../../lib/components/AccordionItem.svelte'

describe('AccordionItem', () => {
  it('renders without errors', () => {
    expect(() => render(AccordionItem)).not.toThrow()
  })
})
