import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Main/Root";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <div>This is Error page</div>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])
