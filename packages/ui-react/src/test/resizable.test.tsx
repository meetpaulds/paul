import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '../components/resizable'

describe('Resizable', () => {
  it('renders panel group', () => {
    const { container } = render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>Left</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>Right</ResizablePanel>
      </ResizablePanelGroup>
    )
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders panel content', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>Left Panel</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>Right Panel</ResizablePanel>
      </ResizablePanelGroup>
    )
    expect(screen.getByText('Left Panel')).toBeInTheDocument()
    expect(screen.getByText('Right Panel')).toBeInTheDocument()
  })

  it('renders handle with separator role', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>Left</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>Right</ResizablePanel>
      </ResizablePanelGroup>
    )
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })
})
