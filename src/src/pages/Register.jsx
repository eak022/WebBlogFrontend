import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import swal from "sweetalert2";
import { useAuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext"; // นำเข้า ThemeContext

const Register = () => {
  const navigate = useNavigate();
  const { user: loggedUser } = useAuthContext();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { theme } = useContext(ThemeContext); // ใช้ theme จาก ThemeContext

  useEffect(() => {
    if (loggedUser) {
      navigate("/");
    }
  }, [loggedUser, navigate]);

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
      swal.fire({
        title: "Registration Successful",
        text: "Welcome! You can now log in.",
        icon: "success",
        confirmButtonText: "Go to Login",
      }).then(() => {
        navigate("/login");
      });
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
      swal.fire({
        title: "Registration Failed",
        text: error.response?.data?.message || error.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen ${theme === "light" ? "bg-white" : "bg-gray-900 text-white"}`}
    >
      <div
        className={`card w-96 shadow-lg p-6 ${theme === "light" ? "bg-white" : "bg-gray-900 text-white"}`}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="container mx-auto">
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

            <div className="flex gap-2">
              <button type="submit" className="btn btn-outline btn-primary grow">
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
