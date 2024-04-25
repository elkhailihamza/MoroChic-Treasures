import { Outlet } from "react-router-dom";
import Navbar from "../sections/Vendor/NavbarSection";
import { useEffect } from "react";
import { SpinnerCircular } from "spinners-react";
import { useUser } from "../contexts/UserContext";
import { UNAUTHORIZED, router } from "../App";

export const VendorLayout = () => {
  // const { isLoading, checkIfVendorGuard } = useUser();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await checkIfVendorGuard();
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="vendor-layout">
      <>
        <Navbar />
        <Outlet />
      </>
    </div>
  );
};
