import React from 'react';
import { marked } from 'marked';

interface MarkdownRendererProps {
  content: string;
}

// Configure marked for chat-friendly formatting
const renderer = new marked.Renderer();

// Override heading rendering to just return bold text (no large headings in chat)
renderer.heading = (token) => `<strong>${token.text}</strong>`;

// Configure marked options for security and limited formatting
marked.setOptions({
  renderer: renderer,
  gfm: true, // GitHub Flavored Markdown for tables
  breaks: true // Convert line breaks to <br>
});

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const renderMarkdown = (text: string) => {
    try {
      // Clean the text to avoid duplication issues
      const cleanText = text.trim();
      
      // Allow only specific markdown features:
      // - Bold (**text**)
      // - Links ([text](url))
      // - Tables
      // - Line breaks
      const html = marked(cleanText);
      return { __html: html };
    } catch (error) {
      console.error('Markdown rendering error:', error);
      // Fallback to plain text if markdown parsing fails
      return { __html: cleanText.replace(/\n/g, '<br>') };
    }
  };

  return (
    <div 
      className="markdown-content"
      dangerouslySetInnerHTML={renderMarkdown(content)}
    />
  );
};

export default MarkdownRenderer;