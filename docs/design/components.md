# Component Patterns

## Button

### Primary Button
- **Background**: Teal-600 (`#0d9488`)
- **Text**: White
- **Padding**: 8px vertical, 16px horizontal
- **Height**: 36px
- **States**:
  - Default: Teal-600 text on solid background
  - Hover: Teal-700 (`#0f766e`)
  - Pressed: Teal-800 (`#155e75`)
  - Disabled: Gray-300 background, Gray-400 text
  - Loading: Icon spinner on left, text grayed

### Secondary Button
- **Background**: Gray-100 (`#f3f4f6`)
- **Text**: Gray-700
- **Border**: 1px Gray-300
- **States**:
  - Default: Outlined, Gray-100 fill
  - Hover: Gray-50 background
  - Pressed: Gray-200 background
  - Disabled: Gray-100 background, Gray-400 text
  - Focus: 2px Teal-600 outline

### Ghost Button
- **Background**: Transparent
- **Text**: Teal-600
- **States**:
  - Default: Text only
  - Hover: Gray-100 background
  - Pressed: Gray-200 background
  - Disabled: Gray-400 text

### Danger Button
- **Background**: Red-600 (`#dc2626`)
- **Text**: White
- **States**:
  - Default: Red-600
  - Hover: Red-700 (`#b91c1c`)
  - Pressed: Red-800 (`#991b1b`)
  - Disabled: Gray-300 background, Gray-400 text

---

## Input Field

### Text Input
- **Height**: 36px
- **Padding**: 8px vertical, 12px horizontal
- **Border**: 1px Gray-200
- **Border Radius**: 4px
- **Font**: Body (14px)
- **States**:
  - Default: Gray-200 border
  - Hover: Gray-300 border
  - Focus: 2px Teal-600 border (replaces default)
  - Error: 2px Red-600 border
  - Disabled: Gray-100 background, Gray-400 text

### Label
- **Font**: Label (12px, weight 500)
- **Color**: Gray-700
- **Margin Bottom**: 6px
- **Required Indicator**: Red-600 asterisk after text

### Error Message
- **Font**: Label (12px)
- **Color**: Red-600
- **Margin Top**: 4px
- **Icon**: Small error icon on left

### Placeholder
- **Color**: Gray-500
- **Font Style**: Regular (no italics)

---

## Card

### Base Card
- **Padding**: 16px
- **Border**: 1px Gray-200
- **Border Radius**: 6px
- **Shadow**: md (`0 4px 6px -1px rgba(0,0,0,0.1)`)
- **Background**: White
- **Hover**: Add sm shadow (`0 1px 2px 0 rgba(0,0,0,0.05)`)

### Card Header
- **Padding**: 16px
- **Border Bottom**: 1px Gray-200
- **Font**: Heading 2 (18px, weight 600)

### Card Body
- **Padding**: 16px
- **Content**: Full-width, flexible height

### Card Footer
- **Padding**: 16px
- **Border Top**: 1px Gray-200
- **Buttons**: Right-aligned, gap 8px

---

## List & Table

### List Item
- **Height**: 44px (minimum)
- **Padding**: 12px 16px
- **Border Bottom**: 1px Gray-200 (except last)
- **Hover**: Gray-50 background
- **Focus**: 2px Teal-600 left border on focus

### List Item Row
```
[Icon/Avatar] [Title] [Subtitle/Metadata] [Status Badge] [Action Menu]
    8px          16px       12px            12px          8px
```

### Table Cell
- **Padding**: 12px horizontal, 8px vertical
- **Min Height**: 40px
- **Border**: 1px Gray-200
- **Align**: Left (text), Right (numbers)

### Table Header
- **Background**: Gray-50
- **Font**: Label (12px, weight 600)
- **Color**: Gray-700
- **Border Bottom**: 1px Gray-300

---

## Form Layout

### Vertical Stack Form
```
[Label]
[Input] 16px gap
[Error/Helper Text]

16px gap between fields

[Label]
[Input]
[Error/Helper Text]

24px gap before buttons

[Primary Button] [Secondary Button]
    8px gap
```

### Two-Column Form
```
[Label Col 1]      [Label Col 2]
[Input Col 1]      [Input Col 2]
      16px gap (between columns)
```

