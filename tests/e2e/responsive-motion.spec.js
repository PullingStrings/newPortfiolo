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

test('mobile and tablet animate project numbers without clipping images or pinning', async ({ page }) => {
  await page.goto('/');
  const compact = await page.evaluate(() => matchMedia('(max-width: 900px), (max-height: 719px)').matches);
  test.skip(!compact, 'compact-specific assertion');
  for (const name of projectNames) {
    const project = page.locator(`.project-row--${name}`);
    await project.scrollIntoViewIfNeeded();
    const number = project.locator('.project-row__number');
    await number.scrollIntoViewIfNeeded();
    await expect.poll(() => number.evaluate((el) => Number(getComputedStyle(el).opacity))).toBe(1);
    await expect.poll(() => number.evaluate((el) => new DOMMatrix(getComputedStyle(el).transform).m42)).toBe(0);
    await expect(project.locator('.project-row__media-reveal')).toHaveCSS('clip-path', 'none');
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
