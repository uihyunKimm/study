import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Product from "./components/Product";
import ProductInfo from "./components/ProductInfo";

/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
    errorElement: <div>Page Not Found</div>,
  },
  {
    path: "/product",
    element: <div>Product</div>,
  },
]);
*/

/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/product",
    element: <Product />,
    errorElement: <NotFound />,
  },
]);
*/

/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
  },
  {
    path: "/product",
    element: <Product />,
    errorElement: <NotFound />,
  },
]);
*/

/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/product", element: <Product /> },
    ],
  },
]);
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children:[
      { index: true, element: <Home /> },//index true는 기본값 설정과
      { path: "/product", element: <Product /> },
      { path: "/product/:productId", element: <ProductInfo /> },
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;