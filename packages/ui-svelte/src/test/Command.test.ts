import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Command from '../../lib/components/Command.svelte'

describe('Command', () => {
  it('renders without errors', () => {
    expect(() => render(Command)).not.toThrow()
  })
})
