import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Ucheckbox from '../../components/checkbox.vue'

describe('Ucheckbox', () => {
  it('renders without errors', () => {
    expect(() => mount(Ucheckbox)).not.toThrow()
  })
})
