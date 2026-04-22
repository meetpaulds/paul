import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import CollapsibleContent from '../../lib/components/CollapsibleContent.svelte'

describe('CollapsibleContent', () => {
  it('renders without errors', () => {
    expect(() => render(CollapsibleContent)).not.toThrow()
  })
})
