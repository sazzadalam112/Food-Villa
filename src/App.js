import React, { lazy , Suspense, useState} from "react";
import  ReactDOM  from "react-dom/client";
import Header ,{ Title } from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
// import About from "./component/About";
import Error from "./component/Error";
import Contact from "./component/Contact";
import {createBrowserRouter , RouterProvider, Outlet} from "react-router-dom"
import RestaurantMenu from "./component/RestaurantMenu";
import Profile from "./component/Profile";
import Shimmer from "./component/Shimmer";
import UserContext from "./Utils/Usercontex";
// import Instamart from "./component/Instamart";

// Chunking 
// Code spliting
// Dynamic Bundling
// on Demand Loading
// Dynamic Import
const About = lazy (() => import("./component/About"))
const Instamart = lazy(() => import("./component/Instamart"))
//Upon On Demand Loading -> upon render -> Suspend loading ->

const AppLayout = () => {
    const [user,setUser] = useState({
        name: "Md Sazzad Alam",
        email: "Support@namastedev.com",
    });
    return(
        <> 
        
        <UserContext.Provider value={{
            user : user,
            setUser:setUser,
           
        }}>
       <Header />
        <Outlet />
        <Footer />
        </UserContext.Provider>
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
                element: <Suspense fallback ={<h1>...Loading</h1>}><About/></Suspense>,
                children: [
                    {
                        path: "profile",
                        element: <Profile/>
                    }
                ]
            },
            {
                path: "/",
                element: <Body user={{
                    name: "Namaste React",
                    email: "Support@namastedev.com",
                }}/>,
            },
           
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
              },
              {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>,
              },
        ],
    },
]); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
