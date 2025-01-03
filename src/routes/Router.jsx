import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Edit from "../pages/Edit";
import Create from "../pages/Create";
import PostDetail from "../pages/PostDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "edit/:id",
        element: <Edit />,
      },
      {
        path: "post/:id",
        element: <PostDetail />,
      },
    ],
  },
]);

export default router;
