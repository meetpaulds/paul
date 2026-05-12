import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ColumnDef } from '@tanstack/react-table'
import { DataTable } from '../components/data-table'

type Person = { name: string; age: number }

const columns: ColumnDef<Person>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'age', header: 'Age' },
]

const data: Person[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
]

describe('DataTable', () => {
  it('renders column headers', () => {
    render(<DataTable columns={columns} data={data} />)
    expect(screen.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: 'Age' })).toBeInTheDocument()
  })

  it('renders data rows', () => {
    render(<DataTable columns={columns} data={data} />)
    expect(screen.getByRole('cell', { name: 'Alice' })).toBeInTheDocument()
    expect(screen.getByRole('cell', { name: 'Bob' })).toBeInTheDocument()
  })

  it('renders "No results" when data is empty', () => {
    render(<DataTable columns={columns} data={[]} />)
    expect(screen.getByText('No results.')).toBeInTheDocument()
  })

  it('renders pagination buttons', () => {
    render(<DataTable columns={columns} data={data} />)
    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
  })

  it('Previous button is disabled on first page', () => {
    render(<DataTable columns={columns} data={data} />)
    expect(screen.getByRole('button', { name: 'Previous' })).toBeDisabled()
  })
})
