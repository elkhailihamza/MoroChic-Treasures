import { ReactNode, createContext, useContext, useState } from "react";
import axiosClient from "../axios";

interface authContextProps {
  children: ReactNode;
}

type errors = {
  username: string;
  email: string;
  password: string;
};

const AuthContext = createContext({
  isLoggedIn: false,
  currentUser: {},
  fetchMe: () => {},
  storeAccess: (_token: string): boolean => false,
  login: (_email: string, _password: string): Promise<boolean> => {
    return Promise.resolve(false);
  },
  logout: () => {},
  errors: {} as errors,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: authContextProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [errors, setErrors] = useState<errors>({} as errors);

  const storeAccess = (_token: string): boolean => {
    if (_token) {
      localStorage.setItem("ACCESS_TOKEN", _token);
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const login = async (_email: string, _password: string): Promise<boolean> => {
    try {
      const response = await axiosClient.post("/login", {
        email: _email,
        password: _password,
      });
      if (response.data.access_token) {
        storeAccess(response.data.access_token);
        setCurrentUser(response.data.user);
      }
      setErrors({} as errors);
      return Promise.resolve(true);
    } catch (error: any) {
      setErrors(error?.response?.data?.errors ?? {});
      Promise.reject(false);
      return false;
    }
  };

  const logout = async () => {
    try {
      const response = await axiosClient.post("/logout");
      localStorage.clear();
      return response;
    } catch (error) {
      console.error(error);
    }
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
    login,
    logout,
    errors,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
