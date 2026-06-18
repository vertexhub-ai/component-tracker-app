# Empty, Loading & Error States

## Empty State Design Principles

- **Primary message**: Clear, action-oriented headline
- **Secondary message**: Brief explanation or next steps
- **Icon**: Symbolic, not cute (no sad faces)
- **CTA**: One primary action when applicable
- **Positioning**: Vertically centered, with adequate whitespace
- **Tone**: Helpful, not dismissive

---

## Project List (Empty)

### First Visit / No Projects

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                                                                 │
│                        📋 Get started                           │
│                                                                 │
│                 Create your first project to                    │
│               begin tracking component versions                 │
│                                                                 │
│                    [+ Create Project]                           │
│                                                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Specs
- **Icon**: Folder/project icon (24px, Gray-400)
- **Headline**: "Get started" (Heading 2, 18px)
- **Body**: "Create your first project to begin tracking component versions" (Body, 14px, Gray-500)
- **Button**: Primary button "[+ Create Project]"
- **Whitespace**: Equal padding top/bottom
- **Animation**: Fade in 200ms on load

---

## Component List (Empty)

### For a Project with No Components

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                      🔧 No components yet                       │
│                                                                 │
│              Add components to start tracking                   │
│              dependencies and version history                   │
│                                                                 │
│                [+ Create Component]                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Specs
- **Icon**: Tool/component icon (24px, Gray-400)
- **Headline**: "No components yet" (Heading 2, 18px)
- **Body**: "Add components to start tracking dependencies and version history" (Body, 14px, Gray-500)
- **Button**: Primary button "[+ Create Component]"
- **Margin**: 24px top/bottom from edges
- **Animation**: Fade in 200ms

---

## Component List (Filtered with No Results)

### After Search/Filter Returns Nothing

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                   🔍 No matches found                           │
│                                                                 │
│              Try adjusting your search or filters               │
│                                                                 │
│                 [Clear Search]     [Clear Filters]              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Specs
- **Icon**: Search icon (24px, Gray-400)
- **Headline**: "No matches found" (Heading 2, 18px)
- **Body**: "Try adjusting your search or filters" (Body, 14px, Gray-500)
- **Buttons**: Two secondary buttons "[Clear Search]" and "[Clear Filters]"
- **Button Gap**: 8px between buttons
- **Alternative**: If only one filter active, show just "[Clear Filters]"

---

## Update History (Empty)

### Component with No History Yet

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                   📝 No updates yet                             │
│                                                                 │
│           This component hasn't been modified since             │
│                   its initial creation                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Specs
- **Icon**: Document/history icon (24px, Gray-400)
- **Headline**: "No updates yet" (Heading 2, 18px)
- **Body**: "This component hasn't been modified since its initial creation" (Body, 14px, Gray-500)
- **No Button**: Informational only
- **Whitespace**: 48px top/bottom

---

## Loading States

### Component List Loading

