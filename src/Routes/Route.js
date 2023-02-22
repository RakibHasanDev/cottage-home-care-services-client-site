import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter ([
    {
        path : '/',
        element: <Main></Main>,
        errorElement: <h1> 404 Not Found</h1>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
                
            },
            {
                path:'/services',
                element:<Services></Services>
                
            }
        ]

    }


])

export default router;