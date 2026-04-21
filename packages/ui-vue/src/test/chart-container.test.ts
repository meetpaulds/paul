import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UchartUcontainer from '../../components/chart-container.vue'

describe('UchartUcontainer', () => {
  it('renders without errors', () => {
    expect(() => mount(UchartUcontainer)).not.toThrow()
  })
})
