import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RadioGroup, RadioGroupItem } from '../components/radio-group'
import { Label } from '../components/label'

const DefaultRadioGroup = () => (
  <RadioGroup defaultValue="option-a">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-a" id="option-a" />
      <Label htmlFor="option-a">Option A</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-b" id="option-b" />
      <Label htmlFor="option-b">Option B</Label>
    </div>
  </RadioGroup>
)

describe('RadioGroup', () => {
  it('renders radio buttons', () => {
    render(<DefaultRadioGroup />)
    expect(screen.getAllByRole('radio')).toHaveLength(2)
  })

  it('has default value selected', () => {
    render(<DefaultRadioGroup />)
    expect(screen.getByLabelText('Option A')).toBeChecked()
  })

  it('changes selection on click', async () => {
    const user = userEvent.setup()
    render(<DefaultRadioGroup />)
    await user.click(screen.getByLabelText('Option B'))
    expect(screen.getByLabelText('Option B')).toBeChecked()
    expect(screen.getByLabelText('Option A')).not.toBeChecked()
  })

  it('is disabled when disabled prop is set', () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="a" id="a" disabled />
        <Label htmlFor="a">A</Label>
      </RadioGroup>
    )
    expect(screen.getByRole('radio')).toBeDisabled()
  })
})
