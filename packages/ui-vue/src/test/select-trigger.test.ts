import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UselectUtrigger from '../../components/select-trigger.vue'

describe('UselectUtrigger', () => {
  it('renders without errors', () => {
    expect(() => mount(UselectUtrigger)).not.toThrow()
  })
})
