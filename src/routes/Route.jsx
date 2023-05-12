import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/Home/Home";
import Blog from "../shared/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../components/NotFound/NotFound";
import Main from "../layout/Main/Main";
import Emni from "../components/Emni/Emni";

const router =createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'emni',
                element:<Emni></Emni>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: "*",
                element: <NotFound></NotFound>,
              }
        ]
    }
])

export default router;