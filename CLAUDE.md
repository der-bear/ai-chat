# CLAUDE.md - Critical Project Memory
## LeadExec Copilot - AI Chat Application

### 🔴 ABSOLUTE RULES - NEVER VIOLATE

1. **ALWAYS USE EXISTING COMPONENTS** - Never create new ones
2. **ALWAYS USE EXISTING CSS VARIABLES** - Never hardcode colors/sizes
3. **ALWAYS FOLLOW EXISTING PATTERNS** - Never reinvent workflows
4. **ALWAYS MAINTAIN DARK MODE SUPPORT** - Both themes required
5. **ALWAYS USE useChatState HOOK** - For state management
6. **FIGMA DESIGNS = PRECISE REPRODUCTION** - Match look & feel exactly
   - When implementing Figma designs, reproduce visual appearance PRECISELY
   - BUT use existing project components, logic, and CSS architecture
   - Adapt Figma visuals to existing code patterns, not vice versa
7. **COREUI IS THE FOUNDATION** - We build ON TOP of CoreUI
   - CoreUI React components are the base
   - CoreUI design tokens power our CSS variables
   - CoreUI theming system handles dark/light modes
   - Our AI theme EXTENDS CoreUI, never replaces it

### 📦 EXISTING COMPONENTS TO REUSE

#### Chat Components (`/src/components/Chat/`)
```tsx
ChatHeader.tsx       // Header with controls and branding
ChatHistory.tsx      // Conversation history management
ChatInitial.tsx      // Welcome screen with action cards
ChatInput.tsx        // Message input component
ChatMessages.tsx     // Message display with markdown
SuggestedActions.tsx // Quick reply buttons (2-6 choices)
index.tsx           // Main chat orchestration
```

#### Other Components
```tsx
MarkdownRenderer.tsx // Chat-optimized markdown rendering
DarkModeToggle.tsx  // Theme switching component
FileUpload.tsx      // File upload functionality
```

#### Common Components (`/src/components/common/`)
```tsx
SearchBox.tsx       // Search functionality
PanelHeader.tsx     // Reusable panel headers
```

### 🏛️ COREUI FOUNDATION - ESSENTIAL UNDERSTANDING

#### CoreUI is Our Base Layer
```
CoreUI React (@coreui/react: ^5.8.0)
    ↓
Provides base components, utilities, design tokens
    ↓
We EXTEND with AI theme (purple colors, gradients)
    ↓
Result: Professional UI with custom branding
```

#### CoreUI Components We Use
```typescript
// From @coreui/react
import { CButton, CCard, CModal, ... } from '@coreui/react';

// From @coreui/icons-react
import { CIcon } from '@coreui/icons-react';
import * as icons from '@coreui/icons';
```

#### CoreUI CSS Variables We Inherit
```css
/* CoreUI provides these, we use them */
--cui-body-bg                /* Background colors */
--cui-body-color             /* Text colors */
--cui-border-color           /* Border colors */
--cui-gray-[100-900]         /* Gray scale */
--cui-primary/secondary/etc  /* Theme colors */
--cui-font-family-sans-serif /* Typography */
--cui-font-size-[xs/sm/base] /* Font sizes */
--cui-border-radius          /* Border radius */
--cui-box-shadow-[sm/lg]     /* Shadows */
```

#### CoreUI Dark Mode System
```css
/* CoreUI handles this automatically */
[data-coreui-theme="dark"] {
    /* All dark mode variables switch */
}

/* We extend it with our overrides */
[data-coreui-theme="dark"] .ai-chat__component {
    /* Our custom dark mode styles */
}
```

#### CoreUI Icons We Use
```css
/* Icon classes from @coreui/icons */
.cil-user-plus    /* Add user */
.cil-people        /* Multiple users */
.cil-chart-pie     /* Analytics */
.cil-send          /* Send message */
.cil-copy          /* Copy/duplicate */
```

### 🎨 CSS APPROACH - DATA ATTRIBUTES & VARIABLES

