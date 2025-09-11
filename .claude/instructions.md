# LeadExec Copilot - AI Chat React Application

## Project Overview
This is a React + TypeScript + Vite application that implements an intelligent chat interface with two specialized AI agents using instruction-based flow emulation and RAG (Retrieval-Augmented Generation).

## Architecture & Agent System

### Two-Agent Architecture
1. **Tools Agent**: Emulates client setup flows using `src/data/client-create-flow.md` injected directly into system prompt
2. **Documentation Agent**: Answers questions using RAG (Retrieval-Augmented Generation) from `src/data/knowledgebase.md`

### Agent Routing Logic (`openaiService.ts:40-74`)
- **Tools Agent**: Action keywords (create, execute, run, configure, webhook, test, manage, etc.)
- **Documentation Agent**: Question keywords (how, what, why, explain, help, etc.)
- Smart routing based on message analysis and context
- Default: Documentation agent for general queries

### Key Design Principles
- **Instruction-Based Emulation**: No real APIs, everything simulated based on instructions
- **Realistic Responses**: Agents craft responses as if real tools were executed
- **Context Preservation**: Maintain conversation flow and user experience
- **Smart Routing**: Automatic agent selection based on user intent

## Project Structure & Key Files

```
ai-chat-react/
├── src/
│   ├── components/
│   │   ├── Chat/              # Main chat UI components
│   │   │   ├── ChatHeader.tsx
│   │   │   ├── ChatHistory.tsx
│   │   │   ├── ChatInitial.tsx
│   │   │   ├── ChatInput.tsx
│   │   │   ├── ChatMessages.tsx
│   │   │   └── index.tsx
│   │   └── DarkModeToggle.tsx
│   ├── services/
│   │   ├── openaiService.ts   # Core AI agent orchestration
│   │   └── rag.ts            # RAG implementation for doc agent
│   ├── data/
│   │   ├── client-create-flow.md    # Tools agent instruction document
│   │   ├── knowledgebase.md         # Documentation source for RAG
│   │   └── rag-index.json           # Generated embeddings index
│   ├── hooks/
│   │   └── useChatState.ts    # Chat state management
│   ├── types/
│   │   └── chat.ts           # TypeScript definitions
│   └── styles/
│       └── chat.css          # Chat component styles
├── scripts/
│   └── build-rag.mjs         # RAG index generation script
└── package.json
```

### Critical Files to Understand
1. **openaiService.ts**: Contains both agents, routing logic, and OpenAI integration
2. **rag.ts**: RAG implementation with embeddings and semantic search
3. **client-create-flow.md**: Complete workflow document for tools agent
4. **knowledgebase.md**: Knowledge base for documentation agent with RAG
5. **useChatState.ts**: React hook for chat state management

## Development Guidelines

### When Working on This Project

1. **Preserve Original Design**: The HTML/CSS design is excellent - maintain the visual identity
2. **Focus on Agent Intelligence**: Improve agent instructions and emulation quality
3. **Instruction-Based Approach**: Everything is emulated, no real integrations
4. **User Experience**: Maintain smooth chat experience with proper typing indicators

### Agent Development
- **Tools Agent Instructions**: Focus on realistic workflow emulation
- **Documentation Agent Instructions**: Use provided .md content as source of truth
- **Response Quality**: Craft responses that feel like real tool execution
- **Error Handling**: Provide helpful error messages and suggestions

### Code Patterns
- Use TypeScript for type safety
- Maintain React component modularity
- Follow existing naming conventions
- Keep agent logic in openaiService.ts

## Environment Setup

### Required Environment Variables
```
VITE_OPENAI_API_KEY=your_api_key_here
VITE_OPENAI_MODEL=gpt-5  # Optional (defaults to gpt-5, falls back to gpt-4o)
```

### Development Commands
```bash
npm install          # Install dependencies
npm run dev         # Start development server
npm run build       # Build for production (includes TypeScript compilation)
npm run lint        # Run ESLint
npm run build:rag   # Generate RAG embeddings index
```

## Current Implementation Status

