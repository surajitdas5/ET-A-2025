import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import EventDetails from "./pages/EventDetails"
import Search from "./pages/Search"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import { AuthProvider } from "./context/AuthContext"
import MyEvent from "./pages/MyEvents"
import AddEvent from "./pages/AddEvent"
import UpdateEvent from "./pages/UpdateEvent"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home />},
        { path: "/search", element: <Search />},
        { path: "/signup", element: <SignUp />},
        { path: "/signin", element: <SignIn />},
        { path: "/myevents", element: <MyEvent />},
        { path: "/addevent", element: <AddEvent />},
        { path: "/update/:id", element: <UpdateEvent />},
        { path: "/:id", element: <EventDetails />},
      ]
    }
  ])

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
