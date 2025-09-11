import { test, expect } from '@playwright/test';

test('Debug React App - Check for console errors', async ({ page }) => {
  // Listen for console messages and errors
  const consoleMessages = [];
  const errors = [];
  
  page.on('console', (msg) => {
    consoleMessages.push({
      type: msg.type(),
      text: msg.text(),
      location: msg.location()
    });
    console.log(`Console ${msg.type()}: ${msg.text()}`);
  });

  page.on('pageerror', (error) => {
    errors.push(error.message);
    console.log(`Page Error: ${error.message}`);
  });

  // Start the dev server
  console.log('Starting dev server...');
  
  try {
    // Navigate to the app
    await page.goto('http://localhost:5173', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });

    // Wait a bit for React to load
    await page.waitForTimeout(2000);

    // Check if the page loaded successfully
    const title = await page.title();
    console.log(`Page title: ${title}`);

    // Look for any React components
    const appRoot = await page.locator('#root').first();
    const isVisible = await appRoot.isVisible();
    console.log(`App root visible: ${isVisible}`);

    // Take a screenshot
    await page.screenshot({ path: 'debug-screenshot.png', fullPage: true });

    // Check for specific elements
    const darkModeToggle = await page.locator('.dark-mode-toggle').first();
    const chatComponent = await page.locator('.ai-chat').first();
    
    console.log(`Dark mode toggle found: ${await darkModeToggle.isVisible()}`);
    console.log(`Chat component found: ${await chatComponent.isVisible()}`);

    // Print all console messages
    console.log('All console messages:');
    consoleMessages.forEach((msg, index) => {
      console.log(`${index + 1}. [${msg.type}] ${msg.text}`);
      if (msg.location) {
        console.log(`   Location: ${msg.location.url}:${msg.location.lineNumber}`);
      }
    });

    // Print all errors
    if (errors.length > 0) {
      console.log('Page errors found:');
      errors.forEach((error, index) => {
        console.log(`${index + 1}. ${error}`);
      });
    } else {
      console.log('No page errors found');
    }

    // Check for specific error patterns
    const importErrors = consoleMessages.filter(msg => 
      msg.text.includes('Importing binding name') || 
      msg.text.includes('import') ||
      msg.text.includes('Module not found')
    );

    if (importErrors.length > 0) {
      console.log('Import-related errors:');
      importErrors.forEach(error => console.log(`- ${error.text}`));
    }

  } catch (error) {
    console.log(`Error during test: ${error.message}`);
    
    // Check if server is running
    try {
      const response = await page.request.get('http://localhost:5173');
      console.log(`Server response status: ${response.status()}`);
    } catch (serverError) {
      console.log(`Server not accessible: ${serverError.message}`);
      console.log('Please start the dev server with: npm run dev');
    }
  }
});