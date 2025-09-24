# Development Guidelines - LeadExec Copilot

## 🎨 CRITICAL: Reuse Existing Components and Styles

### Core Principle
**ALL new code MUST leverage existing components, CSS variables, and established patterns. Do not reinvent what already exists.**

## 📦 Existing Components to Reuse

### Chat Components (`/src/components/Chat/`)
- `ChatHeader` - Header with controls and branding
- `ChatHistory` - Conversation history management
- `ChatInitial` - Initial welcome screen with action cards
- `ChatInput` - Message input component
- `ChatMessages` - Message display with markdown support
- `SuggestedActions` - Quick reply buttons
- `index.tsx` - Main chat orchestration

### Common Components (`/src/components/common/`)
- `SearchBox` - Search functionality
- `PanelHeader` - Reusable panel headers

### Other Components
- `MarkdownRenderer` - Chat-optimized markdown rendering
- `DarkModeToggle` - Theme switching
- `FileUpload` - File upload functionality

## 🎨 CSS Variables - MUST USE

### Color System Variables
```css
/* Primary AI Colors */
--ai-primary: #5D4BFF;          /* Primary purple */
--ai-primary-alt: #7565FF;      /* Secondary purple */
--ai-text-emphasis: #321FDB;    /* Darkest purple */
--ai-border-subtle: #A49AFF;    /* Light purple borders */
--ai-bg-subtle: #C4BEFF;        /* Subtle background */
--ai-bg-subtle-alpha: rgba(196, 190, 255, 0.3);

/* Gradient Variables */
--ai-gradient-start: var(--ai-primary-alt);
--ai-gradient-end: var(--ai-primary);
--ai-shadow-color: rgba(93, 75, 255, 0.25);
--ai-hover-shadow: rgba(93, 75, 255, 0.3);

/* Chat-specific Variables */
--ai-chat-bg: var(--cui-body-bg, #ffffff);
--ai-chat-color: var(--cui-body-color, #212529);
--ai-chat-border: var(--cui-border-color, #dee2e6);
--ai-chat-muted: var(--cui-gray-600, #6c757d);
--ai-chat-hover: var(--cui-gray-100, #f8f9fa);
--ai-chat-focus-border: var(--cui-purple, #6f42c1);
--ai-chat-focus-shadow: 0 0 0 0.25rem rgba(111, 66, 193, 0.25);
```

### Spacing Variables
```css
--ai-chat-padding: 1rem;
--ai-chat-message-gap-horizontal: 0.75rem;
--ai-chat-message-gap-vertical: 1rem;
--ai-chat-bubble-padding-y: 0.625rem;
--ai-chat-bubble-padding-x: 0.75rem;
```

### Size Variables
```css
--ai-chat-header-height: 3.5rem;
--ai-chat-footer-height: 4.5rem;
--ai-chat-avatar-size: 2rem;
--ai-chat-button-size: 2rem;
--ai-chat-input-min-height: 2.5rem;
--ai-chat-input-max-height: 10rem;
```

### Typography Variables
```css
--ai-chat-font-family: var(--cui-font-family-sans-serif);
--ai-chat-font-size: var(--cui-font-size-sm, 0.875rem);
--ai-chat-line-height: var(--cui-line-height-base, 1.5);
```

## 🏗️ Existing Architecture Patterns

### State Management
- Use `useChatState` hook for chat state
- Conversation state preserved across messages
- Local storage for persistence

### Service Layer
- `OpenAIService` - OpenAI API wrapper
- `IntelligentAgent` - Core AI agent logic
- `RagService` - RAG implementation
- `FileProcessor` - File handling
- `AIAutoMapper` - Field mapping

### Workflow Patterns
1. Multi-message workflows (separate messages per phase)
2. Suggested actions for user choices
3. Processing states with typing indicators
4. Entity links in success messages

## 📋 Development Rules

### 1. Component Reusability
```tsx
// ❌ BAD - Creating new component
const MyNewButton = () => <button>Click</button>

// ✅ GOOD - Reusing existing patterns
<button className="ai-chat__action-card">
  <div className="ai-chat__action-card-icon">
    <i className="cil-user-plus" />
  </div>
  <div className="ai-chat__action-card-content">
    <h3 className="ai-chat__action-card-title">Title</h3>
    <p className="ai-chat__action-card-desc">Description</p>
  </div>
</button>
```

