# Planning Guide

A modern, visually striking portfolio website that showcases professional projects with Firebase-hosted images and direct LinkedIn integration for each project.

**Experience Qualities**:
1. **Professional** - The portfolio should exude competence and attention to detail, making a strong first impression on potential employers or clients
2. **Immersive** - Project showcases should draw visitors in with rich imagery and smooth interactions that highlight the work
3. **Effortless** - Navigation and information discovery should feel natural and intuitive, requiring minimal cognitive load

**Complexity Level**: Light Application (multiple features with basic state)
  - The site manages project data, integrates with Firebase for images, handles external LinkedIn links, and provides admin capabilities for the owner

## Essential Features

### Project Gallery Display
- **Functionality**: Grid layout displaying all portfolio projects with images, titles, and descriptions
- **Purpose**: Provides immediate visual impact and allows visitors to browse work quickly
- **Trigger**: Automatically loads on page visit
- **Progression**: Page loads → Projects fetch from KV storage → Grid renders with images from Firebase → Hover reveals project details
- **Success criteria**: All projects visible, images load smoothly, responsive grid adapts to screen sizes

### Project Detail View
- **Functionality**: Click on any project to see full details including description, technologies used, and LinkedIn link
- **Purpose**: Allows deeper engagement with individual projects and provides context
- **Trigger**: User clicks on a project card
- **Progression**: Click project card → Modal/detail view opens → Full project information displays → LinkedIn button prominently shown → Click LinkedIn redirects to profile
- **Success criteria**: Smooth transition to detail view, all information clearly displayed, LinkedIn redirect works

### Admin Project Management
- **Functionality**: Portfolio owner can add, edit, and delete projects
- **Purpose**: Allows portfolio owner to keep content current without code changes
- **Trigger**: Owner visits the site (detected via spark.user().isOwner)
- **Progression**: Owner loads page → Admin controls visible → Click "Add Project" → Form appears → Enter project details and Firebase image URL → Save → Project appears in gallery
- **Success criteria**: Only owner sees admin controls, projects persist via useKV, CRUD operations work smoothly

### Firebase Image Integration
- **Functionality**: Each project references images stored in Firebase Storage via URL
- **Purpose**: Separates image hosting from application, allows easy image management
- **Trigger**: When displaying projects or adding new ones
- **Progression**: Admin enters Firebase Storage URL → URL saved with project → Image displays in gallery → Optimized loading with placeholders
- **Success criteria**: Images load reliably, broken image states handled gracefully, URLs persist correctly

## Edge Case Handling

- **Empty Portfolio**: First-time visitors see an elegant empty state with placeholder content and invitation message (admin sees "Add your first project" CTA)
- **Broken Image URLs**: Display placeholder image or gradient background if Firebase URL fails to load
- **Long Project Titles/Descriptions**: Text truncates elegantly with ellipsis, full content visible in detail view
- **Mobile Experience**: Touch-optimized interactions, stacked layout for smaller screens, accessible buttons
- **No LinkedIn URL**: Project cards show alternative contact method or hide LinkedIn button gracefully

## Design Direction

The design should feel modern, minimal, and sophisticated—like a high-end design agency portfolio. Clean lines, generous white space, and subtle animations create an effortless browsing experience that puts the work front and center.

## Color Selection

Custom palette with a sophisticated, contemporary feel that works well for showcasing visual work.

