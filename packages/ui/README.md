# @meetpaul/ui

> *"Never build this button again."* — A sticky note on a monitor in Graz, Austria

**paul** is a complete, production-ready Pattern, Asset & UI Library — a modern, scalable design system built for teams who ship great products. One decision made well, applied everywhere.

Built on top of [Radix UI](https://www.radix-ui.com/) primitives and styled with [Tailwind CSS](https://tailwindcss.com/), paul provides 58+ accessible, composable, and beautifully designed components out of the box.

---

## Installation

```bash
npm install @meetpaul/ui
```

## Quick Start

Import the global styles once in your application entry point:

```tsx
import '@meetpaul/ui/styles'
```

Then use any component:

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

---

## Component Library (58 Components)

### Actions & Buttons
| Component | Description |
|-----------|-------------|
| **Button** | Primary action component with variants (default, destructive, outline, ghost, link) and sizes (default, sm, lg, icon) |
| **ButtonGroup** | Group related buttons together with consistent spacing |
| **Toggle** | A two-state button that can be either on or off |
| **ToggleGroup** | A set of two-state buttons that can be toggled on or off |

### Data Display
| Component | Description |
|-----------|-------------|
| **Avatar** | User avatar with image support and fallback initials |
| **Badge** | Status indicators, labels, and counts with multiple variants |
| **Card** | Flexible container for grouping related content |
| **Empty** | Empty state placeholder with customizable icon and description |
| **Kbd** | Keyboard shortcut display component |
| **Separator** | Visual divider for separating content |
| **Skeleton** | Loading placeholder for content that hasn't loaded yet |
| **Spinner** | Loading indicator with size variants |
| **Typography** | Text hierarchy components (heading levels and body text) |

### Data Entry & Forms
| Component | Description |
|-----------|-------------|
| **Checkbox** | Form checkbox control with indeterminate state support |
| **Combobox** | Autocomplete input with dropdown selection |
| **DatePicker** | Date selection component with calendar popup |
| **Field** | Form field wrapper with label, description, and error message |
| **Input** | Single-line text input with focus states |
| **InputGroup** | Combine inputs with addons (prefix/suffix elements) |
| **InputOTP** | One-time password input with automatic focus handling |
| **Label** | Accessible form label component |
| **RadioGroup** | Single-selection control from multiple options |
| **Select** | Dropdown selection with search and groups |
| **Slider** | Range value selection with thumbs |
| **Switch** | Toggle switch for binary options |
| **Textarea** | Multi-line text input with auto-resize |

### Feedback
| Component | Description |
|-----------|-------------|
| **Alert** | Contextual feedback messages (info, success, warning, error) |
| **AlertDialog** | Modal dialog for critical confirmations |
| **Progress** | Progress indicator for loading operations |
| **Sonner** | Toast notification system with positioning and stacking |
| **Toast** | Individual toast notification with variants |

### Layout
| Component | Description |
|-----------|-------------|
| **AspectRatio** | Maintain consistent width-to-height ratio |
| **Resizable** | Resizable panel layouts with drag handles |
| **ScrollArea** | Custom scrollable container with scrollbars |
| **Sidebar** | Application navigation sidebar with collapsible sections |

### Navigation
| Component | Description |
|-----------|-------------|
| **Breadcrumb** | Navigation path showing current page hierarchy |
| **Command** | Command palette for keyboard-driven navigation |
| **Menubar** | Traditional menu bar with nested dropdowns |
| **NavigationMenu** | Responsive navigation with viewport-aware dropdowns |
| **Pagination** | Page navigation controls |
| **Tabs** | Tabbed interface for switching between views |

### Overlays
| Component | Description |
|-----------|-------------|
| **Dialog** | Modal window for focused tasks |
| **Drawer** | Slide-in panel from screen edges |
| **DropdownMenu** | Contextual menu triggered by a button |
| **HoverCard** | Rich tooltip appearing on hover |
| **Popover** | Floating panel for contextual information |
| **Sheet** | Side panel that slides in from any edge |
| **Tooltip** | Simple text tooltip on hover |

### Disclosure
| Component | Description |
|-----------|-------------|
| **Accordion** | Collapsible content sections |
| **Collapsible** | Expand/collapse content with animation |

### Tables & Data
| Component | Description |
|-----------|-------------|
| **DataTable** | Advanced data table with sorting, filtering, and pagination |
| **Table** | Basic table structure with header, body, and footer |

### Charts
| Component | Description |
|-----------|-------------|
| **Chart** | Data visualization components built on Recharts |

### Date & Time
| Component | Description |
|-----------|-------------|
| **Calendar** | Month-view calendar for date selection |

### Media
| Component | Description |
|-----------|-------------|
| **Carousel** | Touch-enabled slider/carousel for cycling through content |

### Utilities
| Component | Description |
|-----------|-------------|
| **ContextMenu** | Right-click context menu |
| **HoverCard** | Card preview on hover |

---

## Peer Dependencies

This package requires React 18+ and React DOM 18+ as peer dependencies:

```bash
npm install react react-dom
```

## Tech Stack

- **React 18+** — UI library with hooks and concurrent features
- **TypeScript** — Full type safety with generated declaration files
- **Tailwind CSS 4** — Utility-first styling with CSS variables
- **Radix UI** — Accessible, unstyled primitive components
- **Vite** — Fast build tool with library mode

## Styling

Components use CSS variables for theming. Import the global styles to get the default design system:

```tsx
import '@meetpaul/ui/styles'
```

The styles include:
- Tailwind CSS v4 with utility classes
- CSS custom properties for colors, spacing, and typography
- Google Fonts (Nunito Sans) integration

## Documentation

For interactive documentation and component examples, visit our Storybook:

```bash
pnpm dev  # Starts Storybook at http://localhost:6006
```

## Contributing

We welcome contributions! Please read our [Contributing Guide](https://github.com/meetpaulds/paul/blob/main/CONTRIBUTING.md) for details on our code of conduct and development process.

## License

MIT — Copyright (c) 2026 SirPauls

Built with care (and too much coffee ☕) in Graz, Austria
