import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/blog/Blog";
import DetailsCategory from "../../pages/details-category/DetailsCategory";
import Error from "../../pages/error-page/Error";
import Home from "../../pages/home/Home/Home";
import Login from "../../pages/login/Login";
import SignUp from "../../pages/signup/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
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
                path: '/categories/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`),
                element: <DetailsCategory></DetailsCategory>
            }, {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])