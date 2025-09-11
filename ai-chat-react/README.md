# LeadExec Copilot - AI Chat React Application

An intelligent React + TypeScript chat interface powered by OpenAI agents. This application features two specialized AI agents using instruction-based flow emulation and RAG (Retrieval-Augmented Generation) for comprehensive user assistance.

## Architecture Overview

### Two-Agent System

**1. Tools Agent** - Emulates the client setup flow
- Uses the markdown file `src/data/client-create-flow.md` injected directly into the system prompt
- Simulates real-world operations strictly following that document (no real API calls)
- Returns human-readable emulation results

**2. Documentation Agent** - Answers questions using the knowledge base
- Retrieves relevant snippets from `src/data/knowledgebase.md` via semantic search (RAG)
- Provides explanations, guides, and conceptual information with citations

### Smart Agent Routing
The system automatically determines which agent to use based on:
- **Action keywords**: execute, run, create, configure, test, manage, etc. → Tools Agent
- **Question keywords**: how, what, why, explain, tell me, help, etc. → Documentation Agent
- **Context analysis**: Message structure and intent

### Instruction-Based Flow Emulation
- Complete flow doc (`client-create-flow.md`) is embedded directly in the Tools agent system prompt
- No actual tools or API calls — pure emulation based on the document
- The agent follows the spec exactly; if info is missing, it asks concise questions

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **AI Integration**: OpenAI SDK (Chat Completions + Embeddings for RAG)
- **UI Framework**: CoreUI React components
- **Styling**: Custom CSS with dark mode support
- **State Management**: React hooks (useChatState)

## Project Structure

```
src/
├── components/           # React components
│   ├── Chat/             # Main chat UI components
│   │   ├── ChatHeader.tsx
│   │   ├── ChatHistory.tsx
│   │   ├── ChatInitial.tsx
│   │   ├── ChatInput.tsx
│   │   ├── ChatMessages.tsx
│   │   └── index.tsx
│   └── DarkModeToggle.tsx
├── services/             # OpenAI + RAG services
│   ├── openaiService.ts  # Core AI agent orchestration
│   └── rag.ts            # RAG implementation with embeddings
├── data/                 # Agent context data
│   ├── client-create-flow.md   # Tools agent instruction document
│   ├── knowledgebase.md        # Documentation source for RAG
│   └── rag-index.json          # Generated embeddings index
├── hooks/
│   └── useChatState.ts   # Chat state management
├── types/
│   └── chat.ts           # TypeScript definitions
└── styles/
    └── chat.css          # Chat component styles
```

## Setup Instructions

1) Install
```bash
npm install
```

2) Environment
```env
VITE_OPENAI_API_KEY=your_openai_api_key
# Optional
VITE_OPENAI_MODEL=gpt-5
```

3) Build the RAG index (required for optimal Documentation agent performance)
```bash
npm run build:rag
```
This processes `src/data/knowledgebase.md`, creates semantic chunks, generates OpenAI embeddings, and writes `src/data/rag-index.json`.

4) Start dev server
```bash
npm run dev
```

## Available Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (includes TypeScript compilation)
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build
- `npm run build:rag` - Generate RAG embeddings index

## Usage

- Ask for actions like “Create a webhook for client X” → Tools agent emulates using `client-create-flow.md`.
- Ask questions like “How do email delivery settings work?” → Docs agent answers using KB snippets.

## Key Features

### Smart Agent Routing
- Automatic agent selection based on message analysis
- Action-oriented requests → Tools Agent
- Question-oriented requests → Documentation Agent
- Context-aware routing with fallback handling

### RAG Implementation
- Semantic search using OpenAI embeddings (text-embedding-3-small)
- Cosine similarity scoring for relevant chunk retrieval
- Source-aware ranking for improved accuracy
- Prebuilt index for fast runtime performance

### Production-Ready Architecture
- TypeScript throughout for type safety
- CoreUI components for professional UI
- Dark/light mode support
- Responsive design with proper state management

## Customization

- **Update flow behavior**: Edit `src/data/client-create-flow.md` (no code changes required)
- **Update knowledge base**: Edit `src/data/knowledgebase.md`, then run `npm run build:rag`
- **Modify UI**: Update CoreUI components in `src/components/Chat/`
- **Extend functionality**: Add new agent types or routing logic in `openaiService.ts`

## Development Notes

- **Emulation Only**: This prototype emulates workflows without real API calls
- **Model Fallback**: Attempts preferred model (gpt-5), falls back to gpt-4o
- **Browser Integration**: Uses `dangerouslyAllowBrowser: true` for client-side OpenAI calls
- **Security**: For production, implement server-side OpenAI calls and secure API keys

## Architecture Details

### Agent Implementation
- **Tools Agent**: Complete workflow document injected into system prompt, temperature 0.1
- **Documentation Agent**: RAG retrieval with semantic search, temperature 0.2
- **Error Handling**: Comprehensive error handling with fallback strategies
- **Logging**: Detailed console logging for debugging and monitoring