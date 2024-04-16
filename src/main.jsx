import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./HomePage";
import ErrorPage from "./pages/ErrorPage";
import DetailsPage from "./pages/DetailsPage";
import NavigationBar from "./pages/NavigationBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Electronics from "./pages/Electronics";
import Jewelery from "./pages/Jewelry";
import Men from "./pages/Men";
import Women from "./pages/Women";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/electronics",
        element: <Electronics />,
      },
      {
        path: "/jewelery",
        element: <Jewelery />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
    ],
  },

  {
    path: "/navigation",
    element: <NavigationBar />,
  },

  {
    path: "/gallery",
    element: <DetailsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
