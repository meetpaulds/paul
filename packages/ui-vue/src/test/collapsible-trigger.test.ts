import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UcollapsibleUtrigger from '../../components/collapsible-trigger.vue'

describe('UcollapsibleUtrigger', () => {
  it('renders without errors', () => {
    expect(() => mount(UcollapsibleUtrigger)).not.toThrow()
  })
})
