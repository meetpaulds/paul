# @meetpaul/ui

paul — Pattern, Asset & UI Library by SirPauls

## Installation

```bash
npm install @meetpaul/ui
```

## Usage

Import the global styles once in your application entry point:

```tsx
import '@meetpaul/ui/styles'
```

Then use the components:

```tsx
import { Button, Input, Card } from '@meetpaul/ui'

export default function App() {
  return (
    <Card>
      <h1>Hello paul</h1>
      <Input placeholder="Enter your name" />
      <Button>Submit</Button>
    </Card>
  )
}
```

## Available Components

- `Avatar` - User avatar with fallback
- `Badge` - Status indicators and labels
- `Button` - Interactive button with variants
- `Card` - Container for grouping related content
- `Checkbox` - Form checkbox control
- `Input` - Text input field
- `Label` - Form label element
- `Separator` - Visual divider
- `Skeleton` - Loading placeholder
- `Switch` - Toggle switch control
- `Textarea` - Multi-line text input

## Peer Dependencies

This package requires React 19+ and React DOM 19+ as peer dependencies.

```bash
npm install react react-dom
```

## License

MIT
