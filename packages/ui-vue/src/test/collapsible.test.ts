import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Ucollapsible from '../../components/collapsible.vue'

describe('Ucollapsible', () => {
  it('renders without errors', () => {
    expect(() => mount(Ucollapsible)).not.toThrow()
  })
})
