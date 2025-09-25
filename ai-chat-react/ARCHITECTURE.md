# Project Architecture Documentation
## LeadExec Assist - AI Chat Application

## 🏗️ Overall Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     App.tsx (Root)                       │
│                  ┌──────────┴──────────┐                │
│           DarkModeToggle        Chat Component           │
└─────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
    ChatHeader          ChatMessages          ChatInput
        │                     │                     │
    Controls            MarkdownRenderer    SuggestedActions
                              │
                        IntelligentAgent
                              │
                    ┌─────────┴─────────┐
                OpenAI API         RAG System
```

## 📊 Data Flow Architecture

### 1. **Message Flow Pipeline**
```
User Input → ChatInput Component
    ↓
useChatState Hook (State Management)
    ↓
IntelligentAgent Service (AI Processing)
    ↓
OpenAI API Call (with RAG context)
    ↓
Response Processing (Control Block Parsing)
    ↓
ChatMessages Component (Display)
    ↓
MarkdownRenderer (Formatting)
```

### 2. **State Management Flow**
```typescript
useChatState Hook
├── Local State (useState)
│   ├── currentConversation
│   ├── conversations[]
│   ├── isTyping
│   ├── isMinimized/Maximized
│   └── panelWidth
│
└── Persistence Layer
    └── localStorage (conversations history)
```

### 3. **Service Layer Architecture**
```
Services/
├── intelligentAgent.ts    // Core AI orchestration
│   ├── Message processing
│   ├── Control block parsing
│   ├── Suggested actions generation
│   └── Conversation state tracking
│
├── openaiService.ts       // API wrapper
│   ├── OpenAI client initialization
│   ├── Documentation injection
│   └── Request/response handling
│
├── rag.ts                 // Semantic search
│   ├── Index loading
│   ├── Query embedding
│   └── Context retrieval
│
├── agentRouter.ts         // Agent selection
├── helpAgent.ts           // Documentation help
├── fileProcessor.ts       // File handling
└── aiAutoMapper.ts        // Field mapping
```

## 🎨 CSS Architecture & Design System

### 1. **CSS Structure Philosophy**
```
BEM Methodology + CSS Variables
└── Component-based styling
    └── Dark mode support
        └── Responsive design
            └── Accessibility first
```

### 2. **CSS File Organization**
```css
chat.css (1600+ lines)
├── 1. Accessibility Utilities (lines 1-42)
├── 2. Markdown Styles (lines 44-600)
├── 3. CSS Variables (lines 601-680)
├── 4. Base Layout (lines 681-750)
├── 5. Component Styles (lines 751-1400)
│   ├── Chat Header
│   ├── Chat Messages
│   ├── Chat Input
│   ├── Chat Initial
│   └── Suggested Actions
└── 6. Responsive & States (lines 1400-1600)
```

### 3. **CSS Variable Architecture**

#### **Color System Hierarchy**
```css
Level 1: Brand Colors (AI Theme)
├── --ai-primary: #5D4BFF
├── --ai-primary-alt: #7565FF
└── --ai-text-emphasis: #321FDB

Level 2: Derived Colors
├── --ai-gradient-start/end
├── --ai-shadow-color
└── --ai-hover-shadow

Level 3: Component Colors
├── --ai-chat-bg (inherits from CoreUI)
├── --ai-chat-color
├── --ai-chat-border
└── --ai-chat-muted
```

#### **Spacing System**
```css
Consistent REM-based spacing:
├── 0.25rem (4px)   - Micro spacing
├── 0.5rem (8px)    - Small spacing
├── 0.75rem (12px)  - Default spacing
├── 1rem (16px)     - Medium spacing
├── 1.5rem (24px)   - Large spacing
├── 2rem (32px)     - XL spacing
└── 3rem (48px)     - XXL spacing
```

#### **Typography System**
```css
Font Stack:
Roboto → System Fonts → Fallbacks

Font Sizes:
├── 12px (0.75rem)   - Small text
├── 14px (0.875rem)  - Default
├── 16px (1rem)      - Body
├── 18px (1.125rem)  - Headers
└── 20px (1.25rem)   - Titles

