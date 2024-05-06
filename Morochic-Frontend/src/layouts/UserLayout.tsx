import { Outlet } from "react-router-dom";
import Navbar from "../sections/Main/NavbarSection";
import { Footer } from "../sections/Main/FooterSection";
import { useUser } from "../contexts/UserContext";
import { SpinnerCircular } from "spinners-react";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import { UNAUTHORIZED, router } from "../App";

export const UserLayout = () => {
  const { isLoading } = useUser();
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    isLoggedIn && isLoading === false ? "" : router.navigate(UNAUTHORIZED);
  }, []);
  return isLoading ? (
    <div className="h-screen flex justify-center items-center">
      <SpinnerCircular color="#000000" />
    </div>
  ) : (
    <div className="user-layout">
      <Navbar />
      <div className="mt-[65px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
