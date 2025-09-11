import { test, expect } from '@playwright/test';

test('Test Client Creation Flow', async ({ page }) => {
  console.log('Testing LeadExec Copilot client creation flow...');

  // Listen for console messages and errors
  const consoleMessages = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error' || msg.type() === 'warn') {
      consoleMessages.push(`${msg.type()}: ${msg.text()}`);
    }
  });

  // Navigate to the app
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(2000);

  // Check if the chat interface is visible
  const chatComponent = page.locator('.ai-chat');
  await expect(chatComponent).toBeVisible();

  // Check if we're in initial state
  const initialState = page.locator('.ai-chat__initial');
  await expect(initialState).toBeVisible();

  // Test client creation with valid data
  console.log('Testing client creation with valid data...');
  
  const initialInput = page.locator('.ai-chat__initial-input');
  await initialInput.fill('Create a new client for InnovaTech Solutions with contact person Maria Garcia at maria@innovatech.com');
  
  const sendButton = page.locator('.ai-chat__initial-send');
  await sendButton.click();

  // Wait for the chat to switch from initial state
  await page.waitForTimeout(1000);
  
  // Check if we switched to chat view
  const messagesContainer = page.locator('.ai-chat__messages');
  await expect(messagesContainer).toBeVisible();

  // Wait for AI response (up to 30 seconds)
  console.log('Waiting for AI response...');
  
  // Wait for typing indicator to appear and disappear
  await page.waitForSelector('.ai-chat__typing', { timeout: 10000 });
  await page.waitForSelector('.ai-chat__typing', { state: 'detached', timeout: 30000 });

  // Check for messages
  const messages = page.locator('.ai-chat__message');
  const messageCount = await messages.count();
  console.log(`Found ${messageCount} messages`);

  if (messageCount >= 2) {
    // Check user message
    const userMessage = messages.nth(0);
    const userBubble = userMessage.locator('.ai-chat__bubble--user');
    const userText = await userBubble.textContent();
    console.log('User message:', userText);

    // Check assistant message
    const assistantMessage = messages.nth(1);
    const assistantBubble = assistantMessage.locator('.ai-chat__bubble--assistant');
    const assistantText = await assistantBubble.textContent();
    console.log('Assistant response length:', assistantText.length);

    // Check if response contains client creation elements
    const hasClientId = assistantText.includes('CLI-');
    const hasSuccess = assistantText.includes('success') || assistantText.includes('created');
    const hasEmail = assistantText.includes('maria@innovatech.com');
    const hasCompany = assistantText.includes('InnovaTech');

    console.log('Response analysis:');
    console.log('- Contains client ID:', hasClientId);
    console.log('- Contains success indicator:', hasSuccess);
    console.log('- Contains email:', hasEmail);
    console.log('- Contains company name:', hasCompany);

    // Check agent indicator
    const agentIndicator = assistantMessage.locator('.ai-chat__agent-indicator');
    if (await agentIndicator.count() > 0) {
      const agentText = await agentIndicator.textContent();
      console.log('Agent used:', agentText);
      expect(agentText).toContain('tools agent');
    }

  } else {
    console.log('Not enough messages found. Current state:', {
      messageCount,
      hasTyping: await page.locator('.ai-chat__typing').count() > 0,
      isInitialState: await page.locator('.ai-chat--initial-state').count() > 0
    });
  }

  // Test documentation agent with a question
  console.log('Testing documentation agent...');
  
  const chatInput = page.locator('.ai-chat__input');
  await chatInput.fill('How do client management features work in LeadExec?');
  
  const chatSendButton = page.locator('.ai-chat__send');
  await chatSendButton.click();

  // Wait for response
  await page.waitForTimeout(2000);
  
  // Wait for typing indicator
  try {
    await page.waitForSelector('.ai-chat__typing', { timeout: 5000 });
    await page.waitForSelector('.ai-chat__typing', { state: 'detached', timeout: 30000 });
  } catch (e) {
    console.log('No typing indicator for second message');
  }

  // Check final message count
  const finalMessageCount = await messages.count();
  console.log(`Final message count: ${finalMessageCount}`);

  // Check for errors
  if (consoleMessages.length > 0) {
    console.log('Console messages found:');
    consoleMessages.forEach(msg => console.log(`- ${msg}`));
  } else {
    console.log('No console errors or warnings found');
  }

  // Take final screenshot
  await page.screenshot({ path: 'client-creation-test.png', fullPage: true });
  console.log('Test completed - screenshot saved as client-creation-test.png');
});