import { ReactNode, createContext, useContext, useState } from "react";
import axiosClient from "../axios";

interface authContextProps {
  children: ReactNode;
}

const AuthContext = createContext({
  isLoggedIn: false,
  currentUser: {},
  fetchMe: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: authContextProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const storeAccess = async (token: string) => {
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const fetchMe = async () => {
    try {
      const response = await axiosClient.post("/me");
      setCurrentUser(response);
    } catch (error) {}
  };

  const value = {
    isLoggedIn,
    currentUser,
    fetchMe,
    storeAccess,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
