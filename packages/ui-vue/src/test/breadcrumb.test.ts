import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Ubreadcrumb from '../../components/breadcrumb.vue'

describe('Ubreadcrumb', () => {
  it('renders without errors', () => {
    expect(() => mount(Ubreadcrumb)).not.toThrow()
  })
})
