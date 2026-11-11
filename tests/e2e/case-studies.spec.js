import { test, expect } from '@playwright/test';

test('Case Studies navigation opens both Volkswagen case studies', async ({
  page,
}) => {
  await page.goto('/');
  const mobileToggle = page.getByRole('button', { name: 'Open navigation' });
  if (await mobileToggle.isVisible()) await mobileToggle.click();
  const nav = page.getByRole('navigation');
  await nav.getByRole('link', { name: 'Case Studies' }).click();
  await expect(page).toHaveURL(/\/case-studies\/?$/);
  await expect(
    page.getByRole('heading', { name: 'Case studies.' }),
  ).toBeVisible();
  await page.getByRole('link', { name: /Dreamzone/ }).click();
  await expect(page).toHaveURL(/\/case-studies\/volkswagen-dreamzone$/);
  await expect(
    page.getByRole('heading', { name: /Volkswagen Dreamzone/ }),
  ).toBeVisible();
  await page.getByRole('link', { name: 'All case studies' }).click();
  await page.getByRole('link', { name: /Offers & Finance/ }).click();
  await expect(page).toHaveURL(/\/case-studies\/volkswagen-offers-finance$/);
  await expect(
    page.getByRole('heading', { name: /Offers & Finance/ }),
  ).toBeVisible();
});

test('featured case study titles link to their pages', async ({ page }) => {
  await page.goto('/');
  const dreamzone = page.locator('[data-project="dreamzone"]');
  await expect(dreamzone.locator('h3 a')).toHaveAttribute(
    'href',
    '/case-studies/volkswagen-dreamzone',
  );
  await expect(page.locator('[data-project="finance"] h3 a')).toHaveAttribute(
    'href',
    '/case-studies/volkswagen-offers-finance',
  );
  await expect(page.locator('[data-project="contact"] h3 a')).toHaveAttribute(
    'href',
    '/case-studies/samsung-contact',
  );
  await expect(page.locator('[data-project="repair"] h3 a')).toHaveAttribute(
    'href',
    '/case-studies/samsung-repair',
  );
});

test('case study media loads and layout avoids horizontal overflow', async ({
  page,
}) => {
  await page.goto('/case-studies/volkswagen-dreamzone');
  const media = page.locator('main figure img');
  await expect(media).toHaveCount(4);
  for (const image of await media.all()) {
    await image.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        image.evaluate(
          (element) => element.complete && element.naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
  const bounds = await page.evaluate(() => ({
    page: document.documentElement.scrollWidth,
    viewport: document.documentElement.clientWidth,
  }));
  expect(bounds.page).toBeLessThanOrEqual(bounds.viewport + 2);
});

test('Offers & Finance screenshots load and layout avoids horizontal overflow', async ({
  page,
}) => {
  await page.goto('/case-studies/volkswagen-offers-finance');
  const media = page.locator('main img');
  await expect(media).toHaveCount(9);
  for (const image of await media.all()) {
    await image.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        image.evaluate(
          (element) => element.complete && element.naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
  const bounds = await page.evaluate(() => ({
    page: document.documentElement.scrollWidth,
    viewport: document.documentElement.clientWidth,
  }));
  expect(bounds.page).toBeLessThanOrEqual(bounds.viewport + 2);
});
