import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Textarea from '../../lib/components/Textarea.svelte'

describe('Textarea', () => {
  it('renders without errors', () => {
    expect(() => render(Textarea)).not.toThrow()
  })
})
