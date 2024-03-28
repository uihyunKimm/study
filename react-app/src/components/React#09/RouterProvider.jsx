import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const RouterProvider = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>,
        errorElement: <div>Page Not Found</div>
    }
]);

export default RouterProvider;