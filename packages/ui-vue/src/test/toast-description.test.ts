import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UtoastUdescription from '../../components/toast-description.vue'

describe('UtoastUdescription', () => {
  it('renders without errors', () => {
    expect(() => mount(UtoastUdescription)).not.toThrow()
  })
})
