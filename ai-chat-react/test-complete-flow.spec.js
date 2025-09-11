import { test, expect } from '@playwright/test';

test('Test Complete Client Creation Flow', async ({ page }) => {
  console.log('🔄 Testing Complete Client Creation Flow...');

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      console.log(`❌ ${msg.text()}`);
    } else if (msg.text().includes('📝 Final response content')) {
      console.log(`✅ ${msg.text()}`);
    }
  });

  await page.goto('http://localhost:5173');
  await page.waitForTimeout(2000);

  // Test 1: Complete client creation request
  console.log('📤 Testing complete client creation request...');
  
  const completeMessage = 'Create a new client for TechNova Industries with contact person Alex Chen at alex.chen@technova.com, phone +1-555-0199, business address 123 Tech St, San Francisco CA 94105, timezone PST, industry Software, company size Large';
  
  const initialInput = page.locator('.ai-chat__initial-input');
  await initialInput.fill(completeMessage);
  
  const sendButton = page.locator('.ai-chat__initial-send');
  await sendButton.click();

  await page.waitForTimeout(2000);
  
  // Wait for typing indicator if present
  if (await page.locator('.ai-chat__typing').count() > 0) {
    await page.waitForSelector('.ai-chat__typing', { state: 'detached', timeout: 30000 });
  }

  // Check response
  const messages = page.locator('.ai-chat__message');
  const count = await messages.count();
  
  if (count >= 2) {
    const aiResponse = messages.nth(1);
    const responseText = await aiResponse.locator('.ai-chat__bubble').textContent();
    
    console.log(`📊 AI Response Analysis (${responseText.length} chars):`);
    console.log(`📄 Response: ${responseText}`);
    
    // Check if it's a proper client creation response
    const hasClientInfo = responseText.includes('TechNova') || responseText.includes('Alex Chen');
    const hasProcessing = responseText.includes('client') && responseText.includes('created');
    const hasJSON = responseText.includes('{') && responseText.includes('}');
    
    console.log(`🔍 Content Analysis:`);
    console.log(`  • Contains client info: ${hasClientInfo ? '✅' : '❌'}`);
    console.log(`  • Shows processing: ${hasProcessing ? '✅' : '❌'}`);
    console.log(`  • Contains JSON: ${hasJSON ? '✅' : '❌'}`);
    
    if (!hasClientInfo && !hasProcessing) {
      console.log('⚠️ AI might be asking for more info instead of processing');
    }
  }

  // Test 2: Documentation question
  console.log('\n📚 Testing documentation agent...');
  
  const docInput = page.locator('.ai-chat__input');
  await docInput.fill('What are the different delivery methods available in LeadExec?');
  
  const chatSend = page.locator('.ai-chat__send');
  await chatSend.click();
  
  await page.waitForTimeout(2000);
  
  if (await page.locator('.ai-chat__typing').count() > 0) {
    await page.waitForSelector('.ai-chat__typing', { state: 'detached', timeout: 30000 });
  }

  const finalCount = await messages.count();
  if (finalCount >= 4) {
    const docResponse = messages.nth(3);
    const docText = await docResponse.locator('.ai-chat__bubble').textContent();
    
    console.log(`📋 Documentation Response (${docText.length} chars):`);
    console.log(`📄 Response: ${docText.substring(0, 200)}...`);
    
    const hasDeliveryMethods = docText.toLowerCase().includes('delivery') || docText.toLowerCase().includes('webhook') || docText.toLowerCase().includes('email');
    console.log(`📚 Contains delivery methods info: ${hasDeliveryMethods ? '✅' : '❌'}`);
  }

  await page.screenshot({ path: 'complete-flow-test.png', fullPage: true });
  console.log('📷 Complete flow test screenshot saved');
});