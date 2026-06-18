// ─── Application Router ───────────────────────────────────────────────────────
// React Router v6 createBrowserRouter. Page components are code-split with
// React.lazy so each route ships as its own chunk (Suspense boundary lives in
// RootLayout). The initial load only pays for the shell + the first route.

import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { RootLayout } from '@shared/layout'
import { ROUTES }     from '@config/routes'

const HomePage     = lazy(() => import('@features/home').then((m)     => ({ default: m.HomePage })))
const AboutPage    = lazy(() => import('@features/about').then((m)    => ({ default: m.AboutPage })))
const ServicesPage = lazy(() => import('@features/services').then((m) => ({ default: m.ServicesPage })))
const ContactPage  = lazy(() => import('@features/contact').then((m)  => ({ default: m.ContactPage })))

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
