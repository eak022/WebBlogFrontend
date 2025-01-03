import { useEffect, useState, useContext } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router";
import swal from "sweetalert2";
import { useAuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext"; // นำเข้า ThemeContext

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const { login, user: loggedUser } = useAuthContext();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext); // ใช้ theme จาก ThemeContext

  useEffect(() => {
    if (loggedUser) {
      navigate("/");
    }
  }, [loggedUser, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const currentUser = await AuthService.login(user.username, user.password);
      if (currentUser.status === 200) {
        login(currentUser.data);
        swal.fire({
          title: "Login Successful",
          text: "Welcome back!",
          icon: "success",
        });
        navigate("/");
      }
    } catch (error) {
      swal.fire({
        title: "Login Failed",
        text: error?.response?.data?.message || error.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen ${theme === "light" ? "bg-white" : "bg-gray-900 text-white"}`}
    >
      <div
        className={`card w-96 shadow-lg p-6 ${theme === "light" ? "bg-white" : "bg-gray-900 text-white"}`}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-4">
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Username"
              required
            />
          </div>
          <div className="input-group mb-4">
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex gap-2">
            <button type="submit" className="btn btn-outline btn-primary grow">
              Login
            </button>
            <button
              type="button"
              className="btn btn-outline btn-warning grow"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
