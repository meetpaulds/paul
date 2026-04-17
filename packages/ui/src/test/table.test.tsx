import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption } from '../components/table'

const DefaultTable = () => (
  <Table>
    <TableCaption>A list of items</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Value</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Item 1</TableCell>
        <TableCell>100</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell>Total</TableCell>
        <TableCell>100</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
)

describe('Table', () => {
  it('renders a table', () => {
    render(<DefaultTable />)
    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  it('renders column headers', () => {
    render(<DefaultTable />)
    expect(screen.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: 'Value' })).toBeInTheDocument()
  })

  it('renders cell content', () => {
    render(<DefaultTable />)
    expect(screen.getByRole('cell', { name: 'Item 1' })).toBeInTheDocument()
  })

  it('renders caption', () => {
    render(<DefaultTable />)
    expect(screen.getByText('A list of items')).toBeInTheDocument()
  })

  it('merges custom className on Table', () => {
    const { container } = render(<Table className="custom-table"><TableBody></TableBody></Table>)
    expect(container.querySelector('table')).toHaveClass('custom-table')
  })
})