### 2. CSS Variable Usage
```css
/* ❌ BAD - Hardcoded colors */
.my-component {
  color: #6f42c1;
  background: #f8f9fa;
}

/* ✅ GOOD - Using variables */
.my-component {
  color: var(--ai-chat-focus-border);
  background: var(--ai-chat-hover);
}
```

### 3. CoreUI Integration
- Always use CoreUI components when available
- Leverage CoreUI utility classes
- Maintain CoreUI theming consistency

### 4. Dark Mode Support
```css
/* Always provide dark mode styles */
[data-coreui-theme="dark"] .my-component {
  background: var(--ai-chat-bg);
  color: var(--ai-chat-color);
}
```

## 🔄 Workflow Implementation

### Follow Existing Patterns from `critical-notes.md`
- Message flow separation rules
- Processing sequence nuances
- Suggested actions patterns
- Entity link formats
- Default behaviors

### Use Established Specifications
- `client-create-flow.md` - Client setup workflows
- `delivery-api.md` - API schemas
- `knowledgebase.md` - Documentation
- `agent-instructions.md` - AI behavior

## 🚀 Before Creating New Code

### Checklist
- [ ] Check if component already exists
- [ ] Review existing CSS variables
- [ ] Look for similar patterns in codebase
- [ ] Check CoreUI components
- [ ] Review critical-notes.md for nuances
- [ ] Verify dark mode support
- [ ] Test with existing workflows

### Component Discovery
```bash
# Find existing components
grep -r "export.*Component" src/components/

# Find CSS classes
grep -r "ai-chat__" src/styles/

# Find CSS variables
grep -r "--ai-" src/styles/
```

## 🎯 Key Files to Review

### Before ANY Development
1. `/src/styles/chat.css` - All CSS variables and classes
2. `/src/components/Chat/` - All chat components
3. `/src/data/critical-notes.md` - Implementation nuances
4. `/src/types/chat.ts` - TypeScript interfaces
5. `/src/hooks/useChatState.ts` - State management

### For Workflow Changes
1. `/src/data/client-create-flow.md`
2. `/src/data/agent-instructions.md`
3. `/src/services/intelligentAgent.ts`

## ⚠️ Common Mistakes to Avoid

1. **Creating new color values** - Use existing CSS variables
2. **Building new components** - Check if it exists first
3. **Ignoring dark mode** - Always support both themes
4. **Hardcoding sizes** - Use size variables
5. **Custom state management** - Use useChatState
6. **New workflow patterns** - Follow critical-notes.md

## 📝 Code Style Requirements

### React Components
- Functional components with TypeScript
- Use existing prop interfaces
- Follow naming conventions

### CSS Classes
- Use BEM-style naming: `ai-chat__[element]--[modifier]`
- Leverage existing utility classes
- Maintain specificity patterns

### TypeScript
- Strict type checking
- Use existing interfaces from `/src/types/`
- Proper error handling

## 🔍 Testing Checklist

Before submitting changes:
- [ ] Components reuse existing patterns
- [ ] CSS uses established variables
- [ ] Dark mode works correctly
- [ ] Responsive design maintained
- [ ] Accessibility preserved
- [ ] Workflows follow specifications
- [ ] TypeScript types correct

## 💡 Quick Reference

### Import Existing Components
```tsx
import { ChatHeader } from './components/Chat/ChatHeader';
import { ChatMessages } from './components/Chat/ChatMessages';
import { SuggestedActions } from './components/Chat/SuggestedActions';
import { MarkdownRenderer } from './components/MarkdownRenderer';
```

### Use Existing Hooks
```tsx
import { useChatState } from './hooks/useChatState';
const { state, updateState, addMessage } = useChatState();
```

### Apply Existing Styles
```tsx
<div className="ai-chat__action-card ai-chat__action-card--primary">
<button className="ai-chat__tool-pill">
<div className="ai-chat__logo-section">
```

---

**Remember: The codebase already has excellent patterns, components, and styles. Your job is to USE them, not recreate them.**