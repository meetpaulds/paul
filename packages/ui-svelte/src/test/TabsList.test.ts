import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import TabsList from '../../lib/components/TabsList.svelte'

describe('TabsList', () => {
  it('renders without errors', () => {
    expect(() => render(TabsList)).not.toThrow()
  })
})
