import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home"
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Login/Register/Register";
import Blog from "../pages/Blog/Blog";
import Error from "../pages/Error/Error";
import ChefDetails from "../pages/ChefDetails/ChefDetails";

const router=createBrowserRouter([
    
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {

                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
           {
            path:'/register',
            element:<Register></Register>
           },
           {
             path:'/chef/:chefId',
             element:<ChefDetails></ChefDetails>,
             loader:()=>fetch('https://assignment-ten-server-priyab99.vercel.app/chefs')
           },
           {
            path:'*',
            element:<Error/>
           }
        ]

    }
])

export default router;