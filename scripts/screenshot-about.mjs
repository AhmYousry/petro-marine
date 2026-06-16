/**
 * Playwright audit — About Preview section
 * Scrolls past the hero and captures the About Preview at all viewports.
 */
import { chromium } from 'playwright'
import { mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '../screenshots')
mkdirSync(OUT, { recursive: true })

const VIEWPORTS = [
  { name: 'mobile-375',   width: 375,  height: 812  },
  { name: 'mobile-390',   width: 390,  height: 844  },
  { name: 'tablet-768',   width: 768,  height: 1024 },
  { name: 'desktop-1280', width: 1280, height: 800  },
  { name: 'desktop-1440', width: 1440, height: 900  },
]

const URL = 'http://localhost:5173'

async function shot(page, name) {
  await page.waitForTimeout(700)
  await page.screenshot({ path: join(OUT, `${name}.png`), fullPage: false })
  console.log(`  ✓ ${name}.png`)
}

;(async () => {
  const browser = await chromium.launch({ headless: true })

  for (const vp of VIEWPORTS) {
    console.log(`\n── ${vp.name} (${vp.width}×${vp.height}) ──`)
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } })
    await page.goto(URL, { waitUntil: 'networkidle' })

    // ── Capture: hero (slide 1, for context) ─────────────────────────
    await shot(page, `${vp.name}--about-hero-ctx`)

    // ── Scroll to About Preview section ──────────────────────────────
    await page.evaluate(() => {
      window.scrollTo({ top: window.innerHeight * 0.95, behavior: 'instant' })
    })
    await page.waitForTimeout(900) // let scroll-triggered animations fire
    await shot(page, `${vp.name}--about-top`)

    // ── Scroll to highlights (mobile: below body copy) ────────────────
    await page.evaluate(() => {
      window.scrollTo({ top: window.innerHeight * 1.8, behavior: 'instant' })
    })
    await page.waitForTimeout(700)
    await shot(page, `${vp.name}--about-highlights`)

    // ── Scroll to stats band (before footer) ─────────────────────────
    await page.evaluate(() => {
      // Find the dark stats band by its first child element
      const statsEl = document.querySelector('[data-section="stats"]')
      if (statsEl) {
        statsEl.scrollIntoView({ behavior: 'instant', block: 'start' })
      } else {
        // Fallback: scroll to 80% of page height to avoid footer
        window.scrollTo({ top: document.body.scrollHeight * 0.72, behavior: 'instant' })
      }
    })
    await page.waitForTimeout(900)
    await shot(page, `${vp.name}--about-stats`)

    await page.close()
  }

  await browser.close()
  console.log('\nAbout screenshots saved to:', OUT)
})()