### Inline Form
```
[Label] 8px [Input] 16px [Button]
```

---

## Modal

### Structure
```
┌─────────────────────────┐
│ [Title]         [Close] │  Header 16px padding
├─────────────────────────┤
│                         │
│    Modal Body (24px)    │  Content with max-width: 500px
│                         │
├─────────────────────────┤
│ [Cancel]      [Primary] │  Footer 16px padding, right-aligned
└─────────────────────────┘
```

### Specs
- **Max Width**: 500px (medium)
- **Border Radius**: 8px
- **Shadow**: xl (`0 20px 25px -5px rgba(0,0,0,0.1)`)
- **Backdrop**: Blackout (rgba(0,0,0,0.5)) with fade-in 200ms
- **Entrance Animation**: Scale up + fade (300ms spring easing)

### Behaviors
- Close button top right, always visible
- Escape key closes modal
- Focus trapped inside modal
- Scrollable if content exceeds viewport

---

## Badge

### Status Badge
- **Padding**: 4px 8px
- **Border Radius**: 4px
- **Font**: Label (12px, weight 500)
- **Width**: Inline, auto-fit content

### States
- **Success**: Green-600 text, Green-50 background
- **Warning**: Yellow-600 text, Yellow-50 background
- **Error**: Red-600 text, Red-50 background
- **Info**: Blue-600 text, Blue-50 background
- **Neutral**: Gray-600 text, Gray-100 background

---

## Dropdown / Select

### Trigger Button
- **Height**: 36px
- **Padding**: 8px 12px
- **Border**: 1px Gray-200
- **Border Radius**: 4px
- **Text Color**: Gray-700
- **Icon**: Chevron down on right (8px gap)
- **States**: Hover (Gray-100 bg), Focus (Teal-600 border)

### Dropdown Menu
- **Position**: Absolute, top-align below trigger
- **Min Width**: 200px
- **Border Radius**: 6px
- **Shadow**: lg
- **Items**: 36px height, 12px 16px padding
- **Hover**: Gray-50 background
- **Divider**: 1px Gray-200, 8px margin top/bottom

### Menu Item
```
[Icon] 8px [Label] [Keyboard Shortcut or Badge]
  12px        16px        auto-right
```

---

## Navigation (Sidebar)

### Sidebar Container
- **Width**: 240px
- **Background**: White
- **Border Right**: 1px Gray-200
- **Padding**: 16px

### Nav Item
- **Height**: 36px
- **Padding**: 8px 12px
- **Border Radius**: 4px
- **Font**: Body (14px)
- **States**:
  - Default: Gray-700 text
  - Hover: Gray-100 background
  - Active: Teal-600 text, Gray-100 background
  - Focus: Teal-600 outline

### Nav Section Header
- **Font**: Label (12px, weight 600)
- **Color**: Gray-600
- **Padding**: 12px 0 (vertical only)
- **Margin Top**: 16px (except first)

---

## Divider

### Horizontal Divider
- **Height**: 1px
- **Color**: Gray-200
- **Margin**: 16px 0 (vertical spacing)

### Vertical Divider
- **Width**: 1px
- **Color**: Gray-200
- **Margin**: 0 16px (horizontal spacing)

---

## Icons & Avatars

### Icon
- **Size**: 16px (inline), 20px (buttons), 24px (headings)
- **Color**: Inherit text color
- **Library**: Lucide React (consistent, minimal)
- **Stroke Width**: 2px

### Avatar
- **Size**: 32px (lists), 40px (profiles), 48px (hero)
- **Border Radius**: 50% (circle)
- **Background**: Gray-200 with initials
- **Font**: Label (weight 600)
- **Color**: Gray-700

---

## Checkbox & Radio

### Checkbox
- **Size**: 16px × 16px
- **Border**: 1px Gray-300
- **Border Radius**: 2px
- **Checked Background**: Teal-600
- **Checked Icon**: White checkmark
- **Disabled**: Gray-300 background

### Radio Button
- **Size**: 16px × 16px (outer circle)
- **Border**: 1px Gray-300
- **Checked Border**: 4px Teal-600 circle (inner)
- **Disabled**: Gray-300 border

### Label
- **Gap**: 8px from control
- **Font**: Body (14px)
- **Color**: Gray-700