### Completed Features
- ✅ Complete React + TypeScript + Vite application
- ✅ OpenAI SDK integration with model fallback
- ✅ Two-agent system with smart routing
- ✅ RAG implementation with semantic search
- ✅ Tools agent with client-create-flow.md injection
- ✅ Documentation agent with knowledgebase RAG
- ✅ Complete UI with CoreUI components and dark mode
- ✅ Chat state management with React hooks
- ✅ RAG index generation script

### Current Status
- ✅ Fully functional chat interface
- ✅ Agent routing and message processing
- ✅ Documentation context with RAG retrieval
- ✅ Tool emulation with realistic responses
- ✅ Production-ready build system

## Agent Implementation Details

### Tools Agent (`openaiService.ts:99-116`)
- **Context**: Complete `client-create-flow.md` injected directly into system prompt
- **Temperature**: 0.1 (more deterministic for workflow execution)
- **Response Format**: JSON object for structured emulation results
- **Behavior**: Strict workflow emulation, no real API calls, asks clarifying questions when info missing

### Documentation Agent (`openaiService.ts:118-140`)
- **Context**: RAG retrieval from `knowledgebase.md` chunks (top-5 semantic matches)
- **Temperature**: 0.2 (slightly more creative for explanations)
- **Fallback**: Uses documentation excerpt if RAG unavailable
- **Behavior**: Provides answers with citations, suggests action workflows when appropriate

## RAG Implementation Details

### RAG Service (`rag.ts`)
- **Embeddings Model**: text-embedding-3-small from OpenAI
- **Index Format**: Prebuilt JSON with chunks, sources, and embeddings
- **Retrieval**: Cosine similarity scoring with source preference
- **Chunking**: Handled by build script (`scripts/build-rag.mjs`)

### RAG Workflow
1. **Build Time**: `npm run build:rag` processes markdown files into chunks
2. **Runtime**: Query embedding computed, similarity search performed
3. **Ranking**: Combines similarity score with source preference (tools vs docs)
4. **Fallback**: Uses full documentation excerpt if RAG index unavailable

## UI/UX Considerations

### Design Preservation
- Maintain original CoreUI-based design
- Preserve dark/light mode functionality
- Keep responsive layout and resizing features
- Maintain chat panel and floating window modes

### User Experience
- Show typing indicators during AI processing
- Provide clear agent identification in responses
- Handle errors gracefully with helpful messages
- Maintain conversation history and context

## Testing Strategy

### Manual Testing Checklist
- [ ] Agent routing works correctly for different message types
- [ ] Tools agent provides realistic emulation responses
- [ ] Documentation agent uses context appropriately
- [ ] UI remains responsive and functional
- [ ] Dark/light mode switching works
- [ ] Chat history persists correctly

### Edge Cases to Test
- Mixed action/question messages
- Invalid tool parameters
- Long conversation contexts
- Documentation questions outside knowledge base
- Error scenarios and recovery

## Future Enhancements

### Potential Improvements
1. **Enhanced Tool Emulation**: More sophisticated workflow simulation
2. **Better Context Awareness**: Improved agent routing and context handling
3. **Custom Instructions**: User-configurable agent behavior
4. **Analytics**: Track agent usage and performance
5. **Export Features**: Save conversations and data

### Scalability Considerations
- Modular tool definition system
- Pluggable documentation sources
- Configurable agent instructions
- Performance optimization for large conversations

## Troubleshooting Common Issues

### Agent Selection Problems
- Check keyword detection logic in `determineAgentType()`
- Verify message preprocessing
- Test with clear action vs question examples

### Tool Emulation Issues
- Review tool definitions in tools.ts
- Check emulation logic in `executeToolCall()`
- Verify JSON response formats

### UI/CSS Problems
- Ensure CoreUI CSS is properly loaded
- Check CSS variable definitions
- Verify responsive design breakpoints

## Memory & Context Notes

### Important Implementation Details
1. The original HTML design is preserved and should be maintained
2. Agent routing is keyword-based with smart fallbacks
3. All tools are emulated - no real API calls
4. Documentation agent uses .md file content as context
5. Chat interface supports both panel and floating modes

### Development Priorities
1. Complete React component conversion
2. Test agent routing thoroughly
3. Refine tool emulation responses
4. Ensure documentation context accuracy
5. Maintain original UI/UX quality