Font Weights:
├── 400 - Normal
├── 500 - Medium
├── 600 - Bold
└── 700 - Extra Bold
```

### 4. **Dark Mode Architecture**
```css
Strategy: Attribute-based theming
[data-coreui-theme="dark"] {
    /* All dark mode overrides */
}

Implementation:
├── CSS Variable switching
├── Component-specific overrides
└── Accessibility preservation
```

## 🧩 Component Architecture

### 1. **Component Hierarchy**
```
App.tsx
├── DarkModeToggle
│   └── Theme state management
│
└── Chat (index.tsx)
    ├── ChatHeader
    │   ├── Title display
    │   ├── Minimize/maximize controls
    │   └── History toggle
    │
    ├── ChatInitial (Welcome Screen)
    │   ├── Logo section
    │   ├── Action cards
    │   └── Show all button
    │
    ├── ChatHistory
    │   └── Conversation list
    │
    ├── ChatMessages
    │   ├── Message bubbles
    │   ├── MarkdownRenderer
    │   └── Typing indicator
    │
    ├── ChatInput
    │   └── Textarea with send button
    │
    └── SuggestedActions
        └── Quick reply buttons
```

### 2. **Component Communication**
```
Props Flow:
├── Downward: Parent → Child (props)
├── Upward: Child → Parent (callbacks)
└── Lateral: Via useChatState hook

State Management:
├── Local: Component-specific state
├── Shared: useChatState hook
└── Global: Context (theme only)
```

## 🔄 Business Logic Flow

### 1. **Workflow Orchestration**
```
IntelligentAgent Service
├── Parse user message
├── Determine workflow phase
├── Extract information
├── Generate response
│   ├── Content generation
│   ├── Suggested actions
│   └── Control blocks
├── Update conversation state
└── Return formatted response
```

### 2. **Multi-Message Workflow Pattern**
```
Phase 1: Information Collection
    ↓ (User provides data)
Phase 2: Confirmation Display
    ↓ (User confirms)
Phase 3: Processing/Creation
    ↓ (System creates entity)
Phase 4: Success + Next Step
    ↓ (Separate messages)
Continue workflow...
```

### 3. **Control Block System**
```typescript
<CONTROL>
{
  "suggested_actions": [...],
  "conversation_state": {...},
  "mode": "processing_start" | "final"
}
</CONTROL>
```

## 🔐 Security & Performance

### 1. **Security Measures**
- API keys in environment variables
- Markdown sanitization
- No real API calls (emulation)
- Entity IDs are generated (not real)
- Limited markdown features

### 2. **Performance Optimizations**
- RAG index preloading (~5MB)
- Temperature 0.1 for consistency
- Component memoization
- Lazy loading for history
- CSS variable caching

## 📁 File Structure Logic

```
src/
├── components/         # UI Components
│   ├── Chat/          # Main chat components
│   └── common/        # Reusable components
│
├── services/          # Business logic
│   └── All AI and data services
│
├── hooks/             # React hooks
│   └── useChatState.ts
│
├── types/             # TypeScript definitions
│   └── chat.ts
│
├── styles/            # CSS files
│   └── chat.css
│
└── data/              # Static data
    ├── *.md files     # Specifications
    └── rag-index.json # Embeddings
```

## 🎯 Key Design Decisions

1. **Single Agent Architecture**: Eliminates conflicts
2. **BEM + CSS Variables**: Maintainable styling
3. **Control Blocks**: Structured AI responses
4. **Multi-message Workflows**: Natural conversation
5. **RAG Integration**: Context-aware responses
6. **TypeScript Strict Mode**: Type safety
7. **CoreUI Integration**: Professional UI
8. **Dark Mode First-class**: Accessibility

## 🚀 Development Patterns

### Reusability Pattern
```typescript
// ALWAYS check for existing component
import { ExistingComponent } from './components';
// NEVER create new if existing works
```

### CSS Variable Pattern
```css
/* ALWAYS use variables */
color: var(--ai-chat-color);
/* NEVER hardcode */
color: #212529; /* ❌ */
```

### State Management Pattern
```typescript
// ALWAYS use hook
const { state, updateState } = useChatState();
// NEVER direct state
const [state, setState] = useState(); /* ❌ */
```

---

**This architecture ensures:**
- Maintainability through clear separation
- Scalability through modular design
- Consistency through design system
- Performance through optimization
- Accessibility through standards compliance