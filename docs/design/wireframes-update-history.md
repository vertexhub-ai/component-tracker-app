# Wireframe: Component Update History

## Overview
Timeline view showing all version updates, dependency changes, and metadata modifications for a selected component. Accessed from the component list via "View History" or from component detail view.

## Layout

```
┌─────────────────────────────────────────────────────────────────┐
│  ≡  Projects     Components                         [Search]    │  Header
├──────────────────────────────────┬──────────────────────────────┤
│                                  │                              │
│  Project List (Sidebar)          │  Update History (Main Area) │
│                                  │                              │
│  • My Project 1 (Active)         │  ┌──────────────────────────┐│
│  • Project 2                     │  │ Update History            ││
│  • Project 3                     │  │ "auth-lib"               ││
│  • Project 4                     │  │                          ││
│  [+ New Project]                 │  │ [Filter: All ▼] [csv]    ││
│                                  │  │                          ││
│                                  │  │ Version 2.3.1            ││
│                                  │  │ 🔗 → Updated to 2.3.1   ││
│                                  │  │ June 18, 2024 3:45 PM   ││
│                                  │  │ by Dev Team 1            ││
│                                  │  │                          ││
│                                  │  │ ⟳ Dependencies Changed  ││
│                                  │  │ • react: 16.8.0 → 18.0.0││
│                                  │  │ • +jsonwebtoken: 9.0.0  ││
│                                  │  │                          ││
│                                  │  │ Version 2.3.0            ││
│                                  │  │ ✓ Published to Prod      ││
│                                  │  │ June 15, 2024 10:20 AM  ││
│                                  │  │ by Sarah Chen            ││
│                                  │  │                          ││
│                                  │  │ Version 2.2.9            ││
│                                  │  │ ⚠ Flagged for Review     ││
│                                  │  │ June 10, 2024 2:30 PM   ││
│                                  │  │ by DevOps                ││
│                                  │  │                          ││
│                                  │  │ Version 2.2.8            ││
│                                  │  │ ✓ Released               ││
│                                  │  │ June 5, 2024 9:15 AM    ││
│                                  │  │ by Dev Team 1            ││
│                                  │  │                          ││
│                                  │  │ [Load More...]           ││
│                                  │  │                          ││
│                                  │  └──────────────────────────┘│
│                                  │                              │
└──────────────────────────────────┴──────────────────────────────┘
```

## Header Section
- **Title**: "Update History for [Component Name]"
- **Filter**: Dropdown menu (All Changes, Version Updates, Dependency Changes, Status Changes, Manual Updates)
- **Export**: "[Export CSV]" button to download history

## Timeline View

### Entry Structure
Each update entry contains:

```
┌─────────────────────────────────────┐
│ [Badge/Icon] [Title]               │  Top line: Action badge + title
│ [Timestamp]                        │  Timestamp (readable format)
│ [Changed fields (if applicable)]  │  Specific changes made
│ [Author name] [Team]               │  Who made the change
└─────────────────────────────────────┘
```

### Entry Badges/Icons
- **Version Update**: 🔗 Icon, "Updated to X.Y.Z"
- **Published**: ✓ Icon (green), "Published to Prod"
- **Status Change**: ⚠ Icon (yellow), "Flagged for Review" or "Resolved"
- **Dependency Change**: ⟳ Icon, "Dependencies Changed"
- **Manual Update**: ✎ Icon, "Metadata Updated"
- **Created**: ✨ Icon, "Component Created"

### Content Details
- **Timestamp**: "June 18, 2024 3:45 PM" (human-readable)
- **Changed Fields** (shown only if applicable):
  - "• react: 16.8.0 → 18.0.0" (dependency update)
  - "• +jsonwebtoken: 9.0.0" (dependency added)
  - "• -old-lib: 1.2.3" (dependency removed)
  - "• Description: [...] → [...]" (if changed)
  - "• Maintainer: Team 1 → Team 2" (if changed)
- **Author**: "[Avatar] Name [Team/Role]"

---

## Filter Dropdown

**Options**:
- **All Changes** (default)
- **Version Updates** (only version changes)
- **Dependency Changes** (only dep updates)
- **Status Changes** (only status/flags)
- **Manual Updates** (metadata, descriptions)

**Behavior**: Click filter, list re-renders showing only matching entries

---

## Interaction Details

### Expand/Collapse Entry
- **Default**: Each entry is collapsed (shows title, timestamp, author)
- **Click**: Expand to show detailed changes
- **Expanded**: Shows full changeset, dependencies before/after, etc.

### Copy/Share
- **Click entry**: Context menu with:
  - Copy version number
  - Copy change summary
  - Share link to this version

### Pagination
- **Load More**: "[Load More...]" button at bottom if history exceeds 10 entries
- **Behavior**: Click to load next 10 entries

---

## Empty State

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                        No updates yet                           │
│                                                                 │
│           This component hasn't been modified since             │
│                     its initial creation.                       │
│                                                                 │
│                  [← Back to Components]                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Loading State

```
┌─────────────────────────────────────────────────────────────────┐
│ [Shimmer placeholder 1]                                         │
│ [Shimmer placeholder 2]                                         │
│ [Shimmer placeholder 3]                                         │
│ [Shimmer placeholder 4]                                         │
└─────────────────────────────────────────────────────────────────┘
```

---

## Error State

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│            🔴 Failed to load update history                     │
│                                                                 │
│         An error occurred. Please try again later.              │
│                                                                 │
│                         [Retry]                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Desktop Spacing Reference

```
Header Height: 56px
Sidebar Width: 240px
Main Area Left Padding: 24px
Main Area Right Padding: 24px
Entry Padding: 16px
Entry Gap: 16px (between entries)
Timeline Left Border: 2px Teal-600
Timeline Badge Size: 24px
```

## Responsive Behavior

- **Tablet (600-1200px)**: Sidebar collapses to icon-only nav
- **Mobile (<600px)**: Sidebar hidden, full-width timeline
- **Mobile Entry**: Reduced padding (12px), smaller font (13px)

## Keyboard Navigation

- **Tab**: Cycle through expandable entries
- **Enter/Space**: Expand/collapse focused entry
- **Arrow Down**: Move to next entry
- **Arrow Up**: Move to previous entry
- **Home**: Jump to most recent entry
- **End**: Jump to oldest entry

## Accessibility

- **ARIA Timeline**: Container has `role="feed"`, each entry has `role="article"`
- **Time Elements**: Use `<time>` tag with `datetime` attribute
- **Expandable**: Use `aria-expanded` on entry containers
- **Announce Changes**: Use `aria-live="polite"` for loaded entries
