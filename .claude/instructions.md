# LeadExec Copilot - Claude Instructions & Memory

## Project Overview
This is an agentic React chat application with two specialized OpenAI agents. The system uses instruction-based flow emulation rather than real API integrations.

## Architecture & Agent System

### Two-Agent Architecture
1. **Tools Agent**: Handles action/execution scenarios through instruction-based emulation
2. **Documentation Agent**: Answers questions using attached .md documentation as context

### Agent Routing Logic
- **Tools Agent**: Triggered by action keywords (execute, run, create, configure, test, manage)
- **Documentation Agent**: Triggered by question keywords (how, what, why, explain, help)
- Smart routing based on message analysis and context

### Key Design Principles
- **Instruction-Based Emulation**: No real APIs, everything simulated based on instructions
- **Realistic Responses**: Agents craft responses as if real tools were executed
- **Context Preservation**: Maintain conversation flow and user experience
- **Smart Routing**: Automatic agent selection based on user intent

## Project Structure & Key Files

### Core Components
```
src/
├── services/openaiService.ts    # Main agent logic & routing
├── data/tools.ts               # Tool definitions for emulation
├── data/documentation.md       # Knowledge base for docs agent
├── styles/chat.css            # UI styling (preserved from original HTML)
├── components/Chat/           # React chat components
└── types/                     # TypeScript definitions
```

### Critical Files to Understand
1. **openaiService.ts**: Contains both agents, routing logic, and tool emulation
2. **tools.ts**: Defines available tools that can be emulated
3. **documentation.md**: Knowledge base for documentation agent
4. **chat.css**: Complete UI styling (converted from original HTML)

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
VITE_OPENAI_MODEL=gpt-4
```

### Development Commands
```bash
npm install          # Install dependencies
npm run dev         # Start development server
npm run build       # Build for production
```

## Current Implementation Status

### Completed Features
- ✅ Project structure with Vite + React + TypeScript
- ✅ OpenAI SDK integration
- ✅ Two-agent system with smart routing
- ✅ Tool emulation framework
- ✅ Documentation context system
- ✅ CSS styling (converted from original HTML)

### In Progress / TODO
- 🔄 React component conversion from HTML
- 🔄 Message handling with agent routing
- 🔄 Documentation context integration
- 🔄 Tool execution capabilities
- 🔄 Complete system testing

## Agent Instructions & Behavior

### Tools Agent System Message Template
```
You are a LeadExec Copilot specialized in executing tools and performing actions.
Your role is to:
1. Execute tool functions based on user requests
2. Perform actions like managing clients, configuring webhooks, testing lead submissions
3. Handle operational tasks and integrations
4. Return structured data and actionable results

[Include available tools and their emulation instructions]
```

### Documentation Agent System Message Template
```
You are a LeadExec Copilot specialized in answering questions based on documentation.
Your role is to:
1. Answer questions using the provided documentation context
2. Explain concepts, features, and how-to information
3. Provide guidance based on the knowledge base
4. Help users understand the system and its capabilities

[Include documentation content as context]
```

## Tool Emulation Guidelines

### Emulation Principles
1. **Realistic Responses**: Return data that looks like real API responses
2. **Consistent Format**: Use JSON for structured data
3. **Appropriate Delays**: Simulate processing time where realistic
4. **Error Simulation**: Include realistic error scenarios
5. **State Consistency**: Maintain logical state across interactions

### Example Tool Emulations
- **get_client_list**: Return mock client data with realistic properties
- **create_webhook**: Generate webhook ID and confirmation details
- **test_lead_submission**: Process test data and return processing results
- **get_webhook_status**: Show webhook activity and statistics

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