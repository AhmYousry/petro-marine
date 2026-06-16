// ─── Application Router ───────────────────────────────────────────────────────
// Uses React Router v6 createBrowserRouter with data API.
// All routes are lazy-loaded via feature barrel exports.

import { createBrowserRouter, Navigate } from 'react-router-dom'
import { RootLayout }   from '@shared/layout'
import { HomePage }     from '@features/home'
import { AboutPage }    from '@features/about'
import { ServicesPage } from '@features/services'
import { ContactPage }  from '@features/contact'
import { ROUTES }       from '@config/routes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.ABOUT.slice(1),   // 'about'
        element: <AboutPage />,
      },
      {
        path: ROUTES.SERVICES.slice(1), // 'services'
        element: <ServicesPage />,
      },
      {
        path: ROUTES.CONTACT.slice(1),  // 'contact'
        element: <ContactPage />,
      },
      // ── Catch-all → redirect home ──
      {
        path: '*',
        element: <Navigate to={ROUTES.HOME} replace />,
      },
    ],
  },
])
