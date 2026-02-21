# CLAUDE.md

## Tailwind conventions

### Use theme color tokens, never hardcoded hex values
The theme (`src/app/globals.css`) defines color tokens. Always use those instead of `[#XXXXXX]` arbitrary values.

| Token | Value | Usage |
|---|---|---|
| `accent` | `#FF6B6B` | `text-accent`, `bg-accent`, `border-accent` (with opacity modifiers like `/30` as needed) |
| `accent-2` | `#FFB3B3` | `text-accent-2`, `bg-accent-2` |
| `bg` | `#09090b` | `bg-bg` |
| `surface` | `#111117` | `bg-surface` |
| `surface-2` | `#18181f` | `bg-surface-2` |
| `border-dark` | `#1f1f28` | `border-border-dark` |
| `border-2` | `#2a2a36` | `border-border-2` |
| `text-primary` | `#fafaf9` | `text-text-primary` |
| `muted` | `#71717a` | `text-muted` |

### Use Tailwind scale units instead of arbitrary pixel values
Tailwind's spacing scale is `1 unit = 4px`. Prefer scale-based classes over `[Xpx]` arbitrary values when an exact match exists.

Examples:
- `w-[600px]` → `w-150`
- `h-[400px]` → `h-100`

Arbitrary values are still fine when no scale equivalent exists (e.g. `blur-[120px]`, `opacity-[0.04]`, `text-[10px]`).
