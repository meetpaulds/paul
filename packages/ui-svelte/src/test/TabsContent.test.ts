import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import TabsContent from '../../lib/components/TabsContent.svelte'

describe('TabsContent', () => {
  it('renders without errors', () => {
    expect(() => render(TabsContent)).not.toThrow()
  })
})
