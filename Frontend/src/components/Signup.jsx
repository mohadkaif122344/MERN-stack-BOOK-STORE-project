import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const Signup = () =>{
  const navigate = useNavigate();
  const { setAuthUser,API } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignupOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${API}/user/signup`,
        {
          fullname:username,
          email,
          password,
        }
      );
      setAuthUser(data.user);
      toast.success(data.message);
      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mt-10">
        <Link
          to="/"
          className="float-right text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl"
        >
          ✕
        </Link>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
            Create Account
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Create your BookStore account
          </p>
        </div>
        <form onSubmit={SignupOnSubmit}>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg outline-none bg-white dark:bg-slate-700 text-gray-800 dark:text-white placeholder-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
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
            Signup
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          Already registered?{" "}
          <Link
            to="/login"
            className="text-pink-500 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;