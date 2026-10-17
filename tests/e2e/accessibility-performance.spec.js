import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const route of ['/']) {
  test(`WCAG A/AA audit on ${route}`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(route);
    const report = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
    expect(report.violations.map(({ id, impact, nodes }) => ({
      id,
      impact,
      targets: nodes.map(n => n.target).slice(0, 6),
    }))).toEqual([]);
  });

  test(`page metadata and images on ${route}`, async ({ page }) => {
    await page.goto(route);
    await expect(page).toHaveTitle(/Tito|Sibusiso/i);
    await expect(page.locator('main')).toHaveCount(1);
    await expect(page.locator('h1')).toHaveCount(1);
    const missingAlt = await page.locator('main img').evaluateAll(
      images => images.filter(img => !img.hasAttribute('alt')).map(img => img.src),
    );
    expect(missingAlt).toEqual([]);
  });

  test(`navigation and image transfer sizes on ${route}`, async ({ page }) => {
    await page.goto(route);
    const details = await page.evaluate(() => ({
      transferBytes: performance.getEntriesByType('resource')
        .filter(entry => entry.initiatorType === 'img')
        .reduce((sum, entry) => sum + (entry.transferSize || 0), 0),
      imageCount: document.images.length,
    }));
    console.log('Image transfer snapshot:', details);
    expect(details.imageCount).toBeGreaterThan(0);
  });
}
