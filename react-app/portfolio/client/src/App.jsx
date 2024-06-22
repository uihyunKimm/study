import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home"
import Skill from "./pages/Skill";
import Site from "./pages/Site";
import Contact from "./pages/Contact";
import Port from "./pages/Port";
import Skip from "./pages/Skip";
import "./style/Style.scss"


/* export function smooth() {
    const lenis = new Lenis({ 
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", (e) => {
        console.log(e);
    });
} */
const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    fetch("http://localhost:5000/api/todo")
    .then((res) => res.json())
    .then((data)=>{
      console.log(data);
      setTodos(data);
    });
  },[]);
  return (
    <>
      <ToastContainer
        position="bottom-right"
        theme="light"
        pauseOnHover
        autoClose={2000}
      />
        <Skip/>
        <Header />
        <div className="container">
          <Home />
          <Skill />
          <Site />
          <Port />
          <Contact />
        </div>
        <Footer />
    </>
  );
};

export default App;