import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../layout/Dashboard";
import Main from "../../layout/Main";
import Blog from "../../pages/blog/Blog";
import Buyer from "../../pages/dashboardpage/buyer/Buyer";
import Users from "../../pages/dashboardpage/admin/Users";
import DetailsCategory from "../../pages/details-category/DetailsCategory";
import Error from "../../pages/error-page/Error";
import Home from "../../pages/home/Home/Home";
import Login from "../../pages/login/Login";
import SignUp from "../../pages/signup/SignUp";
import AdminRout from "../admin/AdmitRout";
import Private from "../privateRoute/Private";
import Allseller from "../../pages/dashboardpage/admin/Allseller";
import AddProducts from "../../pages/dashboardpage/seller/AddProducts";
import MyProducts from "../../pages/dashboardpage/seller/MyProducts";

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
                path: '/signup',
                element: <SignUp></SignUp>
            }, {
                path: '/categories/:id',
                loader: ({ params }) => fetch(`https://resale-server-nine.vercel.app/categories/${params.id}`),
                element: <Private><DetailsCategory></DetailsCategory></Private>
            }, {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }, {
        path: '/dashboard',
        element: <Private><Dashboard></Dashboard></Private>,
        children: [
            {
                path: '/dashboard',
                element: <Buyer></Buyer>
            },
            {
                path: '/dashboard/users',
                element: <AdminRout><Users></Users></AdminRout>
            },
            {
                path: '/dashboard/sellers',
                element: <Allseller></Allseller>
            }, {
                path: '/dashboard/sellers/addproducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/sellers/myproducts',
                element: <MyProducts></MyProducts>
            }
        ]
    }
])