- **Primary Color**: Deep midnight blue (oklch(0.25 0.05 250)) - Communicates professionalism and creativity, used for primary CTAs and accents
- **Secondary Colors**: Slate gray (oklch(0.45 0.01 250)) for supporting text and borders, maintaining visual hierarchy without harshness
- **Accent Color**: Vibrant cyan (oklch(0.70 0.15 200)) - Modern, eye-catching highlight for interactive elements and project highlights
- **Foreground/Background Pairings**:
  - Background (Pure white oklch(1 0 0)): Deep charcoal text (oklch(0.15 0 0)) - Ratio 14.5:1 ✓
  - Card (Soft gray oklch(0.98 0 0)): Deep charcoal text (oklch(0.15 0 0)) - Ratio 14.2:1 ✓
  - Primary (Midnight blue oklch(0.25 0.05 250)): White text (oklch(1 0 0)) - Ratio 12.8:1 ✓
  - Secondary (Slate gray oklch(0.45 0.01 250)): White text (oklch(1 0 0)) - Ratio 5.2:1 ✓
  - Accent (Vibrant cyan oklch(0.70 0.15 200)): Deep charcoal text (oklch(0.15 0 0)) - Ratio 9.1:1 ✓
  - Muted (Light gray oklch(0.96 0 0)): Medium gray text (oklch(0.50 0 0)) - Ratio 5.8:1 ✓

## Font Selection

Typography should be clean, contemporary, and highly readable with a touch of personality.

- **Primary Font**: Inter - A versatile, modern sans-serif with excellent readability at all sizes, perfect for both headings and body text
- **Secondary Font**: JetBrains Mono - For technical details like technology tags, adding a subtle tech-forward aesthetic

- **Typographic Hierarchy**:
  - H1 (Portfolio Title): Inter Bold/48px/tight letter-spacing (-0.02em)
  - H2 (Section Headers): Inter SemiBold/32px/tight letter-spacing (-0.01em)
  - H3 (Project Titles): Inter SemiBold/24px/normal letter-spacing
  - Body (Descriptions): Inter Regular/16px/relaxed line-height (1.6)
  - Caption (Tech Tags): JetBrains Mono Regular/14px/normal letter-spacing
  - Button Text: Inter Medium/16px/slight letter-spacing (0.01em)

## Animations

Animations should be subtle and purposeful, enhancing the premium feel without distracting from the portfolio content.

- **Purposeful Meaning**: Motion communicates polish and attention to detail while guiding attention to interactive elements
- **Hierarchy of Movement**: 
  - Primary: Project card hover effects (subtle lift and shadow increase)
  - Secondary: Modal/dialog open/close transitions (smooth scale and fade)
  - Tertiary: Button hover states (gentle color transitions)
  - Ambient: Smooth scroll behavior, lazy-loaded image fades

## Component Selection

- **Components**:
  - Dialog: For project detail views with full information
  - Card: For individual project items in the grid
  - Button: For CTAs (LinkedIn links, admin actions) with primary/secondary variants
  - Input/Textarea: For admin forms when adding/editing projects
  - Badge: For technology tags on projects
  - Form: For structured project creation/editing
  - Alert Dialog: For delete confirmations
  - Skeleton: For loading states while projects fetch
  
- **Customizations**:
  - Custom project grid component with masonry-style layout
  - Hero section with animated gradient background
  - Floating admin action button (FAB) for owner
  - Custom image component with lazy loading and blur-up effect
  
- **States**:
  - Buttons: Subtle scale on hover (1.02x), deeper color on active, disabled state grayed with cursor-not-allowed
  - Cards: Lift effect on hover (translateY -4px), shadow intensity increase, border highlight
  - Inputs: Accent color border on focus, subtle glow effect, validation state colors
  - Images: Skeleton → blur placeholder → sharp image fade-in
  
- **Icon Selection**:
  - Plus: Add new project
  - Pencil: Edit project
  - Trash: Delete project
  - LinkedinLogo: LinkedIn redirect
  - ArrowUpRight: External link indicator
  - X: Close modals/dialogs
  
- **Spacing**:
  - Page margins: px-6 md:px-12 lg:px-24
  - Section gaps: gap-16 md:gap-24
  - Card padding: p-6
  - Grid gaps: gap-6 md:gap-8
  - Button padding: px-6 py-3
  
- **Mobile**:
  - Grid: 1 column on mobile, 2 on tablet, 3-4 on desktop
  - Hero text: Smaller scale on mobile (32px vs 48px)
  - Admin FAB: Fixed position bottom-right on mobile
  - Dialogs: Full-screen on mobile, centered modal on desktop
  - Touch targets: Minimum 44x44px for all interactive elements
