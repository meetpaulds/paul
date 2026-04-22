import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Input from '../../lib/components/Input.svelte'

describe('Input', () => {
  it('renders without errors', () => {
    expect(() => render(Input)).not.toThrow()
  })
})
