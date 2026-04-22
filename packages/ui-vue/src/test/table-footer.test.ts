import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UtableUfooter from '../../components/table-footer.vue'

describe('UtableUfooter', () => {
  it('renders without errors', () => {
    expect(() => mount(UtableUfooter)).not.toThrow()
  })
})
