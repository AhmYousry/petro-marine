/**
 * Playwright audit — Services Preview section
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
  { name: 'tablet-768',   width: 768,  height: 1024 },
  { name: 'desktop-1280', width: 1280, height: 800  },
  { name: 'desktop-1440', width: 1440, height: 900  },
]

const URL = 'http://localhost:5173'

async function shot(page, name) {
  await page.waitForTimeout(800)
  await page.screenshot({ path: join(OUT, `${name}.png`), fullPage: false })
  console.log(`  ✓ ${name}.png`)
}

;(async () => {
  const browser = await chromium.launch({ headless: true })

  for (const vp of VIEWPORTS) {
    console.log(`\n── ${vp.name} ──`)
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } })
    await page.goto(URL, { waitUntil: 'networkidle' })

    // Scroll to services section
    await page.evaluate(() => {
      const el = document.querySelector('[aria-labelledby="services-preview-heading"]')
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' })
    })
    await page.waitForTimeout(1000) // allow entrance animations to fire
    await shot(page, `${vp.name}--svc-header`)

    // Scroll down within services to reveal full card grid
    await page.evaluate(() => {
      window.scrollBy({ top: 320, behavior: 'instant' })
    })
    await page.waitForTimeout(700)
    await shot(page, `${vp.name}--svc-cards`)

    // Scroll further to see CTA + bottom of section
    await page.evaluate(() => {
      const el = document.querySelector('[aria-labelledby="services-preview-heading"]')
      if (el) {
        const bottom = el.getBoundingClientRect().bottom + window.scrollY
        window.scrollTo({ top: bottom - window.innerHeight + 40, behavior: 'instant' })
      }
    })
    await page.waitForTimeout(700)
    await shot(page, `${vp.name}--svc-cta`)

    await page.close()
  }

  await browser.close()
  console.log('\nServices screenshots saved to:', OUT)
})()
