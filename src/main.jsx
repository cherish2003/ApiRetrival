import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Userinfo } from "./Pages/Userinfo.jsx";
import { Postinfo } from "./Pages/Postinfo.jsx";
import { NewPost } from "./Pages/NewPost.jsx";
import { PostsPage } from "./Pages/PostsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Userinfo",
    element: <Userinfo />,
  },
  {
    path: "/Postsinfo",
    element: <Postinfo />,
  },
  {
    path: "/NewPost",
    element: <NewPost />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
