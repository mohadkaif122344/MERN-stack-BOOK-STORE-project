import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { setAuthUser,API } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${API}/user/login`,
        {
          email,
          password,
        }
      );
      setAuthUser(data.user);
      toast.success("Loggedin Successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
        <Link
          to="/"
          className="float-right text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl"
        >
          ✕
        </Link>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
            Welcome Back 
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Login to continue to BookStore
          </p>
        </div>
        <form onSubmit={LoginOnSubmit}>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg outline-none bg-white dark:bg-slate-700 text-gray-800 dark:text-white placeholder-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg outline-none bg-white dark:bg-slate-700 text-gray-800 dark:text-white placeholder-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600 active:scale-[0.98] duration-200"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-pink-500 font-medium hover:underline"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Login;