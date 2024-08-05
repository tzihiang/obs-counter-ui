import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Root from "./routes/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LifeCounter1 from "./routes/lifeCounters/LifeCounter1";
import LifeCounter2 from "./routes/lifeCounters/LifeCounter2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "lifeCounter",
    children: [
      {
        path: "1",
        element: <LifeCounter1 />
      },
      {
        path: "2",
        element: <LifeCounter2 />
      }
    ]
  }
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
