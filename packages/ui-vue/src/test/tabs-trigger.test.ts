import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UtabsUtrigger from '../../components/tabs-trigger.vue'

describe('UtabsUtrigger', () => {
  it('renders without errors', () => {
    expect(() => mount(UtabsUtrigger)).not.toThrow()
  })
})
