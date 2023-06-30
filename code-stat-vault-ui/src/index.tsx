import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ExplorePage } from "./code-stat-vault/core/Explore";
import { Home } from "./code-stat-vault/core/Home";
import { Chats } from "./code-stat-vault/core/Chats";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/chats",
    element: <Chats friends={[]} />,
  },
  {
    path: "/explore",
    element: <ExplorePage />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
