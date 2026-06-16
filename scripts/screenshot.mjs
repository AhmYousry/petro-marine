/**
 * Playwright UI audit — Petro Marine
 * Takes full-page screenshots at mobile / tablet / desktop
 * for all 3 hero slides (paused) + scroll positions.
 */
import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '../screenshots');
mkdirSync(OUT, { recursive: true });

const VIEWPORTS = [
  { name: 'mobile-375',  width: 375,  height: 812  },
  { name: 'mobile-390',  width: 390,  height: 844  },
  { name: 'tablet-768',  width: 768,  height: 1024 },
  { name: 'desktop-1280',width: 1280, height: 800  },
  { name: 'desktop-1440',width: 1440, height: 900  },
];

const URL = 'http://localhost:5173';

async function shot(page, name) {
  await page.waitForTimeout(600); // let animations settle
  await page.screenshot({ path: join(OUT, `${name}.png`), fullPage: false });
  console.log(`  ✓ ${name}.png`);
}

(async () => {
  const browser = await chromium.launch({ headless: true });

  for (const vp of VIEWPORTS) {
    console.log(`\n── ${vp.name} (${vp.width}×${vp.height}) ──`);
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto(URL, { waitUntil: 'networkidle' });

    // Pause the slideshow
    const pauseBtn = page.locator('[aria-label="Pause slideshow"]');
    if (await pauseBtn.count()) await pauseBtn.click();
    await page.waitForTimeout(300);

    // Slide 1
    const dots = page.locator('[role="tab"]');
    await dots.nth(0).click();
    await shot(page, `${vp.name}--slide-1`);

    // Slide 2
    await dots.nth(1).click();
    await shot(page, `${vp.name}--slide-2`);

    // Slide 3
    await dots.nth(2).click();
    await shot(page, `${vp.name}--slide-3`);

    // Mobile: open drawer
    if (vp.width < 768) {
      const hamburger = page.locator('[aria-label="Open navigation menu"]');
      if (await hamburger.count()) {
        await hamburger.click();
        await page.waitForTimeout(500);
        await shot(page, `${vp.name}--drawer-open`);
        const close = page.locator('[aria-label="Close navigation menu"]');
        if (await close.count()) await close.click();
      }
    }

    await page.close();
  }

  await browser.close();
  console.log('\nAll screenshots saved to:', OUT);
})();
