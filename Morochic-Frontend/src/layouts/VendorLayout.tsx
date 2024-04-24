import { Outlet } from "react-router-dom";
import Navbar from "../sections/Vendor/NavbarSection";
import { useEffect, useState } from "react";
import { SpinnerCircular } from "spinners-react";
import { useUser } from "../contexts/UserContext";

export const VendorLayout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { checkIfVendorGuard } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      if (await checkIfVendorGuard()) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="vendor-layout">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <SpinnerCircular color="#000000" />
        </div>
      ) : (
        <>
          <Navbar />
          <Outlet />
        </>
      )}
    </div>
  );
};
