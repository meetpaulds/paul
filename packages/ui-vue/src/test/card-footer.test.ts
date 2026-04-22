import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UcardUfooter from '../../components/card-footer.vue'

describe('UcardUfooter', () => {
  it('renders without errors', () => {
    expect(() => mount(UcardUfooter)).not.toThrow()
  })
})
