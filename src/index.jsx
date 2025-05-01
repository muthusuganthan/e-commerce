import React, { lazy, Suspense } from 'react';
import ReactDOM from "react-dom/client";
import "./style.css";
import "flowbite";
import Header from "./components/Header";
import Heroscection from "./components/Herosection";
import Productlayout, { Card } from "./components/Productlayout";
import Footer from "./components/Footer";
import Counter from "./components/counter";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Error from "./components/error";
import Productsdeatails from "./components/productdeatails";
import Imagecompoent from "./components/imagecomponent";

const Comment = lazy(() => import("./components/comment"));

// componet ccomposition

const Body = () => {
  return (
    <>
      {/* <Card /> */}
      
      {/* <Counter /> */}
      {/* <Header /> */}
      <Heroscection />
      <Productlayout />
      <Comment />
      {/* <Footer /> */}
    </>
  );
};


// basic route creation


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body />
//   },
//   {
//     path: "/productlayout",
//     element: <Productlayout />,
//   },
//   {
//     path: "/counter",
//     element: <Counter />,
//   }
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <RouterProvider router={router} />
// );

// with out router to run directory
// root.render(Body());






   const Applayout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/counter",
          element: <Counter />,
        },
        
        {
          path: "/productlayout",
          element: <Productlayout/>,
        },
        
        {
          path: "/productlayout/:product_id",
          element: <Productsdeatails/>,
        },

        {
          path: "/imagecomponents",
          element: <Imagecompoent/>,
        },

        {
          path: "/comment",
          element: (
            <Suspense fallback={"Loading..."}>
              <Comment />
            </Suspense>
          ),}

      ],
      errorElement:<Error />
    },
  ]);


  const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
  