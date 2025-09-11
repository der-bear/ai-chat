const { test, expect } = require('@playwright/test');

test.describe('Visual UI Issues', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`file://${__dirname}/index.html`);
    await page.waitForLoadState('networkidle');
  });

  test('Button Visibility Issues', async ({ page }) => {
    console.log('=== BUTTON VISIBILITY ANALYSIS ===');
    
    // Check all buttons visibility and click ability
    const buttons = await page.locator('button').all();
    
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      const isVisible = await button.isVisible();
      const isEnabled = await button.isEnabled();
      const boundingBox = await button.boundingBox();
      const text = await button.textContent();
      const ariaLabel = await button.getAttribute('aria-label');
      const className = await button.getAttribute('class');
      const id = await button.getAttribute('id');
      
      console.log(`Button ${i + 1}:`, {
        id: id || 'no-id',
        className: className || 'no-class',
        text: text?.trim() || 'no-text',
        ariaLabel: ariaLabel || 'no-aria-label',
        isVisible,
        isEnabled,
        boundingBox: boundingBox ? {
          x: Math.round(boundingBox.x),
          y: Math.round(boundingBox.y),
          width: Math.round(boundingBox.width),
          height: Math.round(boundingBox.height)
        } : null
      });
    }
    
    // Specifically test new chat and back buttons
    const newChatBtn = page.locator('#newChatBtn');
    const backBtn = page.locator('#backBtn');
    
    console.log('New Chat Button visible:', await newChatBtn.isVisible());
    console.log('Back Button visible:', await backBtn.isVisible());
    
    // Check computed styles for hidden buttons
    const newChatStyles = await newChatBtn.evaluate(el => {
      const styles = window.getComputedStyle(el);
      return {
        display: styles.display,
        visibility: styles.visibility,
        opacity: styles.opacity,
        transform: styles.transform,
        position: styles.position
      };
    });
    
    const backStyles = await backBtn.evaluate(el => {
      const styles = window.getComputedStyle(el);
      return {
        display: styles.display,
        visibility: styles.visibility,
        opacity: styles.opacity,
        transform: styles.transform,
        position: styles.position
      };
    });
    
    console.log('New Chat Button styles:', newChatStyles);
    console.log('Back Button styles:', backStyles);
  });

  test('Initial State UI Problems', async ({ page }) => {
    console.log('=== INITIAL STATE ANALYSIS ===');
    
    // Check what's visible in initial state
    const initialStateElements = [
      '.ai-chat__initial',
      '.ai-chat__new-chat-btn',
      '.ai-chat__back',
      '.ai-chat__messages',
      '.ai-chat__footer'
    ];
    
    for (const selector of initialStateElements) {
      const element = page.locator(selector);
      const isVisible = await element.isVisible();
      const display = await element.evaluate(el => window.getComputedStyle(el).display);
      
      console.log(`${selector}:`, { isVisible, display });
    }
    
    // Check if AI chat has initial state class
    const hasInitialState = await page.locator('.ai-chat').evaluate(el => 
      el.classList.contains('ai-chat--initial-state')
    );
    
    console.log('Has initial state class:', hasInitialState);
  });

  test('Chat State Transition Issues', async ({ page }) => {
    console.log('=== CHAT STATE TRANSITION ===');
    
    // Fill initial input and try to send
    const initialInput = page.locator('.ai-chat__initial-input');
    const initialSendBtn = page.locator('.ai-chat__initial-send');
    
    await initialInput.fill('Test message');
    
    console.log('Initial send button visible:', await initialSendBtn.isVisible());
    console.log('Initial send button enabled:', await initialSendBtn.isEnabled());
    
    // Click send to transition to chat view
    await initialSendBtn.click();
    await page.waitForTimeout(500);
    
    // Check what's visible after transition
    const afterTransitionElements = [
      '.ai-chat__initial',
      '.ai-chat__new-chat-btn',
      '.ai-chat__back',
      '.ai-chat__messages',
      '.ai-chat__footer'
    ];
    
    console.log('After transition to chat view:');
    for (const selector of afterTransitionElements) {
      const element = page.locator(selector);
      const isVisible = await element.isVisible();
      
      console.log(`${selector}: visible = ${isVisible}`);
    }
    
    // Check new chat button specifically
    const newChatVisible = await page.locator('.ai-chat__new-chat-btn').isVisible();
    console.log('New chat button visible after transition:', newChatVisible);
  });

  test('History Panel Button Issues', async ({ page }) => {
    console.log('=== HISTORY PANEL BUTTONS ===');
    
    // Try to click history button
    const historyBtn = page.locator('#historyBtn');
    
    console.log('History button visible:', await historyBtn.isVisible());
    console.log('History button enabled:', await historyBtn.isEnabled());
    
    // Click history button
    await historyBtn.click();
    await page.waitForTimeout(300);
    
    // Check if history panel is shown
    const historyPanel = page.locator('.ai-chat__history');
    const historyVisible = await historyPanel.isVisible();
    
    console.log('History panel visible after click:', historyVisible);
    
    // Check back button in history
    const backBtnVisible = await page.locator('#backBtn').isVisible();
    console.log('Back button visible in history mode:', backBtnVisible);
    
    // Check classes on root element
    const chatClasses = await page.locator('.ai-chat').getAttribute('class');
    console.log('Chat classes after history click:', chatClasses);
  });

  test('Action Buttons Layout', async ({ page }) => {
    console.log('=== ACTION BUTTONS LAYOUT ===');
    
    const actionButtons = page.locator('.ai-chat__action');
    const count = await actionButtons.count();
    
    console.log(`Found ${count} action buttons`);
    
    for (let i = 0; i < count; i++) {
      const button = actionButtons.nth(i);
      const ariaLabel = await button.getAttribute('aria-label');
      const title = await button.getAttribute('title');
      const isVisible = await button.isVisible();
      const boundingBox = await button.boundingBox();
      
      console.log(`Action button ${i + 1}:`, {
        ariaLabel: ariaLabel || 'missing',
        title: title || 'missing',
        isVisible,
        position: boundingBox ? {
          x: Math.round(boundingBox.x),
          y: Math.round(boundingBox.y)
        } : null
      });
    }
  });

  test('Take Screenshots for Visual Inspection', async ({ page }) => {
    // Initial state
    await page.screenshot({ 
      path: 'test-results/initial-state.png', 
      fullPage: true 
    });
    
    // Try to transition to chat
    const initialInput = page.locator('.ai-chat__initial-input');
    const initialSendBtn = page.locator('.ai-chat__initial-send');
    
    if (await initialInput.isVisible()) {
      await initialInput.fill('Test message for screenshot');
      await page.screenshot({ 
        path: 'test-results/with-input-text.png', 
        fullPage: true 
      });
      
      if (await initialSendBtn.isVisible()) {
        await initialSendBtn.click();
        await page.waitForTimeout(500);
        
        await page.screenshot({ 
          path: 'test-results/after-send.png', 
          fullPage: true 
        });
      }
    }
    
    // Try history panel
    const historyBtn = page.locator('#historyBtn');
    if (await historyBtn.isVisible()) {
      await historyBtn.click();
      await page.waitForTimeout(300);
      
      await page.screenshot({ 
        path: 'test-results/history-panel.png', 
        fullPage: true 
      });
    }
  });

  test('CSS Display Issues Debug', async ({ page }) => {
    console.log('=== CSS DISPLAY DEBUG ===');
    
    // Check all CSS rules that might hide elements
    const hiddenElements = await page.evaluate(() => {
      const elements = document.querySelectorAll('.ai-chat *');
      const hidden = [];
      
      elements.forEach((el, i) => {
        const styles = window.getComputedStyle(el);
        const className = el.className || el.tagName.toLowerCase();
        
        if (styles.display === 'none' || 
            styles.visibility === 'hidden' || 
            parseFloat(styles.opacity) === 0) {
          hidden.push({
            index: i,
            className,
            display: styles.display,
            visibility: styles.visibility,
            opacity: styles.opacity,
            position: styles.position
          });
        }
      });
      
      return hidden;
    });
    
    console.log('Hidden elements:', hiddenElements.slice(0, 20)); // Limit output
    
    // Check specific CSS rules for buttons
    const buttonStyles = await page.evaluate(() => {
      const buttons = [
        '.ai-chat__new-chat-btn',
        '.ai-chat__back',
        '.ai-chat__action'
      ];
      
      return buttons.map(selector => {
        const el = document.querySelector(selector);
        if (el) {
          const styles = window.getComputedStyle(el);
          return {
            selector,
            display: styles.display,
            visibility: styles.visibility,
            opacity: styles.opacity,
            position: styles.position,
            zIndex: styles.zIndex
          };
        }
        return { selector, found: false };
      });
    });
    
    console.log('Button-specific styles:', buttonStyles);
  });
});