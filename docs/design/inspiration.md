# Design Inspiration & References

This document cites the design patterns and UI approaches we're modeling after. Each reference shows a specific pattern or interaction we want to emulate.

---

## 1. Linear — Issue Tracking & Project Management

**URL**: https://linear.app

### What We're Borrowing

#### Sidebar Navigation
- Fixed 240px width on desktop
- Project list with visual indicators (active state)
- Generous spacing, no cramped text
- Icon-only collapse on tablet (hamburger on mobile)

#### Table/List Design
- Minimal borders: Only divider lines, no box containers
- Row hover: Subtle gray background (Gray-50)
- Status badges: Colored pill with icon
- Inline actions: Accessible via row interaction, no dropdown clutter
- Pagination: Clean, understated numbers at bottom

#### Typography Hierarchy
- Bold weight (600) for titles/headings
- Regular weight (400) for body text
- Secondary metadata in Gray-500
- Mono font for IDs, versions, technical values

#### Empty/Loading States
- Friendly, non-technical messaging
- Skeleton loaders with shimmer animation
- No error boundaries that show stack traces

---

## 2. Vercel — Deployment Dashboard

**URL**: https://vercel.com/dashboard

### What We're Borrowing

#### Card Layout & Spacing
- 16px padding inside cards
- 24px gap between card groups
- White background with 1px subtle border
- Shadow on hover (elevation increase)

#### Status Indicators
- Dot indicators with color: Green (deployed), Yellow (building), Red (error)
- Accompanying text label beside badge
- High contrast colors for glanceability

#### Form Design
- Single-column layout for all fields
- Clear label above input
- Error state: Red border, error message below
- Input field height: 36px (good touch target)
- Spacing between fields: 16px

#### Micro-interactions
- Button hover: Slight shadow increase, background shift
- Link hover: Color change, no underline (until hover)
- Loading state: Spinner icon animates, button text may gray
- Success toast: Appears bottom-right, auto-dismisses

---

## 3. Stripe — Dashboard & API Reference

**URL**: https://dashboard.stripe.com

### What We're Borrowing

#### Color Restraint
- Extensive use of grays for neutral elements
- One accent color (blue) for primary actions
- Status colors used sparingly: green (success), red (error), yellow (warning)
- No decorative color use

