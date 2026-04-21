import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UchartUtooltip from '../../components/chart-tooltip.vue'

describe('UchartUtooltip', () => {
  it('renders without errors', () => {
    expect(() => mount(UchartUtooltip)).not.toThrow()
  })
})
