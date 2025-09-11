const { test, expect } = require('@playwright/test');

test.describe('Final UI Issues Check', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`file://${__dirname}/index.html`);
    await page.waitForLoadState('networkidle');
  });

  test('Complete UI Flow Test', async ({ page }) => {
    console.log('=== COMPLETE UI FLOW TEST ===');
    
    // 1. Initial State Check
    console.log('1. Initial State:');
    
    const initialElements = {
      initialPanel: await page.locator('.ai-chat__initial').isVisible(),
      newChatBtn: await page.locator('.ai-chat__new-chat-btn').isVisible(),
      backBtn: await page.locator('.ai-chat__back').isVisible(),
      messagesPanel: await page.locator('.ai-chat__messages').isVisible(),
      footer: await page.locator('.ai-chat__footer').isVisible(),
      initialInput: await page.locator('.ai-chat__initial-input').isVisible(),
      initialSendBtn: await page.locator('.ai-chat__initial-send').isVisible()
    };
    
    console.log('Initial state visibility:', initialElements);
    
    // 2. Send Initial Message
    console.log('2. Sending initial message:');
    const initialInput = page.locator('.ai-chat__initial-input');
    const initialSendBtn = page.locator('.ai-chat__initial-send');
    
    await initialInput.fill('Hello, this is a test message');
    await initialSendBtn.click();
    await page.waitForTimeout(1000);
    
    // 3. Chat State Check
    console.log('3. Chat State after message:');
    
    const chatElements = {
      initialPanel: await page.locator('.ai-chat__initial').isVisible(),
      newChatBtn: await page.locator('.ai-chat__new-chat-btn').isVisible(),
      backBtn: await page.locator('.ai-chat__back').isVisible(),
      messagesPanel: await page.locator('.ai-chat__messages').isVisible(),
      footer: await page.locator('.ai-chat__footer').isVisible(),
      regularInput: await page.locator('.ai-chat__input').isVisible(),
      regularSendBtn: await page.locator('.ai-chat__send').isVisible()
    };
    
    console.log('Chat state visibility:', chatElements);
    
    // 4. Check for messages
    const messageCount = await page.locator('.ai-chat__message').count();
    console.log('Messages created:', messageCount);
    
    // 5. Test History Panel
    console.log('4. Testing history panel:');
    const historyBtn = page.locator('#historyBtn');
    await historyBtn.click();
    await page.waitForTimeout(300);
    
    const historyElements = {
      historyPanel: await page.locator('.ai-chat__history').isVisible(),
      backBtnInHistory: await page.locator('.ai-chat__back').isVisible(),
      newChatBtnInHistory: await page.locator('.ai-chat__new-chat-btn').isVisible(),
      historySearch: await page.locator('.ai-chat__history-search-input').isVisible(),
      historyList: await page.locator('.ai-chat__history-list').isVisible()
    };
    
    console.log('History state visibility:', historyElements);
    
    // 6. Test back button functionality
    console.log('5. Testing back button:');
    const backBtn = page.locator('.ai-chat__back');
    if (await backBtn.isVisible()) {
      await backBtn.click();
      await page.waitForTimeout(300);
      
      const afterBack = {
        historyPanel: await page.locator('.ai-chat__history').isVisible(),
        messagesPanel: await page.locator('.ai-chat__messages').isVisible(),
        backBtn: await page.locator('.ai-chat__back').isVisible()
      };
      
      console.log('After back click:', afterBack);
    }
    
    // 7. Test New Chat functionality
    console.log('6. Testing new chat:');
    const newChatBtn = page.locator('.ai-chat__new-chat-btn');
    if (await newChatBtn.isVisible()) {
      await newChatBtn.click();
      await page.waitForTimeout(300);
      
      const afterNewChat = {
        initialPanel: await page.locator('.ai-chat__initial').isVisible(),
        messagesPanel: await page.locator('.ai-chat__messages').isVisible(),
        messageCount: await page.locator('.ai-chat__message').count()
      };
      
      console.log('After new chat:', afterNewChat);
    }
  });

  test('Accessibility Audit - Final Check', async ({ page }) => {
    console.log('=== FINAL ACCESSIBILITY CHECK ===');
    
    // Check all interactive elements have proper labels
    const interactiveElements = await page.evaluate(() => {
      const elements = document.querySelectorAll('button, input, textarea');
      const issues = [];
      
      elements.forEach((el, i) => {
        const hasLabel = el.getAttribute('aria-label') || 
                        el.getAttribute('title') || 
                        el.textContent?.trim() ||
                        (el.tagName === 'INPUT' && el.getAttribute('placeholder')) ||
                        (el.tagName === 'TEXTAREA' && el.getAttribute('placeholder'));
                        
        if (!hasLabel) {
          issues.push({
            index: i,
            tagName: el.tagName,
            className: el.className,
            id: el.id || 'no-id'
          });
        }
      });
      
      return issues;
    });
    
    console.log('Elements missing accessibility labels:', interactiveElements);
    
    // Check focus management
    await page.keyboard.press('Tab');
    const firstFocused = await page.evaluate(() => {
      const focused = document.activeElement;
      return {
        tagName: focused.tagName,
        className: focused.className,
        id: focused.id || 'no-id'
      };
    });
    console.log('First focusable element:', firstFocused);
    
    // Check tab order
    const tabOrder = [];
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
      const focused = await page.evaluate(() => {
        const focused = document.activeElement;
        return {
          tagName: focused.tagName,
          className: focused.className,
          id: focused.id || 'no-id'
        };
      });
      tabOrder.push(focused);
    }
    console.log('Tab order:', tabOrder);
  });

  test('Edge Cases and Error States', async ({ page }) => {
    console.log('=== EDGE CASES TEST ===');
    
    // Test empty input submission
    const initialSendBtn = page.locator('.ai-chat__initial-send');
    await initialSendBtn.click(); // Try to send with empty input
    
    const stillInInitialState = await page.locator('.ai-chat--initial-state').count();
    console.log('Empty submission - still in initial state:', stillInInitialState > 0);
    
    // Test very long input
    const initialInput = page.locator('.ai-chat__initial-input');
    const longText = 'A'.repeat(2000);
    await initialInput.fill(longText);
    
    const inputHeight = await initialInput.evaluate(el => el.offsetHeight);
    const maxHeight = await initialInput.evaluate(el => 
      parseInt(window.getComputedStyle(el).maxHeight)
    );
    
    console.log('Long text input:', { inputHeight, maxHeight, respectsMaxHeight: inputHeight <= maxHeight });
    
    // Test rapid clicks
    for (let i = 0; i < 5; i++) {
      await initialSendBtn.click({ force: true });
      await page.waitForTimeout(50);
    }
    
    const messagesAfterRapidClicks = await page.locator('.ai-chat__message').count();
    console.log('Messages after rapid clicks:', messagesAfterRapidClicks);
    
    // Test window resize behavior
    await page.setViewportSize({ width: 400, height: 600 });
    await page.waitForTimeout(200);
    
    const mobileLayout = await page.evaluate(() => {
      const chat = document.querySelector('.ai-chat');
      const box = chat.getBoundingClientRect();
      return {
        width: box.width,
        x: box.x,
        fitsInViewport: box.x >= 0 && (box.x + box.width) <= window.innerWidth
      };
    });
    
    console.log('Mobile layout check:', mobileLayout);
  });

  test('Visual Consistency Check', async ({ page }) => {
    console.log('=== VISUAL CONSISTENCY CHECK ===');
    
    // Check consistent spacing
    const spacingAnalysis = await page.evaluate(() => {
      const paddings = new Set();
      const margins = new Set();
      const borderRadii = new Set();
      
      document.querySelectorAll('.ai-chat *').forEach(el => {
        const styles = window.getComputedStyle(el);
        if (styles.padding !== '0px') paddings.add(styles.padding);
        if (styles.margin !== '0px') margins.add(styles.margin);
        if (styles.borderRadius !== '0px') borderRadii.add(styles.borderRadius);
      });
      
      return {
        uniquePaddings: Array.from(paddings).length,
        uniqueMargins: Array.from(margins).length,
        uniqueBorderRadii: Array.from(borderRadii).length
      };
    });
    
    console.log('Spacing consistency:', spacingAnalysis);
    
    // Check color consistency
    const colorAnalysis = await page.evaluate(() => {
      const colors = new Set();
      const backgrounds = new Set();
      
      document.querySelectorAll('.ai-chat *').forEach(el => {
        const styles = window.getComputedStyle(el);
        if (styles.color !== 'rgba(0, 0, 0, 0)') colors.add(styles.color);
        if (styles.backgroundColor !== 'rgba(0, 0, 0, 0)') backgrounds.add(styles.backgroundColor);
      });
      
      return {
        uniqueColors: Array.from(colors).length,
        uniqueBackgrounds: Array.from(backgrounds).length
      };
    });
    
    console.log('Color consistency:', colorAnalysis);
    
    // Check font consistency
    const fontAnalysis = await page.evaluate(() => {
      const fonts = new Set();
      const fontSizes = new Set();
      const lineHeights = new Set();
      
      document.querySelectorAll('.ai-chat *').forEach(el => {
        const styles = window.getComputedStyle(el);
        fonts.add(styles.fontFamily);
        fontSizes.add(styles.fontSize);
        lineHeights.add(styles.lineHeight);
      });
      
      return {
        uniqueFonts: Array.from(fonts).length,
        uniqueFontSizes: Array.from(fontSizes).length,
        uniqueLineHeights: Array.from(lineHeights).length
      };
    });
    
    console.log('Typography consistency:', fontAnalysis);
  });
});