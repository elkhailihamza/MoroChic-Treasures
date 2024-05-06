import { Outlet } from "react-router-dom";
import Navbar from "../sections/Vendor/NavbarSection";
import { useAuth } from "../contexts/AuthContext";
import { useUser } from "../contexts/UserContext";
import { useEffect } from "react";
import { UNAUTHORIZED, router } from "../App";

export const VendorLayout = () => {
  const { isLoading } = useUser();
  const { currentUser, isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn && currentUser.role_id !== 2 && !isLoading) {
      router.navigate(UNAUTHORIZED);
    }
  }, [isLoggedIn, currentUser.role_id, isLoading]);

  return (
    <div className="vendor-layout">
      <>
        <Navbar />
        <Outlet />
      </>
    </div>
  );
};
