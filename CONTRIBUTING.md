# Contributing to paul

Thank you for your interest in contributing to the paul design system. This document outlines the guidelines and conventions we follow.

## Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/) for all commit messages. This enables automatic changelog generation and semantic versioning.

### Format

```
<type>: <description>
```

### Types

| Type | Description | Example |
|------|-------------|---------|
| `feat` | A new feature | `feat: add button component` |
| `fix` | A bug fix | `fix: correct token value` |
| `docs` | Documentation changes | `docs: update readme` |
| `chore` | Maintenance tasks | `chore: bump dependencies` |
| `refactor` | Code restructuring | `refactor: simplify button styles` |
| `test` | Adding or updating tests | `test: add button unit tests` |
| `style` | Code style changes (formatting) | `style: fix indentation` |

### Examples

```bash
feat: add button component
fix: correct token value
docs: update readme
chore: bump dependencies
```

## How to Open a Pull Request

1. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feat/my-feature
   ```

2. **Make your changes** following our coding standards

3. **Commit your changes** using the conventional commit format

4. **Push your branch** and open a Pull Request on GitHub

5. **Fill out the PR template** completely, including:
   - Description of what the PR does
   - Testing instructions
   - Screenshots (if UI changes)

## PR Checklist

Before submitting your pull request, ensure the following pass:

- [ ] `pnpm lint` passes with no errors
- [ ] `pnpm typecheck` passes with no TypeScript errors
- [ ] `pnpm build` completes successfully

## Code Standards

- Follow the existing code style (enforced by Prettier and ESLint)
- Write TypeScript with strict type safety
- Keep components focused and composable
- Document component APIs with JSDoc comments

## Questions?

Open an issue for discussion before making significant changes.
