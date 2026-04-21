import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UcardUheader from '../../components/card-header.vue'

describe('UcardUheader', () => {
  it('renders without errors', () => {
    expect(() => mount(UcardUheader)).not.toThrow()
  })
})