#### Data Table Design
- Header row with light gray background (Gray-50)
- Alternating row background optional (we'll skip for cleaner look)
- Right-aligned numeric columns
- Expandable rows for detail (click to expand)
- Action menus (⋯) on the right

#### Modal Patterns
- Maximum width 500px for content
- Close button in top right (✕)
- Backdrop: Semi-transparent dark overlay
- No extra spacing/padding inflation
- Entrance animation: Subtle scale + fade (no bounce)

#### Button Hierarchy
- Primary: Bold, accent color, prominent
- Secondary: Outline, subtle, for alternatives
- Tertiary: Ghost/link style for low-priority actions
- All states clearly differentiated (hover, active, disabled)

---

## 4. GitHub — Repository Management

**URL**: https://github.com

### What We're Borrowing

#### List Interactions
- Click row to navigate to detail
- Right-click for context menu
- Keyboard navigation (arrow keys)
- Keyboard shortcuts (j/k to navigate, x to select)
- Bulk actions when multiple selected

#### Metadata Display
- Compact pill badges for status
- Icon + text combos for clarity
- Timestamp in relative format (e.g., "2 days ago")
- Contributor avatars (clickable, shows tooltip)

#### Tab Navigation
- Horizontal tabs below title
- Active tab has underline (accent color)
- Tab content swaps instantly (no animation)

#### Code/Technical Display
- Mono font for technical values (version, IDs, hashes)
- Code snippets in dark-background containers
- Copy-to-clipboard button on hover

---

## 5. Things 3 — Task Management (Design Philosophy)

**URL**: https://culturedcode.com/things/

### What We're Borrowing

#### Minimalist Spacing
- Ample whitespace around content
- No unnecessary visual hierarchy
- Clean typography, generous line-height
- Breathing room prevents cognitive load

#### Focus & Clarity
- One clear primary action per screen
- Secondary actions de-emphasized
- Color used intentionally, sparingly
- Consistent icon style (one library, no mixing)

#### Transitions & Motion
- Spring easing for important entrances (modals, expanded views)
- Linear easing for progress (never bouncy)
- Duration: 200-300ms (not too fast, not sluggish)
- Reduced motion: Instant animations for accessibility

---

## 6. Raycast — Command Launcher (Interaction Patterns)

**URL**: https://www.raycast.com

### What We're Borrowing

#### Keyboard-First Design
- Full keyboard navigation (arrow keys, enter, escape)
- Search always available (Cmd+K / Ctrl+K)
- Keyboard shortcuts visible in UI (e.g., "⌘ A")
- No mouse required for power users

#### Input Feedback
- Instant search results (no delay)
- Highlighting matches in results
- Clear visual feedback on selection
- Smooth scroll to keep selected item visible

#### Minimal UI
- Sidebar minimal by default (collapse)
- Content-first design (data over chrome)
- Consistent component sizes (buttons, inputs all 36px)
- Visual separator for sections (light divider, not boxes)

---

## Design System Decisions

### Color Palette Rationale
- **Grays**: 5 shades (50, 100, 500, 700, 900) match Stripe/Vercel baseline
- **Accent (Teal)**: High contrast, accessible, modern (not default blue)
- **Status Colors**: Standard (Green, Yellow, Red, Blue) matching industry conventions

### Typography Rationale
- **Inter Family**: Modern, neutral, widely available (system fallback to SF Pro/Segoe)
- **Hierarchy**: Display/H1/H2/Body/Label/Mono (5 sizes sufficient for this scope)
- **Weight**: 400 (regular), 500 (semi-bold for labels), 600 (bold for headings)

### Spacing Rationale
- **4px Base**: Allows precise 8, 12, 16, 24, 32 scales
- **Generous Padding**: 16px inside cards / 24px between sections (not cramped)
- **Row Height 44px**: Meets touch-target minimum (Apple HIG = 44pt)

### Component Sizing
- **Button Height**: 36px (good touch target, fits 14px text with 8px padding)
- **Input Height**: 36px (consistency with buttons)
- **Card Border Radius**: 6px (modern, not too rounded)
- **Sidebar Width**: 240px (enough for "Project Name" text, not wasteful)

---

## Anti-Patterns We're Avoiding

### ❌ Bootstrap-y Defaults
- Not using gray #ccc borders on everything
- Not using large padding inflation (Bootstrap = 24px, we use 16px)
- Not defaulting to multiple competing colors

### ❌ Cluttered Tables
- No zebra striping (unnecessary, adds visual noise)
- No visible borders on every cell (only bottom dividers)
- No dense information packing (44px row height allows breathing)

### ❌ Inconsistent Icon Styles
- All icons from Lucide React (consistent stroke weight, style)
- No emoji mixing (except in documentation)
- No random PNG/SVG from different sources

### ❌ Decorative Motion
- No spinning loaders for loading (causes motion sickness)
- No bouncy easing (unprofessional)
- No animations that repeat endlessly (respect prefers-reduced-motion)

### ❌ Over-Designed States
- No 10 button variants (4 is enough)
- No custom loading spinners (use standard circle)
- No "unique" empty state illustrations (minimalist icons only)

---

## Interaction Patterns Summary

| Pattern | Implementation |
|---------|-----------------|
| **List Item Click** | Navigate to detail; highlight row briefly |
| **Row Hover** | Gray-50 background, optional shadow lift |
| **Filter/Sort** | Dropdown menu, instant re-sort, no page reload |
| **Modal Entrance** | Scale + fade with spring easing, 300ms |
| **Form Submit** | Spinner in button, disable form while loading |
| **Error Display** | Red border on input + inline error text |
| **Success Toast** | Bottom-right, 3s auto-dismiss, optional close |
| **Keyboard Nav** | Arrow keys, Enter to select, Escape to close |
| **Search/Filter** | Debounced 300ms, shows real-time matches |
| **Confirmation** | Modal dialog, not inline popover |

---

## Accessibility Commitments

Based on Linear, Vercel, and Stripe best practices:

1. **WCAG 2.1 AA Compliance**
   - Color contrast ratios ≥ 4.5:1 for text
   - All interactive elements keyboard accessible
   - ARIA labels on icon-only buttons

2. **Focus Management**
   - Visible focus outline (2px Teal-600) on all interactive elements
   - Focus order matches visual reading order
   - Focus trapped in modals, released on close

3. **Motion**
   - Respect `prefers-reduced-motion: reduce` (remove animations)
   - No auto-playing video or sounds
   - Animations serve a purpose (not purely decorative)

4. **Semantic HTML**
   - Proper heading hierarchy (h1, h2, not just styled divs)
   - Form labels associated with inputs
   - List markup for list items (not divs with role="listitem")

5. **Screen Reader Support**
   - `aria-live` for status updates (loading, errors)
   - `aria-label` for icon-only buttons
   - `aria-describedby` linking errors to inputs
   - Meaningful alt text on images (or `alt=""` for decorative)

---

## Rationale: Why These References

- **Linear**: Market leader in issue tracking; design is information-dense yet uncluttered
- **Vercel**: Dashboard is the gold standard for developer tools; clean, minimal
- **Stripe**: Color restraint and data visualization; enterprise confidence
- **GitHub**: Familiar to developers; interaction patterns widely accepted
- **Things 3**: Minimalism + focus; proves constraints improve design
- **Raycast**: Keyboard-first proves power-user workflows; focus on speed

This combination gives us:
- **Trustworthiness** (Stripe) + **Clarity** (Vercel) + **Familiarity** (GitHub) + **Minimalism** (Things 3)
- **Dev-friendly** (Raycast) + **Accessible** (all of them)
