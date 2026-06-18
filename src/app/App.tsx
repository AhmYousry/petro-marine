// ─── Application Root ─────────────────────────────────────────────────────────

import { RouterProvider } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { router } from './router'

export function App() {
  return (
    // reducedMotion="user" → every Framer Motion animation in the app honors the
    // visitor's "prefers-reduced-motion" OS setting, with no per-component code.
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
    </MotionConfig>
  )
}
