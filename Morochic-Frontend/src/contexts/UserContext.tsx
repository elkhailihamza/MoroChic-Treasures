import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axiosClient from "../axios";
import { useAuth } from "./AuthContext";
import { LOGIN, UNAUTHORIZED, router } from "../App";

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
  checkIfVendorGuard: () => Promise<boolean | undefined>;
};

const UserContext = createContext<UserContextProps>({
  fetchMe: () => Promise.resolve(),
  fetchProfile: () => Promise.resolve(),
  checkIfVendorGuard: () => Promise.resolve(false),
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
  const fetchProfile = async (): Promise<undefined> => {
    try {
      const response = await axiosClient.get("/profile/get");
      setUserProfile(response.data.profile);
      return;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const checkIfUserGuard = async (): Promise<boolean> => {
    await fetchMe();

    if (currentUser && Object.keys(currentUser).length > 0) {
      return true;
    }

    router.navigate(LOGIN);
    return false;
  };

  const checkIfVendorGuard = async (): Promise<boolean | undefined> => {
    await fetchMe();

    try {
      await fetchMe();

      if (
        currentUser &&
        Object.keys(currentUser).length > 0 &&
        currentUser.role_id === 2
      ) {
        return true;
      } else {
        router.navigate(UNAUTHORIZED);
        return false;
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      router.navigate(UNAUTHORIZED);
    }
  };

  const values = {
    fetchMe,
    fetchProfile,
    userProfile,
    checkIfUserGuard,
    checkIfVendorGuard,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;
