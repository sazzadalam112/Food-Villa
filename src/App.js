import React from "react";
import  ReactDOM  from "react-dom/client";
import Header ,{ Title } from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About";
import Error from "./component/Error";
import Contact from "./component/Contact";
import {createBrowserRouter , RouterProvider, Outlet} from "react-router-dom"
import RestaurantMenu from "./component/RestaurantMenu";
import Profile from "./component/Profile";

const AppLayout = () => {
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    );
};

const appRouter = createBrowserRouter ([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error />,
        children: [ 
            {
                path: "/about",
                element: <About/>,
                children: [
                    {
                        path: "profile",
                        element: <Profile/>
                    }
                ]
            },
            {
                path: "/",
                element: <Body/>
            },
           
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
              },
        ],
    },
]); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
