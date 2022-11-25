import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home/Home";
import Login from "../../pages/login/Login";
import SignUp from "../../pages/signup/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, {
                path: '/login',
                element: <Login></Login>
            }, {
                path: 'signup',
                element: <SignUp></SignUp>
            }, {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`),

            }
        ]
    }
])