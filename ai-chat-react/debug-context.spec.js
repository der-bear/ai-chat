import { test, expect } from '@playwright/test';

test('Debug Context Loading', async ({ page }) => {
  console.log('🔍 Debugging AI Context Loading...');

  const consoleMessages = [];
  
  page.on('console', (msg) => {
    consoleMessages.push({
      type: msg.type(),
      text: msg.text(),
      timestamp: new Date().toISOString()
    });
    
    if (msg.type() === 'log' && msg.text().includes('CONTEXT_DEBUG')) {
      console.log(`🐛 ${msg.text()}`);
    } else if (msg.type() === 'error') {
      console.log(`❌ ${msg.text()}`);
    }
  });

  // Navigate and inject debugging code
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(2000);

  // Inject debugging code to check what's being loaded
  await page.evaluate(() => {
    // Override console.log to capture our debug messages
    const originalLog = console.log;
    console.log = (...args) => {
      originalLog(...args);
      if (args[0] && args[0].includes('CONTEXT_DEBUG')) {
        // Also log to a global variable we can access
        window.debugLogs = window.debugLogs || [];
        window.debugLogs.push(args.join(' '));
      }
    };

    // Check if markdown files are loaded
    console.log('CONTEXT_DEBUG: Starting context debugging...');
    
    // Try to access the markdown content through React DevTools or global variables
    setTimeout(() => {
      console.log('CONTEXT_DEBUG: Checking for loaded content...');
      
      // Check if there are any script tags with markdown content
      const scripts = document.querySelectorAll('script');
      let foundMarkdown = false;
      
      scripts.forEach((script, index) => {
        if (script.textContent && (script.textContent.includes('Client Creation Flow') || script.textContent.includes('knowledgebase'))) {
          console.log(`CONTEXT_DEBUG: Found markdown in script ${index}`);
          console.log(`CONTEXT_DEBUG: Script length: ${script.textContent.length}`);
          foundMarkdown = true;
        }
      });
      
      if (!foundMarkdown) {
        console.log('CONTEXT_DEBUG: No markdown content found in scripts');
      }
    }, 1000);
  });

  // Wait for debugging to complete
  await page.waitForTimeout(2000);

  // Test a client creation request and capture network requests
  const networkRequests = [];
  page.on('request', (request) => {
    if (request.url().includes('openai.com')) {
      networkRequests.push({
        url: request.url(),
        method: request.method(),
        headers: request.headers(),
        postDataBuffer: request.postDataBuffer()
      });
    }
  });

  page.on('response', async (response) => {
    if (response.url().includes('openai.com')) {
      console.log(`🌐 OpenAI API Response: ${response.status()} ${response.statusText()}`);
      try {
        const responseText = await response.text();
        console.log(`📄 Response length: ${responseText.length} characters`);
        if (responseText.length < 1000) {
          console.log(`📝 Response preview: ${responseText.substring(0, 200)}...`);
        }
      } catch (e) {
        console.log('❌ Could not read response body');
      }
    }
  });

  // Send a test message
  const initialInput = page.locator('.ai-chat__initial-input');
  await initialInput.fill('Create a client for TestCorp with John Doe at john@testcorp.com');
  
  const sendButton = page.locator('.ai-chat__initial-send');
  await sendButton.click();

  // Wait for the request to complete
  await page.waitForTimeout(5000);

  // Check what was actually sent to OpenAI
  if (networkRequests.length > 0) {
    console.log('\n🌐 NETWORK REQUESTS TO OPENAI:');
    networkRequests.forEach((req, index) => {
      console.log(`Request ${index + 1}:`);
      console.log(`  URL: ${req.url}`);
      console.log(`  Method: ${req.method}`);
      
      if (req.postDataBuffer) {
        try {
          const postData = JSON.parse(req.postDataBuffer.toString());
          console.log(`  Model: ${postData.model}`);
          console.log(`  Messages count: ${postData.messages?.length || 0}`);
          
          if (postData.messages) {
            postData.messages.forEach((msg, msgIndex) => {
              console.log(`    Message ${msgIndex + 1}: ${msg.role} (${msg.content?.length || 0} chars)`);
              if (msg.role === 'developer' && msg.content) {
                const hasClientFlow = msg.content.includes('Client Creation Flow');
                const hasKnowledgeBase = msg.content.includes('LeadExec Copilot Documentation');
                console.log(`      Contains Client Flow: ${hasClientFlow ? '✅' : '❌'}`);
                console.log(`      Contains Knowledge Base: ${hasKnowledgeBase ? '✅' : '❌'}`);
                if (msg.content.length > 0) {
                  console.log(`      Content preview: ${msg.content.substring(0, 100)}...`);
                }
              }
            });
          }
        } catch (e) {
          console.log('  Could not parse request body');
        }
      }
    });
  } else {
    console.log('❌ No OpenAI API requests captured');
  }

  // Get debug logs from page
  const debugLogs = await page.evaluate(() => {
    return window.debugLogs || [];
  });

  console.log('\n🐛 PAGE DEBUG LOGS:');
  debugLogs.forEach((log, index) => {
    console.log(`  ${index + 1}. ${log}`);
  });

  await page.screenshot({ path: 'context-debug-result.png', fullPage: true });
  console.log('📷 Debug screenshot saved');
});