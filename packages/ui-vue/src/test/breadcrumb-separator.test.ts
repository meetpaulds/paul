import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UbreadcrumbUseparator from '../../components/breadcrumb-separator.vue'

describe('UbreadcrumbUseparator', () => {
  it('renders without errors', () => {
    expect(() => mount(UbreadcrumbUseparator)).not.toThrow()
  })
})
