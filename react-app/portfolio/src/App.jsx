import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout"
import Home from "./pages/Home"

const App = () => {
  return (
    <>
        <Layout>
          <Home />
        </Layout>
    </>
  );
};

export default App;