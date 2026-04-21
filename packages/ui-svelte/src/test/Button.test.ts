import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Button from '../../lib/components/Button.svelte'

describe('Button', () => {
  it('renders without errors', () => {
    expect(() => render(Button)).not.toThrow()
  })
})
