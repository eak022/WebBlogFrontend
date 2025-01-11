import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import { FaPen } from "react-icons/fa";
import { ThemeContext } from "../contexts/ThemeContext"; // นำเข้า ThemeContext

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const { theme, toggleTheme } = useContext(ThemeContext); // ใช้ context เพื่อเข้าถึงและเปลี่ยนธีม

  const handleLogout = () => {
    Swal.fire({
      title: "คุณต้องการออกจากระบบหรือไม่?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ตกลง",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire({
          title: "ออกจากระบบสำเร็จ",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className={`navbar shadow-lg text-black ${theme === "light" ? "bg-white" : "bg-gray-900 text-white"}`}>
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">SE NPRU Blog</a>
      </div>

      <div className="flex space-x-2 items-center">
        {user ? (
          <>
            <span className="text-lg font-semibold">Hello, {user.username}</span>
            
            <Link
              to="/create"
              className="btn bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md flex items-center space-x-2"
            >
              <FaPen className="text-white h-5 w-5" />
              <span>Create New Post</span>
            </Link>

            <button
              className="btn bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-outline btn-accent hover:bg-accent hover:text-white transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-outline btn-primary hover:bg-primary hover:text-white transition"
            >
              Register
            </Link>
          </>
        )}

        {/* Button to toggle theme */}
        <button
          onClick={toggleTheme}
          className="btn btn-ghost text-xl"
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
