import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Ubadge from '../../components/badge.vue'

describe('Ubadge', () => {
  it('renders without errors', () => {
    expect(() => mount(Ubadge)).not.toThrow()
  })
})
