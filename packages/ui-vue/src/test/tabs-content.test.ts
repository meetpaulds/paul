import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UtabsUcontent from '../../components/tabs-content.vue'

describe('UtabsUcontent', () => {
  it('renders without errors', () => {
    expect(() => mount(UtabsUcontent)).not.toThrow()
  })
})
