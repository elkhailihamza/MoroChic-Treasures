import { ReactNode, createContext, useContext, useState } from "react";
import axiosClient from "../axios";

interface authContextProps {
  children: ReactNode;
}

type errors = {
  username?: string;
  email?: string;
  password?: string;
};

type currentUser = {
  id?: number | string;
  username?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  role_id?: number | string;
  role_name?: string;
  created_at?: number | Date;
  updated_at?: number | Date;
};

type AuthContextType = {
  isLoggedIn: boolean;
  currentUser: currentUser;
  setCurrentUser: (_user: currentUser) => void;
  fetchMe: () => Promise<void>;
  storeAccess: (_token: string) => boolean;
  login: (_email: string, _password: string) => Promise<boolean>;
  logout: () => void;
  errors: errors;
  setErrors: (_errors: errors) => void;
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  currentUser: {},
  setCurrentUser: (_user) => {},
  fetchMe: () => Promise.resolve(),
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      const response = await axiosClient.post("/logout");
      localStorage.clear();
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMe = async (): Promise<any> => {
    // if (!currentUser && Object.keys(currentUser).length == 0) {
      try {
        const response = await axiosClient.post("/me");
        setCurrentUser(response.data.user[0]);
        console.log(response.data.user[0]);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    // }
  };

  const value = {
    isLoggedIn,
    currentUser,
    setCurrentUser,
    fetchMe,
    storeAccess,
    login,
    logout,
    errors,
    setErrors,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
