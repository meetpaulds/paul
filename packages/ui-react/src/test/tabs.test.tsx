import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/tabs'

const DefaultTabs = () => (
  <Tabs defaultValue="tab1">
    <TabsList>
      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">Content 1</TabsContent>
    <TabsContent value="tab2">Content 2</TabsContent>
  </Tabs>
)

describe('Tabs', () => {
  it('renders tab triggers', () => {
    render(<DefaultTabs />)
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument()
  })

  it('shows default tab content', () => {
    render(<DefaultTabs />)
    expect(screen.getByText('Content 1')).toBeInTheDocument()
  })

  it('switches tab on click', async () => {
    const user = userEvent.setup()
    render(<DefaultTabs />)
    await user.click(screen.getByRole('tab', { name: 'Tab 2' }))
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveAttribute('data-state', 'active')
  })

  it('active tab has correct data-state', () => {
    render(<DefaultTabs />)
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('data-state', 'active')
  })

  it('disabled tab cannot be activated', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2" disabled>Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    )
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeDisabled()
  })
})
