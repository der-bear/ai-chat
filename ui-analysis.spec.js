const { test, expect } = require('@playwright/test');

test.describe('AI Chat UI Layout Analysis', () => {
  test.beforeEach(async ({ page }) => {
    // Serve the HTML file - we'll use file:// protocol
    await page.goto(`file://${__dirname}/index.html`);
    await page.waitForLoadState('networkidle');
  });

  test('Overall Layout Structure', async ({ page }) => {
    // Check if main chat component exists
    const aiChat = page.locator('.ai-chat');
    await expect(aiChat).toBeVisible();
    
    // Check initial state
    const initialState = page.locator('.ai-chat__initial');
    await expect(initialState).toBeVisible();
    
    // Log dimensions
    const chatBox = await aiChat.boundingBox();
    console.log('Chat component dimensions:', chatBox);
    
    // Check for overflow issues
    const hasOverflow = await page.evaluate(() => {
      const element = document.querySelector('.ai-chat');
      const computed = window.getComputedStyle(element);
      return {
        overflowX: computed.overflowX,
        overflowY: computed.overflowY,
        width: element.offsetWidth,
        height: element.offsetHeight
      };
    });
    console.log('Overflow properties:', hasOverflow);
  });

  test('Initial State Layout', async ({ page }) => {
    // Check logo section
    const logo = page.locator('.ai-chat__logo');
    await expect(logo).toBeVisible();
    
    const logoBox = await logo.boundingBox();
    console.log('Logo dimensions:', logoBox);
    
    // Check if logo is properly centered
    const logoSection = page.locator('.ai-chat__logo-section');
    const logSectionBox = await logoSection.boundingBox();
    console.log('Logo section dimensions:', logSectionBox);
    
    // Check input area
    const initialInput = page.locator('.ai-chat__initial-input');
    await expect(initialInput).toBeVisible();
    
    const inputBox = await initialInput.boundingBox();
    console.log('Initial input dimensions:', inputBox);
    
    // Check send button positioning
    const sendBtn = page.locator('.ai-chat__initial-send');
    const sendBtnBox = await sendBtn.boundingBox();
    console.log('Send button dimensions:', sendBtnBox);
  });

  test('Header Layout and Actions', async ({ page }) => {
    const header = page.locator('.ai-chat__header');
    await expect(header).toBeVisible();
    
    // Check header height
    const headerBox = await header.boundingBox();
    console.log('Header dimensions:', headerBox);
    
    // Check if actions are properly aligned
    const actions = page.locator('.ai-chat__actions');
    const actionsBox = await actions.boundingBox();
    console.log('Actions area dimensions:', actionsBox);
    
    // Test action buttons
    const actionButtons = page.locator('.ai-chat__action');
    const buttonCount = await actionButtons.count();
    console.log(`Found ${buttonCount} action buttons`);
    
    for (let i = 0; i < buttonCount; i++) {
      const button = actionButtons.nth(i);
      const buttonBox = await button.boundingBox();
      console.log(`Action button ${i} dimensions:`, buttonBox);
    }
  });

  test('Responsive Layout - Mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(100);
    
    const aiChat = page.locator('.ai-chat');
    const chatBox = await aiChat.boundingBox();
    console.log('Mobile - Chat component dimensions:', chatBox);
    
    // Check if elements are still visible and properly sized
    const initialInput = page.locator('.ai-chat__initial-input');
    const inputBox = await initialInput.boundingBox();
    console.log('Mobile - Initial input dimensions:', inputBox);
    
    // Check for horizontal overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    console.log('Mobile - Has horizontal overflow:', hasHorizontalOverflow);
  });

  test('Responsive Layout - Tablet', async ({ page }) => {
    // Set tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(100);
    
    const aiChat = page.locator('.ai-chat');
    const chatBox = await aiChat.boundingBox();
    console.log('Tablet - Chat component dimensions:', chatBox);
  });

  test('Panel Resize Functionality', async ({ page }) => {
    // Test the resize separator
    const separator = page.locator('.ai-chat__separator');
    await expect(separator).toBeVisible();
    
    const separatorBox = await separator.boundingBox();
    console.log('Resize separator dimensions:', separatorBox);
    
    // Check CSS custom property for panel width
    const panelWidth = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--chat-panel-width');
    });
    console.log('Current panel width CSS custom property:', panelWidth);
  });

  test('Z-Index and Stacking Context', async ({ page }) => {
    const zIndexInfo = await page.evaluate(() => {
      const elements = [
        '.ai-chat',
        '.ai-chat__separator',
        '.ai-chat--minimized'
      ];
      
      return elements.map(selector => {
        const element = document.querySelector(selector);
        if (element) {
          const computed = window.getComputedStyle(element);
          return {
            selector,
            zIndex: computed.zIndex,
            position: computed.position
          };
        }
        return { selector, found: false };
      });
    });
    console.log('Z-index analysis:', zIndexInfo);
  });

  test('Scroll and Overflow Analysis', async ({ page }) => {
    // Add some test messages to trigger scrolling
    await page.evaluate(() => {
      // Simulate switching to chat view
      const aiChat = document.querySelector('.ai-chat');
      aiChat.classList.remove('ai-chat--initial-state');
      
      // Add test messages
      const messagesContainer = document.querySelector('.ai-chat__messages');
      for (let i = 0; i < 20; i++) {
        const messageEl = document.createElement('div');
        messageEl.className = 'ai-chat__message';
        messageEl.innerHTML = `
          <div class="ai-chat__avatar ai-chat__avatar--user">
            <i class="cil-user"></i>
          </div>
          <div class="ai-chat__content">
            <div class="ai-chat__bubble ai-chat__bubble--user">
              This is test message ${i + 1} to check scrolling behavior and layout.
            </div>
          </div>
        `;
        messagesContainer.appendChild(messageEl);
      }
    });
    
    await page.waitForTimeout(100);
    
    // Check scroll properties
    const scrollInfo = await page.evaluate(() => {
      const messagesContainer = document.querySelector('.ai-chat__messages');
      return {
        scrollHeight: messagesContainer.scrollHeight,
        clientHeight: messagesContainer.clientHeight,
        scrollTop: messagesContainer.scrollTop,
        hasVerticalScrollbar: messagesContainer.scrollHeight > messagesContainer.clientHeight
      };
    });
    console.log('Scroll analysis:', scrollInfo);
  });

  test('Input Field Behavior', async ({ page }) => {
    const initialInput = page.locator('.ai-chat__initial-input');
    
    // Test initial input expansion
    await initialInput.fill('This is a very long message that should cause the textarea to expand and test the expanding behavior of the input field.');
    await page.waitForTimeout(100);
    
    const expandedInputBox = await initialInput.boundingBox();
    console.log('Expanded initial input dimensions:', expandedInputBox);
    
    // Check if expanding class is applied
    const hasExpandingClass = await page.evaluate(() => {
      return document.querySelector('.ai-chat__initial-input-group').classList.contains('expanding');
    });
    console.log('Input group has expanding class:', hasExpandingClass);
  });

  test('Color Contrast and Accessibility', async ({ page }) => {
    // Test color contrast
    const colorAnalysis = await page.evaluate(() => {
      const elements = [
        '.ai-chat__title',
        '.ai-chat__initial-input',
        '.ai-chat__bubble--user',
        '.ai-chat__bubble--assistant'
      ];
      
      return elements.map(selector => {
        const element = document.querySelector(selector);
        if (element) {
          const computed = window.getComputedStyle(element);
          return {
            selector,
            color: computed.color,
            backgroundColor: computed.backgroundColor,
            fontSize: computed.fontSize,
            lineHeight: computed.lineHeight
          };
        }
        return { selector, found: false };
      });
    });
    console.log('Color and typography analysis:', colorAnalysis);
  });

  test('Dark Mode Layout', async ({ page }) => {
    // Toggle to dark mode
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-coreui-theme', 'dark');
    });
    
    await page.waitForTimeout(100);
    
    const darkModeColors = await page.evaluate(() => {
      const aiChat = document.querySelector('.ai-chat');
      const computed = window.getComputedStyle(aiChat);
      return {
        backgroundColor: computed.backgroundColor,
        color: computed.color,
        borderColor: computed.borderColor
      };
    });
    console.log('Dark mode colors:', darkModeColors);
  });

  test('History Panel Layout', async ({ page }) => {
    // Open history panel
    await page.click('.ai-chat__action[aria-label="History"]');
    await page.waitForTimeout(100);
    
    const historyPanel = page.locator('.ai-chat__history');
    await expect(historyPanel).toBeVisible();
    
    const historyBox = await historyPanel.boundingBox();
    console.log('History panel dimensions:', historyBox);
    
    // Check search input
    const searchInput = page.locator('.ai-chat__history-search-input');
    const searchBox = await searchInput.boundingBox();
    console.log('History search input dimensions:', searchBox);
  });
});