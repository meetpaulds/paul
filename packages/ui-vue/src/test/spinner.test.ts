import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Uspinner from '../../components/spinner.vue'

describe('Uspinner', () => {
  it('renders without errors', () => {
    expect(() => mount(Uspinner)).not.toThrow()
  })
})
