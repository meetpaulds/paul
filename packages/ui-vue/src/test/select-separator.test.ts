import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UselectUseparator from '../../components/select-separator.vue'

describe('UselectUseparator', () => {
  it('renders without errors', () => {
    expect(() => mount(UselectUseparator)).not.toThrow()
  })
})