#### Responsive Layout Pattern (SMART WAY - NO !IMPORTANT)
```css
/* Use CSS variables for dynamic layouts */
.component-wrapper {
  --property: default-value;
}

/* Change variables via data attributes */
.component-wrapper[data-layout="compact"] {
  --property: compact-value;
}

/* Apply variables to child elements */
.component {
  property: var(--property);
}
```

#### Example: Action Cards Responsive Design
```typescript
// TypeScript: Detect container size with ResizeObserver
const [isCompact, setIsCompact] = useState(false);
const wrapperRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const checkWidth = () => {
    if (wrapperRef.current) {
      setIsCompact(wrapperRef.current.offsetWidth <= 640);
    }
  };

  const resizeObserver = new ResizeObserver(checkWidth);
  if (wrapperRef.current) {
    resizeObserver.observe(wrapperRef.current);
  }

  return () => resizeObserver.disconnect();
}, []);

// Apply data attribute
<div ref={wrapperRef} data-layout={isCompact ? 'compact' : 'default'}>
```

```css
/* CSS: Define layout variables */
.ai-chat__initial-cards-wrapper {
  /* Default vertical layout */
  --card-flex-direction: column;
  --card-align-items: flex-start;
  --card-padding: 1rem;
  --card-icon-size: 1.5rem;
  --card-desc-line-clamp: 2;
}

/* Compact mode via data attribute */
.ai-chat__initial-cards-wrapper[data-layout="compact"] {
  --card-flex-direction: row;
  --card-align-items: center;
  --card-padding: 0.75rem 1rem;
  --card-icon-size: 1.25rem;
  --card-desc-line-clamp: 1;
}

/* Apply to elements - NO !important needed */
.ai-chat__action-card--vertical {
  flex-direction: var(--card-flex-direction);
  align-items: var(--card-align-items);
  padding: var(--card-padding);
}

.ai-chat__action-card-icon {
  width: var(--card-icon-size);
  height: var(--card-icon-size);
}
```

#### Benefits Over !important
- **Cleaner specificity** - Variables cascade naturally
- **Maintainable** - Single source of truth for values
- **Flexible** - Easy to add more layout modes
- **Testable** - Can verify data attributes in tests
- **Framework friendly** - Works with CoreUI/any CSS
- **Performance** - ResizeObserver > media queries for containers

### 🎨 CSS VARIABLES - MUST USE

#### Typography - MAINTAIN CONSISTENCY
```css
/* ALWAYS use these font variables - NEVER hardcode */
/* Font stack: System fonts first, then Roboto, then fallbacks */
--ai-chat-font-family: -apple-system, Roboto, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
--ai-chat-font-size: var(--cui-font-size-sm, 0.875rem);     /* 14px - base size */
--ai-chat-line-height: var(--cui-line-height-base, 1.5);

/* Font sizes - USE THESE, don't create new ones */
--cui-font-size-xs: 0.75rem;    /* 12px - small text */
--cui-font-size-sm: 0.875rem;   /* 14px - default */
--cui-font-size-base: 1rem;     /* 16px - larger text */
--cui-font-size-lg: 1.125rem;   /* 18px - headers */
--cui-font-size-xl: 1.25rem;    /* 20px - titles */

/* Font weights - CONSISTENT across app */
font-weight: 400;  /* Normal text */
font-weight: 500;  /* Medium emphasis */
font-weight: 600;  /* Bold/headers */
font-weight: 700;  /* Extra bold (rare) */
```

#### Primary AI Colors
```css
--ai-primary: #5D4BFF;           /* Primary purple */
--ai-primary-alt: #7565FF;       /* Secondary purple */
--ai-text-emphasis: #321FDB;     /* Darkest purple */
--ai-border-subtle: #A49AFF;     /* Light purple borders */
--ai-bg-subtle: #C4BEFF;         /* Subtle background */
--ai-bg-subtle-alpha: rgba(196, 190, 255, 0.3);
```

#### Gradient Variables
```css
--ai-gradient-start: var(--ai-primary-alt);
--ai-gradient-end: var(--ai-primary);
--ai-shadow-color: rgba(93, 75, 255, 0.25);
--ai-hover-shadow: rgba(93, 75, 255, 0.3);
```

