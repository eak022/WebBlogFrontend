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
    path: '/',
    element: <MainLayout />, // ใช้ Layout เป็น element หลัก
    children: [
      {
        path: '',
        element: <Home />,
      },
      {path: "/edit/:id", element:<Edit />},
      {path: "/create", element:<Create />},
      {path: "/post", element:<PostDetail />},
      {path: "/login", element:<Login />},
      {path: "/register", element:<Register />},
      // เพิ่มเส้นทางอื่น ๆ ตามต้องการ
    ],
  },
  
]);


export default router;