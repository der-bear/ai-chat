export interface SuggestedAction {
  id: string;
  text: string;
  value?: string;
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: string;
  agentUsed?: 'tools' | 'documentation' | 'intelligent';
  suggestedActions?: SuggestedAction[];
  fileUpload?: boolean;
  functionCalls?: Array<{
    name: string;
    arguments: Record<string, unknown>;
    result?: unknown;
  }>;
  conversationState?: {
    activeWorkflow?: string;
    workflowStep?: string;
    collectedData?: Record<string, unknown>;
    context?: string[];
  };
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  created: string;
  lastUpdated: string;
}

export interface ChatState {
  isInitialState: boolean;
  currentConversation: Conversation | null;
  conversations: Conversation[];
  isTyping: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  isHistoryActive: boolean;
  panelWidth: number;
}

export interface ChatConfig {
  maxConversations: number;
  typingDelay: number;
  storageKey: string;
  minPanelWidth: number;
  maxPanelWidth: number;
}

export interface ResizeState {
  isResizing: boolean;
  startX: number;
  startWidth: number;
  rafId: number | null;
  boundEventHandlers: {
    doResize: (e: MouseEvent | TouchEvent) => void;
    endResize: () => void;
  } | null;
}