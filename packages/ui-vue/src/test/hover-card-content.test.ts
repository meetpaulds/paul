import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UhoverUcardUcontent from '../../components/hover-card-content.vue'

describe('UhoverUcardUcontent', () => {
  it('renders without errors', () => {
    expect(() => mount(UhoverUcardUcontent)).not.toThrow()
  })
})
