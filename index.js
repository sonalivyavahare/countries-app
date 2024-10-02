import {createRoot} from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import Home from "./components/Home"
import CountryDetails from "./components/CountryDetails"

const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children:[
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/:country',
                element: <CountryDetails />
            }

        ]
    },
])

const root = createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />)