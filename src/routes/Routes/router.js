import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import AddProduct from "../../pages/AddProduct/AddProduct";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Menu from "../../pages/Menu/Menu";
import MyProducts from "../../pages/MyProducts/MyProducts";
import MyReview from "../../pages/MyReview/MyReview";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import Register from "../../pages/Register/Register";
import PrivateRoutes from "../private/PrivateRoutes";

const router = createBrowserRouter([
  {
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: () => fetch("https://home-cooking-server.vercel.app/products"),
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`https://home-cooking-server.vercel.app/product/${params.id}`),
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoutes>
            <AddProduct />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-product",
        element: (
          <PrivateRoutes>
            <MyProducts />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-review",
        element: (
          <PrivateRoutes>
            <MyReview />
          </PrivateRoutes>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
