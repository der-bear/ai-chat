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

// Basic client-side sanitizer using DOMParser with a safe allowlist
function sanitizeHTML(dirty: string): string {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(dirty, 'text/html');
    const allowedTags = new Set(['strong','em','b','i','p','br','ul','ol','li','table','thead','tbody','tr','th','td','a','code','span']);
    const allowedAttrs: Record<string, Set<string>> = {
      'a': new Set(['href','title','target','rel']),
      'td': new Set(['colspan','rowspan']),
      'th': new Set(['colspan','rowspan']),
      'span': new Set([]),
      'code': new Set([]),
    };

    const walk = (node: Element | ChildNode) => {
      // Remove script/style and comments
      if (node.nodeType === Node.COMMENT_NODE) {
        node.parentNode?.removeChild(node);
        return;
      }
      if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as Element;
        const tag = el.tagName.toLowerCase();
        if (!allowedTags.has(tag)) {
          // Replace disallowed element with its text content
          const text = doc.createTextNode(el.textContent || '');
          el.parentNode?.replaceChild(text, el);
          return;
        }
        // Remove event handlers and non-allowed attributes
        [...el.attributes].forEach(attr => {
          const name = attr.name.toLowerCase();
          if (name.startsWith('on')) {
            el.removeAttribute(attr.name);
            return;
          }
          const allowed = allowedAttrs[tag];
          if (allowed && !allowed.has(name)) {
            el.removeAttribute(attr.name);
            return;
          }
          if (tag === 'a' && name === 'href') {
            const val = attr.value.trim();
            if (/^\s*javascript:/i.test(val)) {
              el.removeAttribute(attr.name);
            } else {
              // Force safe link behavior
              el.setAttribute('rel', 'noopener noreferrer');
              if (!el.getAttribute('target')) el.setAttribute('target', '_blank');
            }
          }
        });
      }
      // Recurse
      node.childNodes && [...node.childNodes].forEach(walk);
    };

    [...(doc.body?.childNodes || [])].forEach(walk);
    return doc.body?.innerHTML || '';
  } catch {
    return dirty; // fail open to original; better than breaking UI
  }
}

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
      const safe = sanitizeHTML(html);
      return { __html: safe };
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
