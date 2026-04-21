import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UcardUcontent from '../../components/card-content.vue'

describe('UcardUcontent', () => {
  it('renders without errors', () => {
    expect(() => mount(UcardUcontent)).not.toThrow()
  })
})
