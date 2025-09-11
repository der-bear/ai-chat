import { test, expect } from '@playwright/test';

test.describe('LeadExec Copilot Chat Workflow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5174');
    await page.waitForLoadState('networkidle');
  });

  test('should complete full client creation workflow', async ({ page }) => {
    // Test initial screen
    await expect(page.getByText('LeadExec Copilot')).toBeVisible();
    await expect(page.getByText('Expert client setup and lead delivery specialist')).toBeVisible();
    
    // Test quick action button
    await expect(page.getByText('Create Client')).toBeVisible();
    await expect(page.getByText('Manage Delivery')).toBeDisabled();
    
    // Click Create Client button
    await page.getByText('Create Client').click();
    
    // Should start client creation flow
    await expect(page.getByText(/From your input, I have/)).toBeVisible();
    
    // Test data extraction
    await page.getByPlaceholder('Type your message...').fill('Pacific Coast Lending, Sarah Martinez, sarah@pacific.com, 555-0123, San Diego CA, Pacific');
    await page.keyboard.press('Enter');
    
    // Should show credential choice with buttons
    await expect(page.getByText(/For the client portal access/)).toBeVisible();
    await expect(page.getByRole('button', { name: 'Auto-generate' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Custom' })).toBeVisible();
    
    // Choose auto-generate
    await page.getByRole('button', { name: 'Auto-generate' }).click();
    
    // Should show preview table with confirmation
    await expect(page.getByText(/client setup preview/)).toBeVisible();
    await expect(page.getByText('Pacific Coast Lending')).toBeVisible();
    await expect(page.getByText('Sarah Martinez')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Yes, proceed' })).toBeVisible();
    
    // Confirm creation
    await page.getByRole('button', { name: 'Yes, proceed' }).click();
    
    // Should show processing message
    await expect(page.getByText(/I'm creating the client record now/)).toBeVisible();
    
    // Should show completion with entity link
    await expect(page.getByText(/Client record created successfully/)).toBeVisible();
    
    // Should suggest delivery method setup
    await expect(page.getByText(/would you like to set up the delivery method/)).toBeVisible();
    await expect(page.getByRole('button', { name: 'Yes, set up delivery' })).toBeVisible();
  });

  test('should handle file upload and auto-mapping', async ({ page }) => {
    // Navigate to webhook setup
    await page.getByText('Create Client').click();
    await page.getByPlaceholder('Type your message...').fill('Test Company, John Doe, john@test.com, 555-1234, NYC, EST');
    await page.keyboard.press('Enter');
    
    await page.getByRole('button', { name: 'Auto-generate' }).click();
    await page.getByRole('button', { name: 'Yes, proceed' }).click();
    
    // Wait for delivery method suggestion
    await page.waitForSelector('[data-testid="delivery-suggestion"]');
    await page.getByRole('button', { name: 'Yes, set up delivery' }).click();
    
    // Choose webhook
    await page.getByRole('button', { name: 'Set up webhook delivery' }).click();
    
    // Should offer upload instructions
    await expect(page.getByRole('button', { name: 'Upload instructions' })).toBeVisible();
    await page.getByRole('button', { name: 'Upload instructions' }).click();
    
    // Test file upload interface
    await expect(page.getByText(/Upload Posting Instructions/)).toBeVisible();
    await expect(page.getByText(/Drag & drop files here/)).toBeVisible();
    await expect(page.getByText(/Supported formats: PDF, DOC, TXT, JSON, XML, CSV, XLSX/)).toBeVisible();
  });

  test('should show suggested actions at each workflow step', async ({ page }) => {
    await page.getByText('Create Client').click();
    
    // Stage 1: Data extraction - no buttons expected
    await page.getByPlaceholder('Type your message...').fill('ABS Company');
    await page.keyboard.press('Enter');
    
    // Stage 2: Credential choice - should have buttons
    await page.getByPlaceholder('Type your message...').fill('Joe Doe, joe@abs.com, 555-9999, Arizona, MST');
    await page.keyboard.press('Enter');
    
    await expect(page.getByRole('button', { name: 'Auto-generate' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Custom' })).toBeVisible();
    
    // Previous buttons should be disabled
    const previousButtons = page.locator('.suggested-actions__button:disabled');
    await expect(previousButtons).toHaveCount(2);
  });

  test('should handle maximize/modal mode', async ({ page }) => {
    // Test maximize button
    const maximizeButton = page.getByTitle('Maximize');
    await expect(maximizeButton).toBeVisible();
    
    await maximizeButton.click();
    
    // Should enter fullscreen modal mode
    await expect(page.locator('.ai-chat--maximized')).toBeVisible();
    await expect(page.locator('body.chat-maximized')).toBeVisible();
    
    // Test exit fullscreen
    await page.getByTitle('Exit Fullscreen').click();
    await expect(page.locator('.ai-chat--maximized')).not.toBeVisible();
  });

  test('should maintain workflow state across messages', async ({ page }) => {
    await page.getByText('Create Client').click();
    
    // Complete workflow steps
    await page.getByPlaceholder('Type your message...').fill('Test Corp, Jane Smith, jane@test.com, 555-7777, Texas, CST');
    await page.keyboard.press('Enter');
    
    await page.getByRole('button', { name: 'Auto-generate' }).click();
    await page.getByRole('button', { name: 'Yes, proceed' }).click();
    
    // Verify entity link appears in completion
    await expect(page.getByText(/Test Corp.*ID:.*\d+/)).toBeVisible();
    
    // Verify continuation to delivery setup
    await expect(page.getByText(/delivery method/)).toBeVisible();
  });
});