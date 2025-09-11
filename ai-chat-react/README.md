# LeadExec Copilot - Advanced AI Chat Application

An intelligent React + TypeScript chat interface featuring a single AI agent with advanced capabilities including multi-message workflow management, markdown rendering, suggested actions, and comprehensive client setup automation.

## Key Features

### 🤖 Intelligent Agent System
- **Single AI Agent** with smart workflow orchestration
- **No agent conflicts** - intelligent capability selection
- **Persistent state** across workflow interruptions
- **Natural conversation flow** with professional guidance

### 💬 Advanced Chat Interface
- **Multi-message workflows** - Each phase gets separate message
- **Markdown rendering** - Professional tables, links, formatting
- **Suggested actions** - Quick reply buttons for common choices
- **Full-width tables** - Optimal space utilization for configuration data
- **Dark mode support** - Complete theme integration

### 🔄 Smart Workflow Management
- **Intelligent information extraction** from any input format
- **Zero redundant questions** - Never re-ask for provided information
- **Programmatic message separation** - Automatic phase splitting
- **Realistic system emulation** - Professional IDs, links, responses

### 📋 Client Setup Workflows
- **Complete client creation** with auto-generated credentials
- **All delivery methods** - Webhook, Email, FTP, Portal, Phone, SMS, SOAP
- **Field mapping** with case preservation (firstName → first_name)
- **Targeting configuration** with states, loan amounts, criteria
- **Testing automation** with realistic connection results

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **AI Integration**: OpenAI SDK with intelligent orchestration
- **UI Framework**: CoreUI React components with custom enhancements
- **Styling**: Advanced CSS with responsive design and markdown support
- **State Management**: React hooks with conversation persistence
- **Markdown**: `marked` library with custom renderer for chat-optimized formatting

## Project Structure

```
src/
├── components/
│   ├── Chat/                    # Advanced chat interface
│   │   ├── ChatHeader.tsx       # Header with controls
│   │   ├── ChatHistory.tsx      # Conversation management
│   │   ├── ChatInitial.tsx      # Welcome interface
│   │   ├── ChatInput.tsx        # Message input with suggestions
│   │   ├── ChatMessages.tsx     # Message display with markdown
│   │   ├── SuggestedActions.tsx # Quick reply buttons
│   │   └── index.tsx            # Main orchestration
│   ├── MarkdownRenderer.tsx     # Chat-optimized markdown rendering
│   └── DarkModeToggle.tsx       # Theme switching
├── services/
│   ├── openaiService.ts         # Clean service wrapper
│   ├── intelligentAgent.ts     # Core AI agent with advanced features
│   └── rag.ts                   # RAG implementation for documentation
├── data/
│   ├── client-create-flow.md    # Complete workflow specification (355 lines)
│   ├── knowledgebase.md         # Documentation knowledge base
│   └── rag-index.json           # Generated embeddings index (~5MB)
├── hooks/
│   └── useChatState.ts          # Advanced state management
├── types/
│   └── chat.ts                  # Complete TypeScript definitions
└── styles/
    └── chat.css                 # Advanced styling with markdown support
```

## Setup & Configuration

### 1. Installation
```bash
npm install
```

### 2. Environment Configuration
```env
VITE_OPENAI_API_KEY=your_openai_api_key
VITE_OPENAI_MODEL=gpt-4o  # Optional (defaults to gpt-4o)
```

### 3. Build RAG Index
```bash
npm run build:rag
```
Processes knowledge base into semantic chunks with OpenAI embeddings.

### 4. Development Server
```bash
npm run dev
```

## Available Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Production build with TypeScript compilation
- `npm run lint` - Code quality checks with ESLint
- `npm run preview` - Preview production build
- `npm run build:rag` - Generate RAG embeddings index

## Advanced Features

### Multi-Message Workflow Pattern
```
Message 1: Data collection with smart extraction
Message 2: Preview table + confirmation with suggested actions
Message 3: Processing + creation + entity link
Message 4: Continuation to next workflow phase
```

### Suggested Actions (Quick Reply Buttons)
- **Confirmations**: [Yes, proceed] [Not yet]
- **Credential Options**: [Auto-generate] [Custom]
- **Delivery Methods**: [Portal Delivery] [Webhook] [Email] [FTP]
- **State Targeting**: [California] [Texas] [Florida] [New York]
- **Activation**: [Activate Now] [Activate Later]

### Intelligent Information Extraction
```
Input: "Pacific Coast Lending, Sarah Martinez, sarah@pacific.com, 555-0123, San Diego CA"
Output: Extracts company, contact, email, phone, address automatically
```

### Professional Markdown Rendering
- **Full-width tables** for configuration data
- **Entity links**: [Client Name (ID: 45782)](#) 
- **Responsive design** with overflow protection
- **CoreUI theming** for consistent appearance

## Workflow Compliance

### Specification Adherence
Follows exact `client-create-flow.md` specification with:
- **Auto-applied defaults**: Status=Inactive, Daily=50, Testing=Enabled
- **Required fields**: Endpoints, authentication, targeting, pricing
- **Field mapping**: Preserves user field case (firstName, loanAmount)
- **Object dependencies**: Client → Delivery Method → Delivery Account

### Smart Agent Behavior
- **Emulation only** - No real API calls, realistic demonstrations
- **Universal input parsing** - Handles any format intelligently  
- **Message separation enforcement** - Programmatic phase splitting
- **Zero hallucination** - Specification-only behavior

## Architecture Benefits

### vs Traditional Systems
- ❌ **No agent conflicts** - Single intelligent agent
- ❌ **No keyword routing** - Smart capability selection
- ❌ **No manual state management** - Natural conversation flow
- ❌ **No formatting issues** - Advanced markdown with overflow protection

### Current Advantages  
- ✅ **Multi-message workflows** - Natural conversation rhythm
- ✅ **Suggested actions** - Faster user interactions
- ✅ **Professional formatting** - Full-width tables, responsive design
- ✅ **Smart extraction** - Minimal questions, maximum efficiency
- ✅ **Complete automation** - End-to-end workflow support

## Development Guidelines

### Working with Advanced Features
1. **Workflow Phases**: Each major step automatically separated into messages
2. **Suggested Actions**: Generated for 2-6 choice scenarios automatically  
3. **Markdown Tables**: Use full chat width, responsive design included
4. **Information Extraction**: Trust the AI to parse complex input formats

### Customization
- **Workflow Logic**: Edit `src/data/client-create-flow.md`
- **Knowledge Base**: Update `src/data/knowledgebase.md` + rebuild RAG
- **UI Components**: Modify CoreUI components in `src/components/Chat/`
- **Styling**: Update `src/styles/chat.css` for visual customizations

## Production Readiness

- **TypeScript**: Complete type safety throughout
- **Error Handling**: Comprehensive fallback strategies
- **Performance**: Optimized RAG index with semantic search
- **Security**: Controlled markdown rendering, safe link formatting
- **Responsive**: Works on all screen sizes with table overflow protection

## Architecture Summary

This application represents a sophisticated implementation of conversational AI for workflow automation, featuring intelligent agent orchestration, advanced UI components, and production-ready architecture optimized for complex business processes.

**Key Innovation**: Single intelligent agent with multi-message workflow management, suggested actions for improved UX, and comprehensive markdown rendering for professional data presentation.Deployment timestamp: Thu Sep 11 19:36:00 EEST 2025
