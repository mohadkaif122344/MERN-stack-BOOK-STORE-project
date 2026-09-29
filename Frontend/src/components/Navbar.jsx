import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdMenu, MdClose, MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import Logout from "./Logout";
import { IoSearch } from "react-icons/io5";
import { AuthContext } from "../context/AuthProvider";

function Navbar() {
  const { authUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 text-black dark:text-white">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold">
            bookStore
          </Link>
          <ul className="hidden md:flex gap-6">
            <li>
              <Link to="/" className="hover:text-pink-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/course" className="hover:text-pink-500">
                Course
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-pink-500">
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2">
              <input
                type="text"
                placeholder="Search"
                className="w-70 outline-none bg-transparent"
              />
              <span>
                <IoSearch />
              </span>
            </div>
            <button onClick={changeTheme} className="text-2xl cursor-pointer">
              {theme === "light" ? <MdOutlineDarkMode /> : <CiLight />}
            </button>
            <div className="hidden md:block">
              {authUser ? (
                <Logout />
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="bg-black text-white px-3 py-2 rounded-md"
                >
                  Login
                </button>
              )}
            </div>
            {/* Hembergur */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-3xl cursor-pointer"
            >
              {menuOpen ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-4 border-t border-gray-200 dark:border-gray-700 pt-4">
              <li>
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-pink-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/course"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-pink-500"
                >
                  Course
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-pink-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-pink-500"
                >
                  Contact
                </Link>
              </li>
              <li>
                {authUser ? (
                  <Logout />
                ) : (
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      navigate("/login");
                    }}
                    className="bg-black text-white px-3 py-2 rounded-md"
                  >
                    Login
                  </button>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