#### Chat-Specific Variables
```css
--ai-chat-bg: var(--cui-body-bg);
--ai-chat-color: var(--cui-body-color);
--ai-chat-border: var(--cui-border-color);
--ai-chat-muted: var(--cui-gray-600);
--ai-chat-hover: var(--cui-gray-100);
--ai-chat-focus-border: var(--cui-purple);
--ai-chat-focus-shadow: 0 0 0 0.25rem rgba(111, 66, 193, 0.25);
```

### 🏗️ SERVICE LAYER - REUSE

```typescript
intelligentAgent.ts  // Core AI agent with workflow orchestration
openaiService.ts    // OpenAI API wrapper
rag.ts             // RAG implementation with semantic search
fileProcessor.ts   // File handling and processing
aiAutoMapper.ts    // Intelligent field mapping
agentRouter.ts     // Agent routing logic
helpAgent.ts       // Documentation help agent
intentClassifier.ts // Intent classification
```

### 📋 WORKFLOW PATTERNS TO FOLLOW

#### Multi-Message Workflow System
- **Each phase = separate message** (NEVER combine)
- **Programmatic separation** of combined phases
- **Natural conversation rhythm**
- **Entity success = standalone message**

#### Suggested Actions Pattern
```typescript
// Control block format (NEVER show [Actions] in text)
<CONTROL>
{
  "suggested_actions": [
    {"id": "yes", "text": "Yes"},      // SHORT labels only
    {"id": "no", "text": "No"}         // Never verbose
  ],
  "mode": "final"
}
</CONTROL>
```

#### Entity Creation Pattern
```typescript
// Message 1: Creation success
"Client created successfully: [Pacific Coast (ID: 45782)](#)"

// User responds

// Message 2: Next step (NEVER combine with success)
"Great! Now I need your industry information..."
```

### 🚫 CRITICAL PROHIBITIONS

#### UI Prohibitions
- **NEVER show buttons for lead type IDs** (e.g., [54353] [98999])
- **NEVER show "Required Fields:" bullets** before mapping
- **NEVER combine entity success with next steps**
- **NEVER show [Actions] text** instead of control blocks
- **NEVER use verbose button labels** ("Yes, proceed" → "Yes")

#### Code Prohibitions
- **NEVER create new components** if existing ones work
- **NEVER hardcode colors** - use CSS variables
- **NEVER ignore dark mode** - both themes required
- **NEVER bypass useChatState** for state management
- **NEVER create new patterns** - follow existing ones

### 🔄 WORKFLOW ACCELERATION RULES

#### Information Sufficiency Assessment
- **100% sufficient**: Create immediately, no questions
- **80% sufficient**: Create + ask 1-2 clarifications
- **50% sufficient**: Create client, ask method preference
- **<50% sufficient**: Follow standard step-by-step

#### Batch Creation Priority
1. **CLIENT FIRST** - Always create before method/account
2. **METHOD SECOND** - Create if info sufficient
3. **ACCOUNT LAST** - Create with targeting/pricing

#### Smart Defaults
```typescript
// Client Defaults
Status: "Inactive"        // For testing safety
Automation: "Price-based"  // Default sorting
DailyMax: 50             // Default limit

// Credentials
Username: "{company_slug}{year}"  // e.g., "pacific2024"
Password: "{prefix}-{8chars}"     // e.g., "PCL-9k3m2Sx7"

// Delivery Defaults
Portal: No config needed
Testing: Enabled by default
```

### 📁 KEY SPECIFICATION FILES

```bash
/src/data/
├── agent-instructions.md    # AI behavior rules (30KB)
├── client-create-flow.md    # Workflow specification (355 lines)
├── critical-notes.md        # Implementation nuances
├── delivery-api.md          # API schemas
├── knowledgebase.md         # Documentation
└── rag-index.json          # Embeddings (~5MB, 106 chunks)
```

### 🎯 DEVELOPMENT CHECKLIST

