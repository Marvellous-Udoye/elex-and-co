import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/home-page'
import { PlaceholderPage } from './pages/placeholder-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/:slug',
    element: <PlaceholderPage />,
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
