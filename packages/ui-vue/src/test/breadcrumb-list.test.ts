import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UbreadcrumbUlist from '../../components/breadcrumb-list.vue'

describe('UbreadcrumbUlist', () => {
  it('renders without errors', () => {
    expect(() => mount(UbreadcrumbUlist)).not.toThrow()
  })
})
