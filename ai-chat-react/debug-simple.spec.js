import { test, expect } from '@playwright/test';

test('Simple Debug - Check Console Logs', async ({ page }) => {
  console.log('🔍 Simple Debug - Checking console logs...');

  // Capture ALL console messages
  page.on('console', (msg) => {
    const text = msg.text();
    const type = msg.type();
    
    if (text.includes('🔧') || text.includes('🚀') || text.includes('✅') || text.includes('📝')) {
      console.log(`${type.toUpperCase()}: ${text}`);
    } else if (type === 'error') {
      console.log(`ERROR: ${text}`);
    } else if (type === 'warn') {
      console.log(`WARN: ${text}`);
    }
  });

  await page.goto('http://localhost:5173');
  await page.waitForTimeout(3000);

  console.log('📤 Sending test message...');
  
  // Send a simple client creation message
  const initialInput = page.locator('.ai-chat__initial-input');
  await initialInput.fill('Create a client for TestCorp with John at john@test.com');
  
  const sendButton = page.locator('.ai-chat__initial-send');
  await sendButton.click();

  console.log('⏳ Waiting for response...');
  await page.waitForTimeout(15000);

  // Check what actually appears in the chat
  const messages = page.locator('.ai-chat__message');
  const count = await messages.count();
  console.log(`📊 Messages in chat: ${count}`);

  for (let i = 0; i < count; i++) {
    const msg = messages.nth(i);
    const bubble = msg.locator('.ai-chat__bubble');
    const text = await bubble.textContent();
    const isUser = await msg.locator('.ai-chat__message--user').count() > 0;
    
    console.log(`Message ${i + 1} (${isUser ? 'USER' : 'AI'}): "${text}"`);
  }

  await page.screenshot({ path: 'simple-debug.png' });
  console.log('📷 Simple debug screenshot saved');
});