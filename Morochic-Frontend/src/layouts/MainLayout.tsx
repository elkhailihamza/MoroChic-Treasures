import { Outlet } from "react-router-dom";
import Navbar from "../sections/Navbar";
import { Footer } from "../sections/Footer";

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
