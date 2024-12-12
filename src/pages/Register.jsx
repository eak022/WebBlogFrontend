import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service"; // นำเข้า AuthService

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.register(
        formData.username,
        formData.password
      );
      console.log("Registration successful:", response.data);
      navigate("/"); // กลับไปหน้าหลักเมื่อสมัครสมาชิกสำเร็จ
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card w-96 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="container mx-auto">
            {/* Username Input */}
            <label className="input input-bordered flex items-center gap-2 w-full mb-4">
              <input
                type="text"
                name="username"
                className="grow"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </label>

            {/* Password Input */}
            <label className="input input-bordered flex items-center gap-2 w-full mb-4">
              <input
                type="password"
                name="password"
                className="grow"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </label>

            {/* Buttons */}
            <div className="flex gap-2">
              <button
                type="submit"
                className="btn btn-outline btn-primary grow"
              >
                Register
              </button>
              <button
                type="button"
                className="btn btn-outline btn-warning grow"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
