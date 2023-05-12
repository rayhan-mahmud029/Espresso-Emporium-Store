import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layouts/Main";
import Home from "../components/Pages/Home";
import AddCoffee from "../components/Pages/AddCoffee";
import ViewDetails from "../components/Pages/ViewDetails";
import UpdateCoffee from "../components/Pages/UpdateInfo";

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
            },
            {
                path: 'coffee/:id',
                element: <ViewDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
            },
            {
                path: '/coffee/update/:id',
                element: <UpdateCoffee />,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
            }
        ]
    }
])

export default router;