Before ANY code:
- [ ] Check existing components in `/src/components/`
- [ ] Review CSS variables in `/src/styles/chat.css`
- [ ] Look for patterns in `critical-notes.md`
- [ ] Verify dark mode support
- [ ] Use `useChatState` for state
- [ ] Follow workflow specifications

### 💡 QUICK IMPORTS

```tsx
// Components
import { ChatHeader, ChatMessages, ChatInput } from './components/Chat';
import { SuggestedActions } from './components/Chat/SuggestedActions';
import { MarkdownRenderer } from './components/MarkdownRenderer';

// Hooks
import { useChatState } from './hooks/useChatState';

// Services
import { IntelligentAgent } from './services/intelligentAgent';
import { OpenAIService } from './services/openaiService';
import { RagService } from './services/rag';
```

### 🏢 PROJECT ARCHITECTURE

```
Single Intelligent Agent System
├── No agent conflicts (single agent)
├── Smart orchestration
├── Multi-message workflows
├── Suggested actions (2-6 choices)
├── Markdown with full-width tables
├── RAG with semantic search
└── Specification-driven behavior
```

### ⚡ PERFORMANCE PATTERNS

- **RAG Index**: ~5MB, 106 chunks for semantic search
- **Temperature**: 0.1 for consistent AI behavior
- **Message Separation**: 800ms typing delay
- **Panel Width**: 320-600px range, resizable
- **Dark Mode**: CSS variables auto-switch

### 🔐 SECURITY PATTERNS

- **API Key**: In `.env`, never commit
- **Markdown**: Limited features for chat safety
- **Entity IDs**: 4-5 digit realistic format
- **URLs**: Entity links use `#` (not real)
- **Credentials**: Auto-generated patterns

### 📝 NAMING CONVENTIONS

#### CSS Classes
```css
.ai-chat__[element]           /* Main element */
.ai-chat__[element]--[modifier]  /* Modified state */
.ai-chat__action-card--primary   /* Example */
```

#### TypeScript Interfaces
```typescript
interface Message { ... }
interface Conversation { ... }
interface ChatState { ... }
interface SuggestedAction { ... }
```

#### File Names
```bash
ChatComponent.tsx    # PascalCase for components
useChatState.ts     # camelCase for hooks
intelligentAgent.ts # camelCase for services
chat.css           # lowercase for styles
```

### 🎯 CONSISTENCY REQUIREMENTS

#### Typography Consistency
- **ALWAYS use font variables** - Never hardcode font families
- **ALWAYS use size variables** - Never create new font sizes
- **MAINTAIN weight hierarchy** - 400 normal, 500 medium, 600 bold
- **CONSISTENT line-height** - Always use --ai-chat-line-height

#### Spacing Consistency
```css
/* ONLY use these spacing values */
0.25rem  /* 4px - xs */
0.5rem   /* 8px - sm */
0.75rem  /* 12px - base */
1rem     /* 16px - md */
1.5rem   /* 24px - lg */
2rem     /* 32px - xl */
3rem     /* 48px - xxl */
```

#### Border & Radius Consistency
```css
/* ALWAYS use these variables */
--ai-chat-border-width: var(--cui-border-width, 1px);
--ai-chat-border-radius: var(--cui-border-radius, 0.375rem);     /* 6px */
--ai-chat-border-radius-sm: var(--cui-border-radius-sm, 0.25rem); /* 4px */
border-radius: 8px;    /* Cards */
border-radius: 16px;   /* Logo/badges */
border-radius: 50%;    /* Circles */
```

#### Shadow Consistency
```css
/* Use ONLY these shadows */
--ai-chat-shadow: var(--cui-box-shadow-lg);
--ai-chat-focus-shadow: 0 0 0 0.25rem rgba(111, 66, 193, 0.25);
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);  /* Cards */
box-shadow: 0px 21px 19.1px -7px var(--ai-shadow-color); /* Logo */
```

