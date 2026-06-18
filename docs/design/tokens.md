# Design Tokens

## Color Palette

### Grays (neutral foundation)
- **Gray-50**: `#f9fafb` — Lightest backgrounds, hover states
- **Gray-100**: `#f3f4f6` — Card backgrounds, secondary surfaces
- **Gray-500**: `#6b7280` — Default text, secondary copy
- **Gray-700**: `#374151` — Primary text, headings
- **Gray-900**: `#111827` — Deep text, high contrast

### Accent (primary action)
- **Teal-600**: `#0d9488` — Primary buttons, focus states, links
- **Teal-50**: `#f0fdfa` — Accent background, subtle highlights

### Status Colors
- **Green-600**: `#16a34a` — Success, confirmed, active
- **Yellow-600**: `#ca8a04` — Warning, pending, caution
- **Red-600**: `#dc2626` — Destructive, error, delete
- **Blue-600**: `#2563eb` — Info, secondary action

---

## Typography

### Type Scale
All sizes use `line-height: 1.5` for readability.

| Role | Size | Weight | Usage |
|------|------|--------|-------|
| Display | 32px | 600 | Page titles, hero headings |
| Heading 1 | 24px | 600 | Section headers |
| Heading 2 | 18px | 600 | Subsection headers |
| Body | 14px | 400 | Default text, descriptions |
| Label | 12px | 500 | Form labels, captions, badges |
| Mono | 12px | 400 | Code, technical content |

### Font Family
- **Display & Headings**: `"Inter Display", system-ui, -apple-system, sans-serif`
- **Body**: `"Inter", system-ui, -apple-system, sans-serif`
- **Mono**: `"Monaco", "Menlo", monospace`

---

## Spacing

### Scale (4px base)
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px

### Usage
- **Padding**: Cards and containers use `md` (16px). Buttons use `sm` (8px) vertical, `md` (16px) horizontal.
- **Margins**: Section gaps use `lg` (24px). Stacked elements use `md` (16px).
- **Gaps**: Form fields stack with `md` (16px). Component lists gap with `lg` (24px).

---

## Borders & Radii

### Border Radius
- **sm**: 4px — Buttons, inputs, small components
- **md**: 6px — Cards, modals, larger components
- **lg**: 8px — Overlays, dialogs

### Border Width
- **Default**: 1px — Dividers, input borders
- **Accent**: 2px — Focus states, emphasis

### Border Color
- **Default**: Gray-200 (`#e5e7eb`)
- **Focus**: Teal-600 (`#0d9488`)
- **Error**: Red-600 (`#dc2626`)

---

## Shadows

### Elevation Scale
| Level | Style | Usage |
|-------|-------|-------|
| None | None | Flat, no depth |
| sm | `0 1px 2px 0 rgba(0,0,0,0.05)` | Subtle depth (hover states) |
| md | `0 4px 6px -1px rgba(0,0,0,0.1)` | Cards, popovers |
| lg | `0 10px 15px -3px rgba(0,0,0,0.1)` | Modals, dropdowns |
| xl | `0 20px 25px -5px rgba(0,0,0,0.1)` | Maximum emphasis |

---

## Motion

### Transition Durations
- **Fast**: 150ms — Hover states, icon transitions
- **Normal**: 200ms — UI state changes, fade in/out
- **Slow**: 300ms — Modal entrances, major layout shifts

### Easing
- **Spring (entrance)**: `cubic-bezier(0.32, 0.72, 0.3, 1)` — Lively, 300ms
- **Linear (progress)**: `cubic-bezier(0, 0, 1, 1)` — Progress bars only
- **Ease-in-out (transitions)**: `cubic-bezier(0.4, 0, 0.2, 1)` — General transitions

---

## Focus & Accessibility

### Focus State
- **Outline**: 2px solid Teal-600 (`#0d9488`)
- **Offset**: 2px
- **Applied to**: Buttons, inputs, links, interactive elements

### Reduced Motion
- When `prefers-reduced-motion: reduce` is set, eliminate all animations
- Transitions should be instant (0ms) or very brief (100ms max)
- Spring easing replaced with linear

---

## Component Tokens

### Button
- **Height**: 36px (md), 32px (sm)
- **Padding**: 8px vertical, 16px horizontal
- **Border Radius**: 4px
- **Font**: Body (14px, weight 500)

### Input
- **Height**: 36px
- **Padding**: 8px vertical, 12px horizontal
- **Border Radius**: 4px
- **Border**: 1px Gray-200, focus 2px Teal-600
- **Font**: Body (14px, weight 400)

### Card
- **Padding**: 16px
- **Border Radius**: 6px
- **Border**: 1px Gray-200
- **Shadow**: md
- **Background**: White or Gray-50

### List Item
- **Padding**: 12px 16px
- **Min Height**: 44px
- **Hover**: Gray-50 background
- **Border Bottom**: 1px Gray-200 (except last)
