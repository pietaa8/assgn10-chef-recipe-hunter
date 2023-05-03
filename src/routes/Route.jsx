import {createBrowserRouter} from "react-router-dom"
import Main from "../layout/Main"
import Home from "../pages/Home/Home/Home"
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from "../shared/Blog/Blog";
import ChefDetails from "../components/ChefDetails/ChefDetails";
import NotFound from "../components/NotFound/NotFound";

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
                path:'chef/:chefId',
                element:<ChefDetails></ChefDetails>,
                loader:()=>fetch('http://localhost:5000/chefs')
        
        
        
              },

            {
                path:'blog',
                element:<Blog></Blog>
            },

            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: "*",
                element: <NotFound></NotFound>,
              }
        ]
    }
])

export default router;