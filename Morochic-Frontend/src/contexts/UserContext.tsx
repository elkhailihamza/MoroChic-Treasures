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

type wishlist = {
  user_id?: number;
  product_id?: number;
};

type UserContextProps = {
  fetchWishlist: () => Promise<void>;
  wishlist?: wishlist;
  wishlistIsLoading?: boolean;
  userProfile?: userProfile;
  isLoading?: boolean;
};

const UserContext = createContext<UserContextProps>({
  fetchWishlist: () => Promise.resolve(),
});

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const { setCurrentUser, setIsLoggedIn } = useAuth();
  const [userProfile, setUserProfile] = useState<userProfile | undefined>();
  const [wishlist, setWishlist] = useState<wishlist>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [wishlistIsLoading, setWishlistIsLoading] = useState<boolean>(false);

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
      return Promise.reject();
    }
  };
  const fetchProfile = async (): Promise<void> => {
    try {
      const response = await axiosClient.get("/profile/get");
      setUserProfile(response.data.profile);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const fetchWishlist = async (): Promise<void> => {
    setWishlistIsLoading(true);
    try {
      const response = await axiosClient.get("/wishlist/get");
      setWishlist(response.data.wishlist);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    } finally {
      setWishlistIsLoading(false);
    }
  };

  const values = {
    fetchWishlist,
    wishlist,
    wishlistIsLoading,
    userProfile,
    isLoading,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;
