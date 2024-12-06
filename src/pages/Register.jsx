import React from "react";
import { useNavigate } from "react-router-dom"; // นำเข้า useNavigate

const Register = () => {
  const navigate = useNavigate(); // ใช้ useNavigate เพื่อเปลี่ยนเส้นทาง

  const handleCancel = () => {
    navigate("/"); // เมื่อกด Cancel จะไปหน้าหลัก (/)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card w-96 bg-white shadow-lg p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <div className="container mx-auto">
          {/* Username Input */}
          <label className="input input-bordered flex items-center gap-2 w-full mb-4">
            <input
              type="text"
              name="username"
              className="grow"
              placeholder="Username"
            />
          </label>

          {/* Password Input */}
          <label className="input input-bordered flex items-center gap-2 w-full mb-4">
            <input
              type="password"
              name="password"
              className="grow"
              placeholder="Password"
            />
          </label>

          {/* Buttons for submit and cancel */}
          <div className="flex gap-2">
            <button className="btn btn-outline btn-primary grow">Register</button>
            <button
              className="btn btn-outline btn-warning grow"
              onClick={handleCancel} // เรียกฟังก์ชัน handleCancel เมื่อกดปุ่ม Cancel
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
