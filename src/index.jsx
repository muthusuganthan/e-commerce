import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "flowbite";
import Header from "./components/Header";
import Heroscection from "./components/Herosection";
import Productlayout from "./components/Productlayout";
import Footer from "./components/Footer";
import Counter from "./components/counter";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Error from "./components/error";
import Productsdeatails from "./components/productdeatails";
import Imagecompoent from "./components/imagecomponent";
import Form from "./components/form";
import ComponentA from "./components/propsdrilling/componentA";
import { UserProvider } from "./store/usedatacontext";

// Lazy load components
const Comment = lazy(() => import("./components/comment"));

// Main body component
const Body = () => {
  return (
    <>
      <Heroscection />
      <Productlayout />
      <Suspense fallback={<div>Loading comments...</div>}>
        <Comment />
      </Suspense>
    </>
  );
};

// App layout with context provider
const Applayout = () => {
  return (
    <UserProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </UserProvider>
  );
};

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "productlayout",
        element: <Productlayout />,
      },
      {
        path: "productlayout/:product_id",
        element: <Productsdeatails />,
      },
      {
        path: "imagecomponents",
        element: <Imagecompoent />,
      },
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "propsdrilling",
        element: <ComponentA />,
      },
      {
        path: "comment",
        element: (
          <Suspense fallback={<div>Loading comments...</div>}>
            <Comment />
          </Suspense>
        ),
      },
    ],
  },
]);

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
