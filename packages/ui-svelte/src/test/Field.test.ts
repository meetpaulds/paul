import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Field from '../../lib/components/Field.svelte'

describe('Field', () => {
  it('renders without errors', () => {
    expect(() => render(Field)).not.toThrow()
  })
})
