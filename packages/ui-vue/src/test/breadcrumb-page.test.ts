import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UbreadcrumbUpage from '../../components/breadcrumb-page.vue'

describe('UbreadcrumbUpage', () => {
  it('renders without errors', () => {
    expect(() => mount(UbreadcrumbUpage)).not.toThrow()
  })
})
