# paul

> *"Never build this button again."* — A sticky note on a monitor in Graz, Austria 

paul is a **Pattern, Asset & UI Library** — a modern, scalable design system monorepo for teams who ship great products. One decision made well, applied everywhere.

---

## Monorepo Structure

```
paul/
├── apps/
│   └── storybook/          # Component documentation and visual testing
├── packages/
│   └── ui/                 # Core UI component library
├── .github/
│   └── workflows/            # CI/CD automation
├── turbo.json              # Build pipeline orchestration
└── tsconfig.base.json      # Shared TypeScript configuration
```

- **`apps/storybook`** — Documentation site and component playground (Storybook v10.3.5)
- **`packages/ui`** — The core design system package containing React components and styles

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| pnpm | 9.x | Package manager and workspace orchestration |
| Vite | 8.x | Build tool and development server |
| React | 19.x | UI library |
| TypeScript | 5.x | Type-safe development |
| Tailwind CSS | v4 | Utility-first styling |
| Storybook | v10.3.5 | Component documentation |
| Turbo | latest | Monorepo task runner |

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/meetpaul/paul.git
cd paul

# Install dependencies
pnpm install

# Start development mode
pnpm dev
```

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start all development servers |
| `pnpm build` | Build all packages and applications |
| `pnpm lint` | Run ESLint across all packages |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm clean` | Clean all build artifacts and node_modules |

---

## Contributing

- [Open an issue](https://github.com/meetpaul/paul/issues)
- [Start a discussion](https://github.com/meetpaul/paul/discussions)
- [Read the guide](./CONTRIBUTING.md)

---

## License

MIT — built with care (and too much coffee ) in Graz by [@SirPauls](https://github.com/sirpauls)
