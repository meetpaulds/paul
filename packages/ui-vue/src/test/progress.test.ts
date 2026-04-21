import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Uprogress from '../../components/progress.vue'

describe('Uprogress', () => {
  it('renders without errors', () => {
    expect(() => mount(Uprogress)).not.toThrow()
  })
})
