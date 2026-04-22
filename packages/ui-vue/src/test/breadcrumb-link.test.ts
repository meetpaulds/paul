import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UbreadcrumbUlink from '../../components/breadcrumb-link.vue'

describe('UbreadcrumbUlink', () => {
  it('renders without errors', () => {
    expect(() => mount(UbreadcrumbUlink)).not.toThrow()
  })
})
