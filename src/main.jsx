import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "@/pages/LandingPage.jsx";
import Stories from "./pages/Stories.jsx";
import Details from "@/pages/Details.jsx";
import Agents from "@/pages/Agents.jsx";
import Checkout from "@/pages/Checkout.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "properties/:id",
        element: <Details />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
