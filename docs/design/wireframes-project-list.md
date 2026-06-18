# Wireframe: Project Component List

## Overview
The main view showing all components in a selected project. Users can see component versions, statuses, last updated times, and take actions (edit, view history, delete).

## Layout

```
┌─────────────────────────────────────────────────────────────────┐
│  ≡  Projects     Components                         [Search]    │  Header
├──────────────────────────────────┬──────────────────────────────┤
│                                  │                              │
│  Project List (Sidebar)          │  Component List (Main Area)  │
│                                  │                              │
│  • My Project 1 (Active)         │  ┌──────────────────────────┐│
│  • Project 2                     │  │ Components for:          ││
│  • Project 3                     │  │ "My Project 1"           ││
│  • Project 4                     │  │                          ││
│  [+ New Project]                 │  │ [+ Create Component] [∧] ││
│                                  │  │                          ││
│                                  │  ├──────────────────────────┤│
│                                  │  │ Component Name │ Ver │ St│
│                                  │  ├──────────────────────────┤│
│                                  │  │ • auth-lib     │ 2.3 │ ✓ │
│                                  │  │ • api-gateway  │ 1.5 │ ⚠ │
│                                  │  │ • ui-components│ 3.1 │ ✓ │
│                                  │  │ • database-orm │ 4.0 │ ✗ │
│                                  │  │ • cache-layer  │ 1.8 │ ✓ │
│                                  │  │                          ││
│                                  │  │ [...5 more]              ││
│                                  │  │                          ││
│                                  │  └──────────────────────────┘│
│                                  │                              │
└──────────────────────────────────┴──────────────────────────────┘
```

## Header Section
- **Title**: "Components for [Project Name]"
- **Filter/Sort**: Dropdown to sort by name, version, last updated, or status
- **Search**: Searchable by component name or version
- **Create**: Primary button "+ Create Component"

## Sidebar (Left)
- **Fixed width**: 240px
- **Project list** with active indicator
- **[+ New Project]** button at bottom
- **Hover**: Subtle gray background on hover

## Main Area (Center/Right)
- **Table Layout**:
  - Column 1: Component Name (weight 600)
  - Column 2: Version (mono, right-aligned)
  - Column 3: Status (badge: green checkmark ✓, yellow caution ⚠, red error ✗)
  - Column 4: Last Updated (timestamp)
  - Column 5: Actions (⋯ menu)

## Row Interaction
- **Hover**: Gray-50 background
- **Click**: Navigate to Component Detail view
- **Right-click**: Show context menu (edit, view history, delete)
- **Actions menu (⋯)**:
  - View Details
  - View History
  - Edit
  - Delete (danger, red)

## Pagination
- **Shown if**: > 10 items
- **Placement**: Bottom right
- **Style**: Previous | 1 2 3 ... | Next

## Empty State
- **Title**: "No components yet"
- **Description**: "Create your first component to start tracking dependencies."
- **Action**: Primary button "[+ Create Component]" centered

## States

### Loading
- Skeleton rows (5 placeholders)
- Gray shimmer effect
- Greyed title and buttons

### Error
- Icon: Error/alert icon (red)
- Message: "Failed to load components. Please try again."
- Action: "[Retry]" button

---

## Desktop Spacing Reference

```
Header Height: 56px
Sidebar Width: 240px
Main Area Left Padding: 24px
Main Area Right Padding: 24px
Row Height: 44px
Gap Between Rows: 0px (divider line)
Table Header Height: 36px
```

## Responsive Behavior
- **Tablet (600-1200px)**: Sidebar collapses to icon-only nav, main area takes full width minus 60px sidebar
- **Mobile (<600px)**: Sidebar hidden behind hamburger menu, full-width component list

## Interaction Details
- **Filter/Sort**: Click dropdown, select option, list re-sorts instantly
- **Search**: Type in search box, filter shown in real-time (debounced 300ms)
- **Pagination**: Click page number, scroll to top of list
- **Actions menu**: Click ⋯, dropdown appears (positioned to not overflow), click action to navigate/confirm
