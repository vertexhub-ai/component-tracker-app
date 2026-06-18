# Wireframe: Component Creation

## Overview
Modal dialog for creating a new component. Collects component metadata, version, and dependencies. Accessible from the project list via "+ Create Component" button.

## Layout

```
┌─────────────────────────────────────────────────────────────────┐
│ Create New Component                                    [✕ Close]│
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Component Name *                                               │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ auth-lib-v2                                              │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  Component Type *                                               │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ [Library ▼] │ Microservice │ Plugin │ Framework │ Other  │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  Version *                                                      │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ 2.3.1                                                    │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  Description                                                    │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ Authentication library for React apps                    │  │
│  │                                                          │  │
│  │                                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  Dependencies (Optional)                                        │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ • react >= 16.8.0                                   [✕] │  │
│  │ • jsonwebtoken >= 9.0.0                             [✕] │  │
│  │                                                          │  │
│  │ [+ Add Dependency]                                      │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  Maintainer *                                                   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ [Avatar] Dev Team 1 [▼]                                 │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│                                                   [Cancel] [OK] │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Form Fields

### Component Name (Required)
- **Label**: "Component Name *"
- **Input**: Text field, 36px height
- **Placeholder**: "e.g., auth-lib, api-gateway"
- **Validation**: Max 100 chars, alphanumeric + hyphens
- **Error Message**: "Name must be unique within this project"

### Component Type (Required)
- **Label**: "Component Type *"
- **Input**: Toggle buttons or dropdown
  - Options: Library, Microservice, Plugin, Framework, Other
  - Default: Library
- **Display**: Pill-style buttons (sm), horizontal layout
- **Selection**: Active option highlighted (Teal-600 background)

### Version (Required)
- **Label**: "Version *"
- **Input**: Text field, semantic versioning format
- **Placeholder**: "e.g., 2.3.1"
- **Format**: X.Y.Z (with pre-release/build metadata optional)
- **Error Message**: "Invalid version format"

### Description (Optional)
- **Label**: "Description"
- **Input**: Textarea, 100px height
- **Placeholder**: "What does this component do?"
- **Max**: 500 characters

### Dependencies (Optional)
- **Label**: "Dependencies (Optional)"
- **Display**: List of dependency rows
  - Each row: [Name] [Version Spec] [Remove ✕]
  - Example: "react >= 16.8.0"
- **Add Button**: "[+ Add Dependency]" link/button
- **Remove**: Click ✕ to remove a dependency row
- **Behavior**: Form updates dynamically without page load

### Maintainer (Required)
- **Label**: "Maintainer *"
- **Input**: Dropdown/searchable select
- **Display**: [Avatar] Team Name [▼]
- **Options**: List of developers/teams from project
- **Search**: Type to filter team options
- **Default**: Current user

---

## Modal Behavior

### Header
- **Title**: "Create New Component"
- **Close Button**: ✕ in top right, always visible
- **Action**: Click to close (unsaved changes: warn)

### Content Area
- **Max Width**: 500px
- **Padding**: 24px
- **Scrollable if**: Content exceeds viewport (rare)

### Footer
- **Buttons**: Right-aligned, 8px gap
  - **Cancel**: Secondary button, closes modal
  - **Create**: Primary button (Teal-600), submits form

### Validation
- **On Submit**:
  - Check required fields (marked with *)
  - Validate name format and uniqueness
  - Validate version format
  - Show inline errors if any field fails
  - Disable submit button until all required fields valid

### Success
- **On Create**:
  - Close modal
  - Navigate to Component Detail view
  - Show toast: "Component created successfully"

### Error
- **On Failure**:
  - Keep modal open
  - Show error message at top: "Failed to create component. Please try again."
  - Highlight problematic fields in red
  - Show retry button

---

## State Variations

### Loading State
- All buttons disabled
- Spinner in Create button
- Form fields disabled (grayed out)

### Unsaved Changes
- **Behavior**: If user clicks Close or Cancel with unsaved changes:
  - Show confirmation dialog: "Discard changes?"
  - Options: [Cancel] [Discard]

### Success State
- **Toast**: "✓ Component created"
- **Duration**: 3 seconds
- **Action**: Option to "[View Details]" in toast

---

## Keyboard Navigation

- **Tab**: Cycle through form fields
- **Shift+Tab**: Reverse cycle
- **Enter** (in name/version field): Move to next field
- **Enter** (on Create button): Submit form
- **Escape**: Close modal (confirm if unsaved changes)

## Accessibility

- **ARIA**: `role="dialog"` on modal container
- **Focus Management**: Focus trap inside modal
- **Labels**: All inputs have `<label>` associated via `htmlFor`
- **Required Indicators**: Visual asterisk + `aria-required="true"`
- **Error Association**: Error text linked via `aria-describedby`
