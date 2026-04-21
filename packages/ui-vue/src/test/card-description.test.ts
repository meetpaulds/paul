import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UcardUdescription from '../../components/card-description.vue'

describe('UcardUdescription', () => {
  it('renders without errors', () => {
    expect(() => mount(UcardUdescription)).not.toThrow()
  })
})
