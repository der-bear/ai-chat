# LeadExec Copilot - Agentic React Chat

An intelligent React-based chat interface powered by OpenAI agents. This application features two specialized AI agents that handle different types of user interactions through instruction-based flow emulation.

## Architecture Overview

### Two-Agent System

**1. Tools Agent** - Handles action/execution scenarios
- Receives instructions to emulate specific workflows and tools
- Simulates real-world operations based on provided instructions
- Returns structured responses as if actual tools were executed
- Examples: Managing clients, configuring webhooks, processing leads

**2. Documentation Agent** - Answers questions using knowledge base
- Uses attached .md documentation as context
- Provides explanations, guides, and conceptual information
- Focused on helping users understand features and capabilities
- Examples: How-to questions, feature explanations, troubleshooting

### Smart Agent Routing
The system automatically determines which agent to use based on:
- **Action keywords**: execute, run, create, configure, test, manage, etc. → Tools Agent
- **Question keywords**: how, what, why, explain, tell me, help, etc. → Documentation Agent
- **Context analysis**: Message structure and intent

### Instruction-Based Flow Emulation (2025 Best Practice)
- Complete workflow documents embedded directly in agent system prompts (OpenAI recommended approach)
- Leverages GPT-4.1/GPT-5's 1M token context window efficiently
- No actual tools or API calls - pure AI emulation based on documentation context
- Agent follows exact specifications from .md files without hardcoded logic
- Zero-shot approach with clear task definition followed by context (optimal for modern models)

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **UI Framework**: CoreUI React components
- **AI Integration**: OpenAI SDK (GPT-4)
- **Styling**: Custom CSS with CoreUI design tokens
- **State Management**: React hooks (useState, useContext)

## Project Structure

```
src/
├── components/           # React components
│   ├── Chat/            # Main chat interface components
│   ├── DarkModeToggle/  # Theme switching component
│   └── common/          # Shared components
├── services/            # Business logic
│   └── openaiService.ts # OpenAI agent management
├── data/               # Static data and configuration
│   ├── tools.ts        # Tool definitions for agents
│   └── documentation.md # Knowledge base for docs agent
├── styles/             # Styling
│   └── chat.css        # Main chat component styles
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## Key Features

### Chat Interface
- **Responsive Design**: Works on desktop and mobile
- **Dark/Light Mode**: Automatic theme switching with system preference
- **Resizable Panel**: Adjustable chat panel width
- **Floating Mode**: Minimizable floating chat window
- **Message History**: Persistent conversation storage
- **Typing Indicators**: Real-time chat experience

### Agent Capabilities (2025 Optimized)
- **Developer Role Context**: Uses highest-priority developer messages for workflow specifications
- **GPT-5 Integration**: Optimized for latest model with correct parameters (max_completion_tokens, default temperature)
- **Intent Recognition**: Automatic routing between specialized agents
- **Workflow Emulation**: Complete process emulation from .md specifications via developer messages
- **1M Token Leverage**: Efficiently uses GPT-5's expanded context window
- **Zero-Shot Intelligence**: No examples needed - direct workflow following optimized for modern models
- **Exact Specification Compliance**: Follows .md files precisely without hallucination

### Developer Experience
- **TypeScript**: Full type safety
- **Hot Reload**: Instant development feedback
- **ESLint**: Code quality and consistency
- **Environment Configuration**: Easy setup with .env files

## Setup Instructions

### Prerequisites
- Node.js 18+ 
- OpenAI API key

### Installation

1. **Clone and install dependencies**
   ```bash
   npm install
   ```

2. **Environment configuration**
   ```bash
   cp .env.example .env
   # Edit .env and add your OpenAI API key
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

### Environment Variables

```env
# Required
VITE_OPENAI_API_KEY=your_openai_api_key_here

# Optional
VITE_OPENAI_MODEL=gpt-4  # Default model to use
```

## Usage Examples

### Tools Agent Interactions
```
User: "Create a webhook for lead notifications"
Agent: [Simulates webhook creation with realistic response]

User: "Test lead submission with sample data"
Agent: [Emulates lead processing workflow]

User: "Show me all active clients"
Agent: [Returns simulated client list]
```

### Documentation Agent Interactions
```
User: "How do webhooks work in the system?"
Agent: [Explains webhooks using documentation context]

User: "What are the available lead sources?"
Agent: [Provides information from knowledge base]

User: "Tell me about client management features"
Agent: [Describes features based on documentation]
```

## Customization

### Adding New Tools
1. Define tool schema in `src/data/tools.ts`
2. Add emulation logic in `openaiService.ts`
3. Update agent instructions if needed

### Updating Documentation
1. Edit `src/data/documentation.md`
2. Documentation agent automatically uses updated content
3. No code changes required

### Styling Customization
- Modify CSS variables in `src/styles/chat.css`
- Follows CoreUI design token system
- Supports dark/light mode theming

## Development Guidelines

### Agent Instructions
- Keep instructions detailed and specific
- Focus on realistic workflow emulation
- Maintain consistency in response formats
- Test both agent types thoroughly

### Code Standards
- Use TypeScript for type safety
- Follow React best practices
- Maintain component modularity
- Write meaningful component names

### Testing Strategy
- Test agent routing logic
- Verify tool emulation responses
- Check documentation context accuracy
- Validate responsive design

## Deployment

### Build for Production
```bash
npm run build
```

### Environment Setup
- Set production OpenAI API key
- Configure proper error logging
- Set up monitoring for API usage

## Troubleshooting

### Common Issues

**Agent not responding**
- Check OpenAI API key configuration
- Verify internet connection
- Check browser console for errors

**Wrong agent selected**
- Review message for action vs question keywords
- Check agent routing logic
- Consider adjusting keyword detection

**Styling issues**
- Verify CoreUI CSS is loaded
- Check for CSS variable conflicts
- Ensure proper theme detection

## Contributing

1. Follow existing code patterns
2. Add TypeScript types for new features
3. Test agent interactions thoroughly
4. Update documentation as needed

## License

MIT License - See LICENSE file for details