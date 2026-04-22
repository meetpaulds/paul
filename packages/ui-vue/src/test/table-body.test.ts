import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UtableUbody from '../../components/table-body.vue'

describe('UtableUbody', () => {
  it('renders without errors', () => {
    expect(() => mount(UtableUbody)).not.toThrow()
  })
})
