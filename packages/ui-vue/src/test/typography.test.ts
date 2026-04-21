import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Utypography from '../../components/typography.vue'

describe('Utypography', () => {
  it('renders without errors', () => {
    expect(() => mount(Utypography)).not.toThrow()
  })
})
