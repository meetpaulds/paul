import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Usidebar from '../../components/sidebar.vue'

describe('Usidebar', () => {
  it('renders without errors', () => {
    expect(() => mount(Usidebar)).not.toThrow()
  })
})
