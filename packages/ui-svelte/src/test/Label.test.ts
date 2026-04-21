import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Label from '../../lib/components/Label.svelte'

describe('Label', () => {
  it('renders without errors', () => {
    expect(() => render(Label)).not.toThrow()
  })
})
