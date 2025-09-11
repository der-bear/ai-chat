import { test, expect } from '@playwright/test';

test('Debug 2025 API Implementation', async ({ page }) => {
  console.log('🧪 Testing LeadExec Copilot with 2025 OpenAI best practices...');

  const consoleMessages = [];
  const errors = [];
  
  page.on('console', (msg) => {
    const logEntry = {
      type: msg.type(),
      text: msg.text(),
      timestamp: new Date().toISOString()
    };
    consoleMessages.push(logEntry);
    
    if (msg.type() === 'error') {
      console.log(`❌ Console Error: ${msg.text()}`);
    } else if (msg.type() === 'warn') {
      console.log(`⚠️ Console Warning: ${msg.text()}`);
    } else if (msg.type() === 'log') {
      console.log(`📝 Console Log: ${msg.text()}`);
    }
  });

  page.on('pageerror', (error) => {
    errors.push(error.message);
    console.log(`💥 Page Error: ${error.message}`);
  });

  // Navigate to app
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(2000);

  // Check app loading
  const chatComponent = page.locator('.ai-chat');
  await expect(chatComponent).toBeVisible();
  console.log('✅ Chat component loaded');

  const initialState = page.locator('.ai-chat__initial');
  await expect(initialState).toBeVisible();
  console.log('✅ Initial state visible');

  // Test 1: Client Creation Flow (Tools Agent)
  console.log('\n🔧 TESTING TOOLS AGENT - Client Creation Flow');
  
  const clientTestMessage = 'Create a new client for TechNova Industries with contact person Alex Chen at alex.chen@technova.com, phone +1-555-0199, industry Software, company size Large';
  
  const initialInput = page.locator('.ai-chat__initial-input');
  await initialInput.fill(clientTestMessage);
  
  const sendButton = page.locator('.ai-chat__initial-send');
  await sendButton.click();
  
  console.log('📤 Sent client creation request');

  // Wait for chat transition
  await page.waitForTimeout(1500);

  // Wait for typing indicator
  const typingIndicator = page.locator('.ai-chat__typing');
  if (await typingIndicator.count() > 0) {
    console.log('⏳ Typing indicator visible...');
    await page.waitForSelector('.ai-chat__typing', { state: 'detached', timeout: 45000 });
    console.log('✅ Response received');
  }

  // Check messages
  const messages = page.locator('.ai-chat__message');
  const messageCount = await messages.count();
  console.log(`📊 Total messages: ${messageCount}`);

  if (messageCount >= 2) {
    const assistantMessage = messages.nth(1);
    const assistantBubble = assistantMessage.locator('.ai-chat__bubble--assistant');
    const assistantText = await assistantBubble.textContent();
    
    console.log(`📄 Assistant response length: ${assistantText.length} characters`);
    
    // Analyze response content
    const hasClientId = assistantText.includes('CLI-');
    const hasSuccess = assistantText.includes('success') || assistantText.includes('created');
    const hasEmail = assistantText.includes('alex.chen@technova.com');
    const hasCompany = assistantText.includes('TechNova');
    const hasPhone = assistantText.includes('555-0199');
    const hasIndustry = assistantText.includes('Software');
    const hasSize = assistantText.includes('Large');
    const isJSON = assistantText.includes('{') && assistantText.includes('}');

    console.log('🔍 Response Analysis:');
    console.log(`  • Contains client ID (CLI-XXXX): ${hasClientId ? '✅' : '❌'}`);
    console.log(`  • Contains success indicator: ${hasSuccess ? '✅' : '❌'}`);
    console.log(`  • Contains email: ${hasEmail ? '✅' : '❌'}`);
    console.log(`  • Contains company name: ${hasCompany ? '✅' : '❌'}`);
    console.log(`  • Contains phone: ${hasPhone ? '✅' : '❌'}`);
    console.log(`  • Contains industry: ${hasIndustry ? '✅' : '❌'}`);
    console.log(`  • Contains company size: ${hasSize ? '✅' : '❌'}`);
    console.log(`  • Is JSON format: ${isJSON ? '✅' : '❌'}`);

    // Check agent indicator
    const agentIndicator = assistantMessage.locator('.ai-chat__agent-indicator');
    if (await agentIndicator.count() > 0) {
      const agentText = await agentIndicator.textContent();
      console.log(`🤖 Agent used: ${agentText}`);
      expect(agentText).toContain('tools agent');
    }
  }

  // Test 2: Documentation Questions (Documentation Agent)
  console.log('\n📖 TESTING DOCUMENTATION AGENT - Knowledge Base Query');
  
  const docTestMessage = 'How do lead scoring and client management features work in LeadExec? What are the different client types available?';
  
  const chatInput = page.locator('.ai-chat__input');
  await chatInput.fill(docTestMessage);
  
  const chatSendButton = page.locator('.ai-chat__send');
  await chatSendButton.click();
  
  console.log('📤 Sent documentation question');

  // Wait for typing and response
  await page.waitForTimeout(1500);
  
  if (await page.locator('.ai-chat__typing').count() > 0) {
    console.log('⏳ Documentation agent thinking...');
    await page.waitForSelector('.ai-chat__typing', { state: 'detached', timeout: 45000 });
    console.log('✅ Documentation response received');
  }

  // Final analysis
  const finalMessageCount = await messages.count();
  console.log(`📊 Final message count: ${finalMessageCount}`);

  if (finalMessageCount >= 4) {
    const docResponse = messages.nth(3);
    const docBubble = docResponse.locator('.ai-chat__bubble--assistant');
    const docText = await docBubble.textContent();
    
    console.log(`📄 Documentation response length: ${docText.length} characters`);
    
    const hasLeadInfo = docText.toLowerCase().includes('lead');
    const hasClientInfo = docText.toLowerCase().includes('client');
    const hasProspectInfo = docText.toLowerCase().includes('prospect');
    
    console.log('🔍 Documentation Response Analysis:');
    console.log(`  • Contains lead information: ${hasLeadInfo ? '✅' : '❌'}`);
    console.log(`  • Contains client information: ${hasClientInfo ? '✅' : '❌'}`);  
    console.log(`  • Contains prospect information: ${hasProspectInfo ? '✅' : '❌'}`);

    const docAgentIndicator = docResponse.locator('.ai-chat__agent-indicator');
    if (await docAgentIndicator.count() > 0) {
      const docAgentText = await docAgentIndicator.textContent();
      console.log(`🤖 Documentation agent used: ${docAgentText}`);
      expect(docAgentText).toContain('documentation agent');
    }
  }

  // Test 3: Agent Routing Accuracy
  console.log('\n🎯 TESTING AGENT ROUTING');
  
  // Test edge case: mixed action/question
  const mixedMessage = 'How should I create a webhook and what are the requirements?';
  
  await chatInput.fill(mixedMessage);
  await chatSendButton.click();
  
  console.log('📤 Sent mixed action/question message');
  await page.waitForTimeout(2000);

  // Error summary
  console.log('\n📋 ERROR SUMMARY:');
  if (errors.length > 0) {
    console.log('❌ Page errors found:');
    errors.forEach((error, index) => {
      console.log(`  ${index + 1}. ${error}`);
    });
  } else {
    console.log('✅ No page errors found');
  }

  const errorMessages = consoleMessages.filter(msg => msg.type === 'error');
  if (errorMessages.length > 0) {
    console.log('❌ Console errors found:');
    errorMessages.forEach((msg, index) => {
      console.log(`  ${index + 1}. ${msg.text}`);
    });
  } else {
    console.log('✅ No console errors found');
  }

  // Take comprehensive screenshot
  await page.screenshot({ path: '2025-api-test-result.png', fullPage: true });
  console.log('📷 Screenshot saved as 2025-api-test-result.png');

  // Performance metrics
  const finalMessages = await page.locator('.ai-chat__message').count();
  console.log('\n📊 PERFORMANCE METRICS:');
  console.log(`  • Total messages processed: ${finalMessages}`);
  console.log(`  • Console messages logged: ${consoleMessages.length}`);
  console.log(`  • Page errors: ${errors.length}`);
  console.log(`  • Test duration: ~${Math.round(performance.now() / 1000)}s`);

  console.log('\n🎉 2025 API Implementation Test Complete!');
});