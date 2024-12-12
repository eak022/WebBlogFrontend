import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(username, password);
      console.log("Login successful:", response.data);
      navigate("/"); // ไปที่หน้าหลังล็อกอินสำเร็จ
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card w-96 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label className="input input-bordered flex items-center gap-2 w-full mb-4">
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="grow"
              placeholder="Username"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full mb-4">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="grow"
              placeholder="Password"
              required
            />
          </label>
          <div className="flex gap-2">
            <button type="submit" className="btn btn-outline btn-primary grow">
              Login
            </button>
            <button type="button" className="btn btn-outline btn-warning grow" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
