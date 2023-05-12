import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layouts/Main";
import Home from "../components/Pages/Home";
import AddCoffee from "../components/Pages/AddCoffee";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: 'addCoffee',
                element: <AddCoffee />
            }
        ]
    }
])

export default router;
