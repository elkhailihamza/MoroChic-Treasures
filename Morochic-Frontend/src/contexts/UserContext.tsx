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
  userProfile?: userProfile;
  isLoading?: boolean;
  // checkIfVendorGuard: () => Promise<boolean | undefined>;
};

const UserContext = createContext<UserContextProps>({
  // checkIfVendorGuard: () => Promise.resolve(false),
});

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const { setCurrentUser, setIsLoggedIn } = useAuth();
  const [userProfile, setUserProfile] = useState<userProfile | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const run = async () => {
      setIsLoading(true);
      await fetchMe();
      await fetchProfile();
      setIsLoading(false);
    };

    run();
  }, []);

  const fetchMe = async (): Promise<void> => {
    try {
      const response = await axiosClient.post("/me");
      setCurrentUser(response.data.user);
      setIsLoggedIn(true);
      return Promise.resolve();
    } catch (error) {
      return Promise.resolve();
    }
  };
  const fetchProfile = async (): Promise<void> => {
    try {
      const response = await axiosClient.get("/profile/get");
      setUserProfile(response.data.profile);
      return;
    } catch (error) {
      return Promise.resolve();
    }
  };

  // const checkIfVendorGuard = async (): Promise<boolean> => {
  //   if (
  //     currentUser &&
  //     Object.keys(currentUser).length > 0 &&
  //     currentUser.role_id === 2
  //   ) {
  //     return true;
  //   } else {
  //     if (!isLoading) {
  //       router.navigate(UNAUTHORIZED);
  //     }
  //     return false;
  //   }
  // };

  // const checkIfUserGuard = async (): Promise<boolean> => {
  //   await fetchMe();

  //   if (hasFetchedMe && currentUser && Object.keys(currentUser).length > 0) {
  //     return true;
  //   } else {
  //     router.navigate(UNAUTHORIZED);
  //     return false;
  //   }
  // };

  const values = {
    userProfile,
    // checkIfUserGuard,
    // checkIfVendorGuard,
    isLoading,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;
