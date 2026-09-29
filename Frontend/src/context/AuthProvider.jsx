import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const API = import.meta.env.VITE_BACKEND_URL;

const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => {
    const user = localStorage.getItem("authUser");
    return user ? JSON.parse(user) : null;
  });

  useEffect(() => {
    if (authUser) {
      localStorage.setItem("authUser", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("authUser");
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser,API }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;