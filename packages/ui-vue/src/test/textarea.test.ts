import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Utextarea from '../../components/textarea.vue'

describe('Utextarea', () => {
  it('renders without errors', () => {
    expect(() => mount(Utextarea)).not.toThrow()
  })
})
