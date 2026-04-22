import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UbuttonUgroup from '../../components/button-group.vue'

describe('UbuttonUgroup', () => {
  it('renders without errors', () => {
    expect(() => mount(UbuttonUgroup)).not.toThrow()
  })
})
