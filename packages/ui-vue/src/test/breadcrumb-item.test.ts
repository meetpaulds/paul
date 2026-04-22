import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UbreadcrumbUitem from '../../components/breadcrumb-item.vue'

describe('UbreadcrumbUitem', () => {
  it('renders without errors', () => {
    expect(() => mount(UbreadcrumbUitem)).not.toThrow()
  })
})
