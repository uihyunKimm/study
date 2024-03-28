import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
  path: "/",
  element: <div>Home</div>,
  errorElement: <div>Page Not Found</div>
  },
  {
  path: "/product",
  element: <div>Product</div>
  }
  ]);

  const App = () => {
  return <RouterProvider router={router} />;
  };

  export default App;

  {/*const [darkMode, setDarkMode] = useState(false);
  <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <HomeComponent />
    </ThemeContext.Provider> */} 