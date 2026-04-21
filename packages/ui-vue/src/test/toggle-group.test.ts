import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UtoggleUgroup from '../../components/toggle-group.vue'

describe('UtoggleUgroup', () => {
  it('renders without errors', () => {
    expect(() => mount(UtoggleUgroup)).not.toThrow()
  })
})