```
┌─────────────────────────────────────────────────────────────────┐
│  Components for [Grayed Project Name]          [Search] [Dims] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ▮▮▮▮▮▮▮▮▮▮ ▮▮▮▮▮ ▮▮▮ ▮▮                    [Skeleton]        │
│  ───────────────────────────────────────────────────────────── │
│  ▮▮▮▮▮▮▮▮ ▮▮▮ ▮▮▮▮▮▮ ▮▮                      [Skeleton]        │
│  ───────────────────────────────────────────────────────────── │
│  ▮▮▮▮▮▮▮▮▮▮▮▮ ▮▮▮▮ ▮▮▮ ▮▮▮                   [Skeleton]        │
│  ───────────────────────────────────────────────────────────── │
│  ▮▮▮▮▮ ▮▮▮▮▮ ▮▮▮▮▮▮▮▮▮ ▮                     [Skeleton]        │
│  ───────────────────────────────────────────────────────────── │
│  ▮▮▮▮▮▮▮ ▮▮▮▮ ▮▮ ▮▮▮▮▮                       [Skeleton]        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Specs
- **Count**: 5 placeholder rows
- **Style**: Gray-200 shimmer bars (animated)
- **Height**: 44px per row (standard row height)
- **Dividers**: Show between rows
- **Animation**: Shimmer effect (left-to-right wave) over 1.5s, looped
- **Header**: Greyed out, buttons disabled
- **Content**: No text visible, replaced with skeleton bars

### Update History Loading

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ ▮▮▮▮▮▮▮▮▮▮▮▮           [Skeleton]      │
│  ▮▮▮▮ ▮▮▮▮▮▮▮▮▮▮▮ ▮▮▮▮▮▮▮                   [Skeleton]      │
│                                                                 │
│  ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ ▮▮▮▮▮▮▮▮▮▮▮▮           [Skeleton]      │
│  ▮▮▮▮ ▮▮▮▮▮▮▮▮▮▮▮ ▮▮▮▮▮▮▮                   [Skeleton]      │
│                                                                 │
│  ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ ▮▮▮▮▮▮▮▮▮▮▮▮           [Skeleton]      │
│  ▮▮▮▮ ▮▮▮▮▮▮▮▮▮▮▮ ▮▮▮▮▮▮▮                   [Skeleton]      │
│                                                                 │
│  ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ ▮▮▮▮▮▮▮▮▮▮▮▮           [Skeleton]      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Specs
- **Count**: 4 placeholder entries
- **Structure per entry**: 1 headline bar + 2 content bars
- **Height**: 80px per entry (including gap)
- **Shimmer**: Same as list (left-to-right wave, 1.5s)
- **Animation Start**: Fade in 200ms
- **Viewport**: Full width minus padding

---

## Error States

### Network/Server Error (Generic)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                   🔴 Something went wrong                       │
│                                                                 │
│             An unexpected error occurred. Please try             │
│                         again in a moment.                      │
│                                                                 │
│                         [Retry]                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Specs
- **Icon**: Error/alert icon (24px, Red-600)
- **Headline**: "Something went wrong" (Heading 2, 18px, Gray-900)
- **Body**: "An unexpected error occurred. Please try again in a moment." (Body, 14px, Gray-600)
- **Button**: Primary button "[Retry]"
- **Whitespace**: 48px top/bottom, 32px around icon

### 404 / Not Found

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                  ⚠ Component not found                          │
│                                                                 │
│               This component may have been deleted              │
│                   or is no longer available.                    │
│                                                                 │
│                [← Back to Components]                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Specs
- **Icon**: Warning/not-found icon (24px, Yellow-600)
- **Headline**: "Component not found" (Heading 2, 18px)
- **Body**: "This component may have been deleted or is no longer available." (Body, 14px, Gray-600)
- **Button**: Secondary button "[← Back to Components]"

### Unauthorized / Permission Error

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│               🔒 Access denied                                  │
│                                                                 │
│            You don't have permission to view this.              │
│                                                                 │
│            Contact your project admin for access.               │
│                                                                 │
│                 [← Back to Projects]                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Specs
- **Icon**: Lock icon (24px, Red-600)
- **Headline**: "Access denied" (Heading 2, 18px)
- **Body**: "You don't have permission to view this. Contact your project admin for access." (Body, 14px, Gray-600)
- **Button**: Secondary button "[← Back to Projects]"

### Validation Error (Form)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ⚠ Please fix the errors below                                  │
│                                                                 │
│  Component Name                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ auth-lib                      [Red Border: 2px]          │  │
│  └──────────────────────────────────────────────────────────┘  │
│  🔴 Name must be unique within this project                    │
│                                                                 │
│  Version                                                        │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ invalid-version               [Red Border: 2px]          │  │
│  └──────────────────────────────────────────────────────────┘  │
│  🔴 Invalid version format. Expected X.Y.Z                     │
│                                                                 │
│                                 [Cancel] [Save]                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Specs
- **Alert Banner**: Red-50 background, Red-600 border left (3px)
- **Message**: "Please fix the errors below" (Body, 14px, Red-700)
- **Field Errors**: Red-600 border (2px), error text below field (Label, 12px, Red-600)
- **Icon on Error Text**: Small error icon (12px, Red-600)
- **Submit Button**: Disabled (Gray-400 text, Gray-300 background) until errors cleared

---

## Loading Indicators

### Inline Spinner (Button)
- **Position**: Left side of button text
- **Icon**: Rotating circle (16px, Teal-600)
- **Speed**: 1 rotation per 1 second
- **Gap**: 8px between spinner and text

### Page-Level Spinner
- **Icon**: Larger spinner (32px, Teal-600)
- **Position**: Centered in available space
- **Text Below**: "Loading..." (optional, Gray-500)
- **Duration**: Fade in 200ms when shown

### Toast Message (Success/Error)
- **Success**: Green-600 background, white text, checkmark icon
- **Error**: Red-600 background, white text, error icon
- **Position**: Bottom right corner, 16px from edges
- **Padding**: 12px 16px
- **Duration**: 3 seconds (auto-dismiss)
- **Action**: Optional close button (✕)

---

## Accessibility Considerations

- **ARIA Live**: Use `aria-live="polite"` for loading status changes
- **ARIA Busy**: Use `aria-busy="true"` while loading
- **Focus Management**: Keep focus on relevant element during state transitions
- **Announcements**: Screen readers should announce empty/error state title
- **Error Association**: Link error messages to inputs via `aria-describedby`
- **Reduced Motion**: Skip shimmer animation when `prefers-reduced-motion: reduce`
