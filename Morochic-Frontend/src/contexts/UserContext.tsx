import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axiosClient from "../axios";
import { useAuth } from "./AuthContext";

interface UserProviderProps {
  children: ReactNode;
}

type userProfile = {
  id?: number | string;
  bio?: string;
  avatar?: string;
};

type UserContextProps = {
  fetchMe: () => Promise<void>;
  fetchProfile: () => Promise<void>;
  userProfile?: userProfile;
};

const UserContext = createContext<UserContextProps>({
  fetchMe: () => Promise.resolve(),
  fetchProfile: () => Promise.resolve(),
});

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const { setCurrentUser, currentUser } = useAuth();
  const [userProfile, setUserProfile] = useState<userProfile | undefined>();
  const [hasFetchedMe, setHasFetchedMe] = useState<boolean>(false);

  useEffect(() => {
    if (!currentUser && !hasFetchedMe) {
      fetchMe().then(() => setHasFetchedMe(true));
    }
  }, [currentUser]);

  const fetchMe = async (): Promise<void> => {
    try {
      const response = await axiosClient.post("/me");
      setCurrentUser(response.data.user[0]);
      return;
    } catch (error) {
      return Promise.reject(error);
    }
  };
  const fetchProfile = async (): Promise<void> => {
    try {
      const response = await axiosClient.get("/profile/get");
      setUserProfile(response.data.profile);
      return;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const values = {
    fetchMe,
    fetchProfile,
    userProfile,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;
