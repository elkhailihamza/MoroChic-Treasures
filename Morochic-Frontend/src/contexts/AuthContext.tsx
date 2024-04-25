import { ReactNode, createContext, useContext, useState } from "react";
import axiosClient from "../axios";
import { HOME, router } from "../App";

interface authContextProps {
  children: ReactNode;
}

type errors = {
  username?: string;
  email?: string;
  password?: string;
  message?: string;
  details?: string;
};

type currentUser = {
  id?: number | string;
  username?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  avatar?: string | null;
  role_id?: number | string;
  role_name?: string;
  created_at?: number | Date;
  updated_at?: number | Date;
};

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  currentUser: currentUser;
  setCurrentUser: (_user: currentUser) => void;
  storeAccess: (_token: string) => boolean;
  login: (_email: string, _password: string) => Promise<boolean>;
  logout: () => void;
  errors: errors;
  setErrors: (_errors: errors) => void;
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  currentUser: {},
  setCurrentUser: (_user) => {},
  storeAccess: (_token) => false,
  login: (_email, _password) => Promise.resolve(false),
  logout: () => {},
  errors: {} as errors,
  setErrors: (_errors) => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: authContextProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<currentUser>({});
  const [errors, setErrors] = useState<errors>({});

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
        router.navigate(HOME);
      }
      setErrors({} as errors);
      return Promise.resolve(true);
    } catch (error: any) {
      setErrors(error?.response?.data?.errors ?? {});
      return false;
    }
  };

  const logout = async () => {
    try {
      await axiosClient.post("/logout");
      localStorage.clear();
      window.location.reload();
      return;
    } catch (error) {
      return;
    }
  };

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    currentUser,
    setCurrentUser,
    storeAccess,
    login,
    logout,
    errors,
    setErrors,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
