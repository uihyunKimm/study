import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import {ToastContainer} from 'react-toastify';

const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        theme="light"
        pauseOnHover
        autoClose={2000}
      />
        <Navbar />
        <Layout>
          <Home />
        </Layout>
        <Footer />
    </>
  );
};

export default App;