import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Applayout from "../layouts/Applayout"
import LandingLayout from "../features/landing/layouts/LandingLayout"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Applayout>
        <LandingLayout />
      </Applayout>
    ),
    errorElement: (
      <h1 className="text-red-600 text-3xl font-extrabold">Not found</h1>
    ),
  },
])

const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default AppRouter
