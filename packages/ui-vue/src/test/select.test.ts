import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Uselect from '../../components/select.vue'

describe('Uselect', () => {
  it('renders without errors', () => {
    expect(() => mount(Uselect)).not.toThrow()
  })
})
