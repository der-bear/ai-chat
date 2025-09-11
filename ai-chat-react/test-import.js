// Simple test to check if the types file is being processed correctly
console.log('Testing imports...');

try {
  // Try to import from the types file using a simple fetch
  fetch('/src/types/chat.ts')
    .then(response => response.text())
    .then(content => {
      console.log('File content length:', content.length);
      console.log('Contains ChatConfig:', content.includes('export interface ChatConfig'));
      console.log('Contains Message:', content.includes('export interface Message'));
    })
    .catch(err => console.error('Fetch error:', err));
} catch (error) {
  console.error('Import test error:', error);
}