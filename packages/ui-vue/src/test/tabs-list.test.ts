import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UtabsUlist from '../../components/tabs-list.vue'

describe('UtabsUlist', () => {
  it('renders without errors', () => {
    expect(() => mount(UtabsUlist)).not.toThrow()
  })
})