#### Color Consistency Rules
- **NEVER mix color systems** - Use AI colors OR CoreUI, not both
- **MAINTAIN opacity patterns** - 0.1, 0.25, 0.3, 0.5, 0.6
- **CONSISTENT hover states** - Always use --ai-chat-hover
- **PRESERVE dark mode** - Every color must have dark variant

### 🚀 CRITICAL SUCCESS FACTORS

1. **Reuse > Create** - Always check existing first
2. **Variables > Values** - Never hardcode
3. **Patterns > Innovation** - Follow established
4. **Specs > Assumptions** - Read .md files
5. **Both Themes** - Dark/light always work
6. **Consistency > Creativity** - Match existing styles exactly

### 🎨 FIGMA IMPLEMENTATION STRATEGY

#### When Implementing Figma Designs:
1. **ALWAYS INVESTIGATE VARIANTS**: Use Figma MCP tools to analyze ALL component states and layout modes
   - `mcp__figma-remote-mcp__get_screenshot` for visuals
   - `mcp__figma-remote-mcp__get_metadata` for component structure
   - Check all states: default, hover, active/selected, disabled
   - Check all layout modes: vertical, horizontal, list, etc.

2. **VISUAL FIDELITY**: Match Figma look & feel EXACTLY
   - Colors, spacing, typography, shadows
   - Layout and positioning
   - Interactive states and transitions

3. **CODE REUSABILITY**: Use existing architecture
   - Map Figma elements to existing components
   - Apply Figma styles using CSS variables
   - Extend existing classes, don't create new systems

4. **IMPLEMENTATION APPROACH**:
   ```
   Figma Design → Investigate ALL Variants via MCP
        ↓
   Map to Existing Components
        ↓
   Apply Styles Using CSS Variables
        ↓
   Extend with Minimal New CSS (BEM naming)
        ↓
   Maintain All Project Patterns
   ```

5. **PRIORITY ORDER**:
   - Figma visual accuracy: 100%
   - Code reuse: Maximum
   - New code: Minimum
   - Consistency: Absolute

### 🎨 CSS THEMING PATTERN - CRITICAL

#### The AI Chat Theming System:
```css
/* STEP 1: Define variables at .ai-chat level (light mode defaults) */
.ai-chat {
    --ai-chat-bg: var(--cui-body-bg, #ffffff);
    --ai-chat-color: var(--cui-body-color, #212529);
    --ai-chat-border: var(--cui-border-color, #dee2e6);
    --ai-chat-hover: var(--cui-gray-100, #f8f9fa);
    --ai-chat-muted: var(--cui-gray-600, #6c757d);
}

/* STEP 2: Override variables for dark mode */
[data-coreui-theme="dark"] .ai-chat {
    --ai-chat-bg: var(--cui-gray-900, #212529);
    --ai-chat-color: var(--cui-gray-100, #f8f9fa);
    --ai-chat-border: var(--cui-gray-700, #495057);
    --ai-chat-hover: var(--cui-gray-800, #343a40);
    --ai-chat-muted: var(--cui-gray-400, #ced4da);
}

/* STEP 3: Components use variables ONLY */
.ai-chat__component {
    background: var(--ai-chat-bg);  /* Auto-switches in dark mode */
    color: var(--ai-chat-color);
    border-color: var(--ai-chat-border);
}
```

#### Theming Rules:
- **NEVER hardcode colors** in component styles
- **NEVER write separate dark mode rules** for each component
- **ALWAYS define variables** at `.ai-chat` level
- **ALWAYS use CoreUI tokens** with fallbacks: `var(--cui-gray-900, #212529)`
- **Components automatically adapt** to theme changes

### 📌 REMEMBER FOREVER

**This is a sophisticated, production-ready application with:**
- Excellent existing patterns
- Comprehensive component library
- Well-defined CSS variable system
- Robust service architecture
- Clear workflow specifications

**Your role: USE what exists to PRECISELY reproduce Figma designs.**

**CRITICAL**: When Figma designs are provided, the visual output must match EXACTLY while leveraging all existing code infrastructure.

---
*Last Updated: Current Session*
*Purpose: Permanent project memory for Claude*
- memorize always investigate components variants via Figma MCP