import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/cadastro",
        element: <Cadastro/>
    }
])

function AppRoutes() {
    return <RouterProvider router={router} />
}

export default AppRoutes;