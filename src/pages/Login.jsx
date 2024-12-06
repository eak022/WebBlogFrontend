import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // นำเข้า useNavigate

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ใช้ useNavigate เพื่อเปลี่ยนเส้นทาง

  const handleSubmit = (e) => {
    e.preventDefault();
    // แทนที่ด้วยฟังก์ชันการล็อกอินของคุณ
    console.log("Logging in with", { username, password });
  };

  const handleCancel = () => {
    navigate("/"); // เมื่อกด Cancel จะไปหน้าหลัก (/)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card w-96 bg-white shadow-lg p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <div className="container mx-auto">
          {/* Username Input */}
          <label className="input input-bordered flex items-center gap-2 w-full mb-4">
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="grow"
              placeholder="Username"
            />
          </label>

          {/* Password Input */}
          <label className="input input-bordered flex items-center gap-2 w-full mb-4">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="grow"
              placeholder="Password"
            />
          </label>

          {/* Buttons for submit and cancel */}
          <div className="flex gap-2">
            <button className="btn btn-outline btn-primary grow" onClick={handleSubmit}>
              Login
            </button>
            <button className="btn btn-outline btn-warning grow" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
