# Contrast Audit — WCAG 2.2 §1.4.6 Contrast (Enhanced)

> **Criterion:** WCAG 2.2 SC 1.4.6 / EN 301 549 §9.1.4.6  
> **Requirement:** Minimum contrast ratio of **7:1** for normal text (AAA)  
> **Scope:** `--muted-foreground`, `--secondary-foreground`, `--destructive-text`, `--sidebar-foreground` design tokens  
> **Audit date:** 2026-04-24  
> **Tool:** WCAG relative luminance formula (IEC 61966-2-1 / WCAG 2.x definition), verified programmatically  

---

## Methodology

Contrast ratios were calculated using the WCAG 2.x relative luminance formula:

```
L = 0.2126 × R_lin + 0.7152 × G_lin + 0.0722 × B_lin
contrast = (L_lighter + 0.05) / (L_darker + 0.05)
```

Each foreground token was tested against **every background it appears on** in practice:

- `--muted-foreground` → `--background` and `--muted`
- `--secondary-foreground` → `--secondary`
- `--destructive-text` → `--background` (used as inline error/warning text on page backgrounds)
- `--sidebar-foreground` → `--sidebar`

---

## Audit Results

### Light Mode

| Token | Foreground HSL | Background | BG HSL | Ratio (before) | Ratio (after) | Status (before) | Status (after) |
|-------|---------------|------------|--------|----------------|---------------|-----------------|----------------|
| `--muted-foreground` | `240 5% 38%` | `--background` | `0 0% 100%` | 6.61:1 | — | ❌ AAA fail | — |
| `--muted-foreground` | `240 5% 38%` | `--muted` | `240 4.8% 95.9%` | 6.01:1 | — | ❌ AAA fail | — |
| `--muted-foreground` | **`240 5% 33%`** | `--background` | `0 0% 100%` | — | **7.99:1** | — | ✅ AAA pass |
| `--muted-foreground` | **`240 5% 33%`** | `--muted` | `240 4.8% 95.9%` | — | **7.27:1** | — | ✅ AAA pass |
| `--secondary-foreground` | `240 5.9% 10%` | `--secondary` | `240 4.8% 95.9%` | 16.13:1 | 16.13:1 | ✅ AAA pass | ✅ no change |
| `--destructive-text` | `0 72% 44%` | `--background` | `0 0% 100%` | 6.02:1 | — | ❌ AAA fail | — |
| `--destructive-text` | **`0 72% 39%`** | `--background` | `0 0% 100%` | — | **7.21:1** | — | ✅ AAA pass |
| `--sidebar-foreground` | `240 5.3% 26.1%` | `--sidebar` | `0 0% 98%` | 9.99:1 | 9.99:1 | ✅ AAA pass | ✅ no change |

### Dark Mode

| Token | Foreground HSL | Background | BG HSL | Ratio (before) | Ratio (after) | Status (before) | Status (after) |
|-------|---------------|------------|--------|----------------|---------------|-----------------|----------------|
| `--muted-foreground` | `240 5% 64.9%` | `--background` | `240 10% 3.9%` | 7.77:1 | — | ✅ AAA pass | — |
| `--muted-foreground` | `240 5% 64.9%` | `--muted` | `240 3.7% 15.9%` | 5.81:1 | — | ❌ AAA fail | — |
| `--muted-foreground` | **`240 5% 71%`** | `--background` | `240 10% 3.9%` | — | **9.38:1** | — | ✅ AAA pass |
| `--muted-foreground` | **`240 5% 71%`** | `--muted` | `240 3.7% 15.9%` | — | **7.01:1** | — | ✅ AAA pass |
| `--secondary-foreground` | `0 0% 98%` | `--secondary` | `240 3.7% 15.9%` | 14.25:1 | 14.25:1 | ✅ AAA pass | ✅ no change |
| `--destructive-text` | `0 90% 65%` | `--background` | `240 10% 3.9%` | 6.03:1 | — | ❌ AAA fail | — |
| `--destructive-text` | **`0 90% 70%`** | `--background` | `240 10% 3.9%` | — | **7.02:1** | — | ✅ AAA pass |
| `--sidebar-foreground` | `240 4.8% 95.9%` | `--sidebar` | `240 5.9% 10%` | 16.13:1 | 16.13:1 | ✅ AAA pass | ✅ no change |

---

## Token Changes Summary

| Token | Mode | Before | After | Delta L |
|-------|------|--------|-------|---------|
| `--muted-foreground` | Light | `240 5% 38%` | `240 5% 33%` | −5% |
| `--muted-foreground` | Dark | `240 5% 64.9%` | `240 5% 71%` | +6.1% |
| `--destructive-text` | Light | `0 72% 44%` | `0 72% 39%` | −5% |
| `--destructive-text` | Dark | `0 90% 65%` | `0 90% 70%` | +5% |

All changes are to lightness only; hue and saturation are preserved.

---

## Visual Impact Assessment

- **`--muted-foreground`** is used for placeholder text, helper text, disabled labels, captions, and metadata.  
  The ±5–6% lightness shift is perceptible but subtle — the text becomes marginally darker in light mode and marginally lighter in dark mode. No layout changes occur.

- **`--destructive-text`** is used for inline validation error text.  
  The colour shifts from a mid-red towards a slightly deeper red in light mode and a slightly lighter red in dark mode. The destructive semantic is fully preserved.

- **`--secondary-foreground`** and **`--sidebar-foreground`**: already conformant — no changes.

> ⚠️ **Chromatic diff note:** Chromatic visual regression snapshots will show a diff on any story that renders `muted-foreground` or `destructive-text` tokens. These diffs are **expected and intentional**. Accept them as the baseline update for v1.1.0.

---

## Conformance Status After Changes

| Token | Light AA | Light AAA | Dark AA | Dark AAA |
|-------|----------|-----------|---------|----------|
| `--muted-foreground` | ✅ | ✅ | ✅ | ✅ |
| `--secondary-foreground` | ✅ | ✅ | ✅ | ✅ |
| `--destructive-text` | ✅ | ✅ | ✅ | ✅ |
| `--sidebar-foreground` | ✅ | ✅ | ✅ | ✅ |

---

*Audit performed against EN 301 549 v3.2.1 §9.1.4.6 · WCAG 2.2 SC 1.4.6*  
*Files changed: `packages/tokens/src/tokens.css`, `packages/tokens/src/tokens.ts`*
