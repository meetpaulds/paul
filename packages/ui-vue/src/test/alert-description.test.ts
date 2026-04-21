import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UalertUdescription from '../../components/alert-description.vue'

describe('UalertUdescription', () => {
  it('renders without errors', () => {
    expect(() => mount(UalertUdescription)).not.toThrow()
  })
})
