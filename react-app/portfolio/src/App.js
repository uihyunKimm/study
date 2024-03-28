import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomeContainer from "./components/HomeContainer";


const App = () => {
  return (
    <>
        <Layout>
          <HomeContainer/>
        </Layout>
    </>
  );
};

export default App;