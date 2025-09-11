import { test, expect } from '@playwright/test';

test('Debug OpenAI Response Content', async ({ page }) => {
  console.log('🔍 Debugging OpenAI Response Content...');

  const apiResponses = [];
  
  // Capture network responses
  page.on('response', async (response) => {
    if (response.url().includes('openai.com')) {
      console.log(`🌐 OpenAI API Call: ${response.status()}`);
      try {
        const responseText = await response.text();
        const parsedResponse = JSON.parse(responseText);
        apiResponses.push(parsedResponse);
        
        console.log(`📊 Response structure:`, Object.keys(parsedResponse));
        
        if (parsedResponse.choices && parsedResponse.choices[0]) {
          const choice = parsedResponse.choices[0];
          console.log(`📝 Choice structure:`, Object.keys(choice));
          
          if (choice.message) {
            console.log(`💬 Message content length: ${choice.message.content?.length || 0}`);
            console.log(`📄 Message content preview: ${choice.message.content?.substring(0, 200) || 'No content'}...`);
            console.log(`🔧 Message role: ${choice.message.role}`);
          }
          
          if (choice.finish_reason) {
            console.log(`🏁 Finish reason: ${choice.finish_reason}`);
          }
        }
        
        if (parsedResponse.usage) {
          console.log(`📊 Token usage:`, parsedResponse.usage);
        }
        
      } catch (e) {
        console.log(`❌ Could not parse OpenAI response: ${e.message}`);
      }
    }
  });

  // Capture requests to see what we're sending
  page.on('request', (request) => {
    if (request.url().includes('openai.com')) {
      console.log('\n📤 REQUEST TO OPENAI:');
      try {
        const postData = request.postDataBuffer();
        if (postData) {
          const parsedRequest = JSON.parse(postData.toString());
          console.log(`📝 Model: ${parsedRequest.model}`);
          console.log(`📊 Messages count: ${parsedRequest.messages?.length || 0}`);
          console.log(`🌡️ Temperature: ${parsedRequest.temperature || 'default'}`);
          console.log(`🔢 Max tokens: ${parsedRequest.max_completion_tokens || parsedRequest.max_tokens || 'none'}`);
          
          if (parsedRequest.messages) {
            parsedRequest.messages.forEach((msg, index) => {
              console.log(`  Message ${index + 1}: ${msg.role}`);
              console.log(`    Length: ${msg.content?.length || 0} characters`);
              
              if (msg.role === 'developer') {
                const hasFlow = msg.content?.includes('Client Creation Flow Description');
                const hasSuccess = msg.content?.includes('Success Response Format');
                console.log(`    Has Client Flow: ${hasFlow ? '✅' : '❌'}`);
                console.log(`    Has Success Format: ${hasSuccess ? '✅' : '❌'}`);
                
                if (msg.content) {
                  console.log(`    Content preview: ${msg.content.substring(0, 150)}...`);
                }
              }
            });
          }
        }
      } catch (e) {
        console.log(`❌ Could not parse request: ${e.message}`);
      }
    }
  });

  await page.goto('http://localhost:5173');
  await page.waitForTimeout(2000);

  // Test client creation
  const initialInput = page.locator('.ai-chat__initial-input');
  await initialInput.fill('Create a new client for TestCorp with John Doe at john@testcorp.com');
  
  const sendButton = page.locator('.ai-chat__initial-send');
  await sendButton.click();

  console.log('\n⏳ Waiting for API call and response...');
  await page.waitForTimeout(10000);

  // Check the actual response content in the UI
  const messages = page.locator('.ai-chat__message');
  const messageCount = await messages.count();
  
  if (messageCount >= 2) {
    const assistantMessage = messages.nth(1);
    const assistantBubble = assistantMessage.locator('.ai-chat__bubble--assistant');
    const assistantText = await assistantBubble.textContent();
    
    console.log('\n📱 UI RESPONSE ANALYSIS:');
    console.log(`📄 Response in UI: "${assistantText}"`);
    console.log(`📏 Response length: ${assistantText.length} characters`);
    
    // Check if it looks like a truncated response
    if (assistantText.length < 100) {
      console.log('⚠️ Response seems unusually short - possible truncation or error');
    }
    
    // Check for common response patterns
    const isError = assistantText.includes('error') || assistantText.includes('Error');
    const isIncomplete = assistantText.endsWith('...');
    const hasJSON = assistantText.includes('{') && assistantText.includes('}');
    
    console.log(`🔍 Pattern Analysis:`);
    console.log(`  Is error message: ${isError ? '✅' : '❌'}`);
    console.log(`  Appears incomplete: ${isIncomplete ? '✅' : '❌'}`);
    console.log(`  Contains JSON: ${hasJSON ? '✅' : '❌'}`);
  }

  // Summary
  console.log('\n📋 DEBUGGING SUMMARY:');
  console.log(`📊 API Responses captured: ${apiResponses.length}`);
  console.log(`📤 Network requests logged: ${page.listeners('request').length > 0 ? 'Yes' : 'No'}`);
  console.log(`💬 Messages in UI: ${messageCount}`);

  if (apiResponses.length > 0) {
    console.log('\n🔍 FIRST API RESPONSE ANALYSIS:');
    const firstResponse = apiResponses[0];
    if (firstResponse.choices && firstResponse.choices[0] && firstResponse.choices[0].message) {
      const aiMessage = firstResponse.choices[0].message.content;
      console.log(`🤖 AI's actual response: "${aiMessage}"`);
      console.log(`📏 AI response length: ${aiMessage?.length || 0} characters`);
      
      if (aiMessage && aiMessage.length < 100) {
        console.log('⚠️ AI gave a very short response despite having full context!');
        console.log('🤔 Possible causes:');
        console.log('  - AI interpreted request as not requiring client creation');
        console.log('  - AI is being overly cautious');
        console.log('  - Instructions need refinement');
      }
    }
  } else {
    console.log('❌ No API responses captured - check network permissions');
  }

  await page.screenshot({ path: 'response-debug-result.png', fullPage: true });
  console.log('📷 Response debug screenshot saved');
});