import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthProvider";

function Logout() {
  const { setAuthUser } = useContext(AuthContext);

  const handleLogout = () => {
    setAuthUser(null);
    toast.success("Logout successfully");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 cursor-pointer"
    >
      Logout
    </button>
  );
}

export default Logout;