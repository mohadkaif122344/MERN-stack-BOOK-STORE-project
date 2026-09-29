import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "./context/AuthProvider";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { useContext } from "react";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  const { authUser } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <div className="bg-white text-black dark:bg-slate-900 dark:text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/login" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Toaster />
        <Footer />
      </div>
    </>
  );
}

export default App;
