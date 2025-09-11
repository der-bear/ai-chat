const { test, expect } = require('@playwright/test');

test.describe('Advanced UI Issues Analysis', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`file://${__dirname}/index.html`);
    await page.waitForLoadState('networkidle');
  });

  test('Accessibility Issues Audit', async ({ page }) => {
    console.log('=== ACCESSIBILITY AUDIT ===');
    
    // Check for missing alt texts, labels, and ARIA attributes
    const accessibilityIssues = await page.evaluate(() => {
      const issues = [];
      
      // Check for buttons without accessible names
      document.querySelectorAll('button').forEach((btn, i) => {
        const hasLabel = btn.getAttribute('aria-label') || btn.textContent.trim() || btn.getAttribute('title');
        if (!hasLabel) {
          issues.push(`Button ${i + 1} missing accessible name`);
        }
      });
      
      // Check for inputs without labels
      document.querySelectorAll('input, textarea').forEach((input, i) => {
        const hasLabel = input.getAttribute('aria-label') || input.getAttribute('placeholder') || 
                         document.querySelector(`label[for="${input.id}"]`);
        if (!hasLabel) {
          issues.push(`Input ${i + 1} missing label`);
        }
      });
      
      // Check color contrast issues
      const contrastElements = document.querySelectorAll('.ai-chat__title, .ai-chat__action, .ai-chat__bubble');
      const contrastIssues = [];
      contrastElements.forEach((el, i) => {
        const styles = window.getComputedStyle(el);
        const color = styles.color;
        const bgColor = styles.backgroundColor;
        if (color && bgColor && bgColor !== 'rgba(0, 0, 0, 0)') {
          contrastIssues.push({
            element: el.className,
            color,
            backgroundColor: bgColor
          });
        }
      });
      
      return { issues, contrastIssues };
    });
    
    console.log('Accessibility Issues:', accessibilityIssues.issues);
    console.log('Elements to check contrast:', accessibilityIssues.contrastIssues);
    
    // Test keyboard navigation
    await page.keyboard.press('Tab');
    const focusedElement = await page.evaluate(() => document.activeElement.className);
    console.log('First focusable element:', focusedElement);
  });

  test('Visual Hierarchy and Spacing Issues', async ({ page }) => {
    console.log('=== VISUAL HIERARCHY AUDIT ===');
    
    const hierarchyAnalysis = await page.evaluate(() => {
      const issues = [];
      
      // Check font size consistency
      const fontSizes = new Map();
      document.querySelectorAll('.ai-chat *').forEach(el => {
        const fontSize = window.getComputedStyle(el).fontSize;
        if (!fontSizes.has(fontSize)) fontSizes.set(fontSize, []);
        fontSizes.get(fontSize).push(el.className || el.tagName);
      });
      
      // Check spacing inconsistencies
      const margins = new Map();
      const paddings = new Map();
      
      document.querySelectorAll('.ai-chat *').forEach(el => {
        const styles = window.getComputedStyle(el);
        const margin = styles.margin;
        const padding = styles.padding;
        
        if (margin !== '0px') {
          if (!margins.has(margin)) margins.set(margin, []);
          margins.get(margin).push(el.className || el.tagName);
        }
        
        if (padding !== '0px') {
          if (!paddings.has(padding)) paddings.set(padding, []);
          paddings.get(padding).push(el.className || el.tagName);
        }
      });
      
      return {
        fontSizes: Array.from(fontSizes.entries()),
        margins: Array.from(margins.entries()),
        paddings: Array.from(paddings.entries())
      };
    });
    
    console.log('Font sizes used:', hierarchyAnalysis.fontSizes.length);
    console.log('Margin values:', hierarchyAnalysis.margins.slice(0, 10));
    console.log('Padding values:', hierarchyAnalysis.paddings.slice(0, 10));
  });

  test('Interaction States and Animations', async ({ page }) => {
    console.log('=== INTERACTION STATES AUDIT ===');
    
    // Test hover states
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();
    
    for (let i = 0; i < Math.min(buttonCount, 5); i++) {
      const button = buttons.nth(i);
      const beforeHover = await button.evaluate(el => ({
        backgroundColor: window.getComputedStyle(el).backgroundColor,
        transform: window.getComputedStyle(el).transform,
        boxShadow: window.getComputedStyle(el).boxShadow
      }));
      
      await button.hover();
      await page.waitForTimeout(100);
      
      const afterHover = await button.evaluate(el => ({
        backgroundColor: window.getComputedStyle(el).backgroundColor,
        transform: window.getComputedStyle(el).transform,
        boxShadow: window.getComputedStyle(el).boxShadow
      }));
      
      const hasHoverEffect = JSON.stringify(beforeHover) !== JSON.stringify(afterHover);
      console.log(`Button ${i + 1} has hover effect:`, hasHoverEffect);
    }
    
    // Test focus states
    await page.keyboard.press('Tab');
    const focusStyles = await page.evaluate(() => {
      const focused = document.activeElement;
      return {
        outline: window.getComputedStyle(focused).outline,
        boxShadow: window.getComputedStyle(focused).boxShadow,
        borderColor: window.getComputedStyle(focused).borderColor
      };
    });
    console.log('Focus styles:', focusStyles);
    
    // Test animation performance
    await page.evaluate(() => {
      // Trigger multiple animations
      const chat = document.querySelector('.ai-chat');
      chat.style.transform = 'translateX(10px)';
      setTimeout(() => chat.style.transform = '', 100);
    });
  });

  test('Input Field Edge Cases', async ({ page }) => {
    console.log('=== INPUT FIELD EDGE CASES ===');
    
    const initialInput = page.locator('.ai-chat__initial-input');
    
    // Test very long text
    const longText = 'A'.repeat(1000);
    await initialInput.fill(longText);
    
    const inputBox = await initialInput.boundingBox();
    console.log('Input with 1000 chars:', inputBox);
    
    // Test multiline behavior
    const multilineText = 'Line 1\nLine 2\nLine 3\nLine 4\nLine 5';
    await initialInput.fill(multilineText);
    
    const multilineBox = await initialInput.boundingBox();
    console.log('Multiline input:', multilineBox);
    
    // Test special characters
    const specialText = '🚀 Hello! @#$%^&*()_+ 测试 עברית';
    await initialInput.fill(specialText);
    
    const specialBox = await initialInput.boundingBox();
    console.log('Special characters input:', specialBox);
    
    // Check if input overflows container
    const containerBox = await page.locator('.ai-chat__initial-input-group').boundingBox();
    const overflowsContainer = inputBox.x + inputBox.width > containerBox.x + containerBox.width;
    console.log('Input overflows container:', overflowsContainer);
  });

  test('Theme Switching and Color Issues', async ({ page }) => {
    console.log('=== THEME AND COLOR AUDIT ===');
    
    // Test light theme colors
    const lightColors = await page.evaluate(() => {
      const elements = [
        '.ai-chat',
        '.ai-chat__header',
        '.ai-chat__initial-input',
        '.ai-chat__action'
      ];
      
      return elements.map(selector => {
        const el = document.querySelector(selector);
        if (el) {
          const styles = window.getComputedStyle(el);
          return {
            selector,
            color: styles.color,
            backgroundColor: styles.backgroundColor,
            borderColor: styles.borderColor
          };
        }
        return { selector, found: false };
      });
    });
    
    console.log('Light theme colors:', lightColors);
    
    // Switch to dark theme
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-coreui-theme', 'dark');
    });
    
    await page.waitForTimeout(100);
    
    const darkColors = await page.evaluate(() => {
      const elements = [
        '.ai-chat',
        '.ai-chat__header', 
        '.ai-chat__initial-input',
        '.ai-chat__action'
      ];
      
      return elements.map(selector => {
        const el = document.querySelector(selector);
        if (el) {
          const styles = window.getComputedStyle(el);
          return {
            selector,
            color: styles.color,
            backgroundColor: styles.backgroundColor,
            borderColor: styles.borderColor
          };
        }
        return { selector, found: false };
      });
    });
    
    console.log('Dark theme colors:', darkColors);
    
    // Test for missing dark theme variables
    const missingVars = await page.evaluate(() => {
      const aiChat = document.querySelector('.ai-chat');
      const styles = window.getComputedStyle(aiChat);
      
      const vars = [
        '--ai-chat-bg',
        '--ai-chat-color', 
        '--ai-chat-border',
        '--ai-chat-hover'
      ];
      
      return vars.map(varName => ({
        variable: varName,
        value: styles.getPropertyValue(varName)
      }));
    });
    
    console.log('CSS custom properties:', missingVars);
  });

  test('Layout Breaking Scenarios', async ({ page }) => {
    console.log('=== LAYOUT BREAKING SCENARIOS ===');
    
    // Test with very long conversation history
    await page.evaluate(() => {
      const chat = document.querySelector('.ai-chat');
      chat.classList.remove('ai-chat--initial-state');
      
      const messagesContainer = document.querySelector('.ai-chat__messages');
      
      // Add many messages with varying lengths
      for (let i = 0; i < 50; i++) {
        const messageEl = document.createElement('div');
        messageEl.className = `ai-chat__message ${i % 2 === 0 ? 'ai-chat__message--user' : ''}`;
        
        const longMessage = i % 3 === 0 ? 
          'This is a very long message that should test word wrapping and layout constraints. '.repeat(10) :
          `Short message ${i}`;
          
        messageEl.innerHTML = `
          <div class="ai-chat__avatar ai-chat__avatar--${i % 2 === 0 ? 'user' : 'assistant'}">
            <i class="cil-${i % 2 === 0 ? 'user' : 'star'}"></i>
          </div>
          <div class="ai-chat__content">
            <div class="ai-chat__bubble ai-chat__bubble--${i % 2 === 0 ? 'user' : 'assistant'}">
              ${longMessage}
            </div>
          </div>
        `;
        messagesContainer.appendChild(messageEl);
      }
    });
    
    await page.waitForTimeout(500);
    
    // Check scroll performance
    const scrollInfo = await page.evaluate(() => {
      const container = document.querySelector('.ai-chat__messages');
      const startTime = performance.now();
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
      const endTime = performance.now();
      
      return {
        scrollHeight: container.scrollHeight,
        clientHeight: container.clientHeight,
        scrollPerformance: endTime - startTime
      };
    });
    
    console.log('Scroll with many messages:', scrollInfo);
    
    // Test history panel with many items
    await page.click('.ai-chat__action[aria-label="History"]');
    
    await page.evaluate(() => {
      const historyList = document.querySelector('.ai-chat__history-list');
      
      for (let i = 0; i < 100; i++) {
        const item = document.createElement('button');
        item.className = 'ai-chat__history-item';
        item.innerHTML = `
          <span class="ai-chat__history-item-text">
            Conversation ${i + 1}: ${'Very long conversation title that might cause overflow issues '.repeat(2)}
          </span>
          <span class="ai-chat__history-item-time">${i}d ago</span>
        `;
        historyList.appendChild(item);
      }
    });
    
    const historyScrollInfo = await page.evaluate(() => {
      const historyContent = document.querySelector('.ai-chat__history-content');
      return {
        scrollHeight: historyContent.scrollHeight,
        clientHeight: historyContent.clientHeight,
        hasOverflow: historyContent.scrollHeight > historyContent.clientHeight
      };
    });
    
    console.log('History panel overflow:', historyScrollInfo);
  });

  test('Cross-browser Compatibility Issues', async ({ page, browserName }) => {
    console.log(`=== ${browserName.toUpperCase()} COMPATIBILITY ===`);
    
    // Test CSS feature support
    const featureSupport = await page.evaluate(() => {
      const testDiv = document.createElement('div');
      document.body.appendChild(testDiv);
      
      const features = {
        cssGrid: CSS.supports('display', 'grid'),
        flexbox: CSS.supports('display', 'flex'),
        customProperties: CSS.supports('--test', 'value'),
        minMax: CSS.supports('width', 'min(100px, 50vw)'),
        aspectRatio: CSS.supports('aspect-ratio', '1/1'),
        contain: CSS.supports('contain', 'layout'),
        scrollBehavior: CSS.supports('scroll-behavior', 'smooth')
      };
      
      document.body.removeChild(testDiv);
      return features;
    });
    
    console.log('CSS Feature Support:', featureSupport);
    
    // Test JavaScript API support
    const apiSupport = await page.evaluate(() => ({
      intersectionObserver: 'IntersectionObserver' in window,
      resizeObserver: 'ResizeObserver' in window,
      customElements: 'customElements' in window,
      webAnimations: 'animate' in document.createElement('div'),
      pointerEvents: 'PointerEvent' in window
    }));
    
    console.log('JS API Support:', apiSupport);
  });

  test('Performance and Rendering Issues', async ({ page }) => {
    console.log('=== PERFORMANCE AUDIT ===');
    
    // Test paint performance
    const paintMetrics = await page.evaluate(() => {
      return new Promise((resolve) => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const paintEntries = entries.filter(entry => 
            entry.entryType === 'paint' || entry.entryType === 'measure'
          );
          resolve(paintEntries.map(entry => ({
            name: entry.name,
            startTime: entry.startTime,
            duration: entry.duration || 0
          })));
        });
        
        observer.observe({ entryTypes: ['paint', 'measure'] });
        
        // Trigger a reflow
        const chat = document.querySelector('.ai-chat');
        chat.style.width = '401px';
        setTimeout(() => chat.style.width = '', 100);
        
        setTimeout(() => resolve([]), 1000);
      });
    });
    
    console.log('Paint metrics:', paintMetrics);
    
    // Test memory usage (approximate)
    const elementCount = await page.evaluate(() => {
      return {
        totalElements: document.querySelectorAll('*').length,
        chatElements: document.querySelectorAll('.ai-chat *').length,
        eventListeners: document.querySelectorAll('[onclick], [onmouseover]').length
      };
    });
    
    console.log('DOM complexity:', elementCount);
    
    // Test CSS animation performance
    await page.evaluate(() => {
      const style = document.createElement('style');
      style.textContent = `
        .test-animation {
          animation: testMove 1s ease-in-out;
        }
        @keyframes testMove {
          from { transform: translateX(0); }
          to { transform: translateX(100px); }
        }
      `;
      document.head.appendChild(style);
      
      const chat = document.querySelector('.ai-chat');
      chat.classList.add('test-animation');
      
      setTimeout(() => {
        chat.classList.remove('test-animation');
        document.head.removeChild(style);
      }, 1000);
    });
  });

  test('Edge Case User Interactions', async ({ page }) => {
    console.log('=== EDGE CASE INTERACTIONS ===');
    
    // Test rapid clicking
    const sendButton = page.locator('.ai-chat__initial-send');
    
    for (let i = 0; i < 10; i++) {
      await sendButton.click({ force: true });
      await page.waitForTimeout(50);
    }
    
    // Test keyboard spam
    await page.locator('.ai-chat__initial-input').focus();
    for (let i = 0; i < 20; i++) {
      await page.keyboard.press('a');
      await page.waitForTimeout(10);
    }
    
    // Test touch gestures simulation
    const chatContainer = page.locator('.ai-chat');
    const box = await chatContainer.boundingBox();
    
    if (box) {
      // Simulate pinch gesture
      await page.touchscreen.tap(box.x + box.width / 2, box.y + box.height / 2);
      
      // Simulate swipe
      await page.mouse.move(box.x + 10, box.y + 100);
      await page.mouse.down();
      await page.mouse.move(box.x + 100, box.y + 100);
      await page.mouse.up();
    }
    
    console.log('Rapid interactions completed');
  });
});