import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UcollapsibleUcontent from '../../components/collapsible-content.vue'

describe('UcollapsibleUcontent', () => {
  it('renders without errors', () => {
    expect(() => mount(UcollapsibleUcontent)).not.toThrow()
  })
})
