import { test, expect } from '@playwright/test';

const projectNames = ['dreamzone', 'finance', 'contact', 'repair'];

test('all four project artworks render and the page has no horizontal overflow', async ({ page }) => {
  await page.goto('/');
  for (const name of projectNames) {
    const project = page.locator(`.project-row--${name}`);
    await expect(project).toHaveCount(1);
    const image = project.locator('.project-row__media-reveal img');
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate((img) => img.complete && img.naturalWidth > 0)).toBe(true);
  }
  const width = await page.evaluate(() => ({
    scroll: document.documentElement.scrollWidth,
    viewport: document.documentElement.clientWidth,
  }));
  expect(width.scroll, 'unexpected horizontal overflow').toBeLessThanOrEqual(width.viewport + 2);
});

test('mobile and tablet reveal each project without desktop pinning', async ({ page, isMobile }) => {
  await page.goto('/');
  const compact = await page.evaluate(() => matchMedia('(max-width: 900px), (max-height: 719px)').matches);
  test.skip(!compact, 'compact-specific assertion');
  for (const name of projectNames) {
    const project = page.locator(`.project-row--${name}`);
    await project.scrollIntoViewIfNeeded();
    await expect.poll(() => project.locator('.project-row__media-reveal').evaluate(
      (el) => getComputedStyle(el).clipPath,
    )).toMatch(/inset\\(0(?:px|%)? 0(?:px|%)? 0(?:px|%)? 0(?:px|%)?\\)/);
    await expect(project).not.toHaveClass(/pin-spacer/);
    expect(await page.locator('.pin-spacer').count()).toBe(0);
  }
});

test('reduced motion keeps every project screenshot visible', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  for (const name of projectNames) {
    const reveal = page.locator(`.project-row--${name} .project-row__media-reveal`);
    await reveal.scrollIntoViewIfNeeded();
    await expect(reveal).toHaveCSS('clip-path', 'none');
  }
  expect(await page.locator('.pin-spacer').count()).toBe(0);
});
