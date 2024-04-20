import { Outlet } from "react-router-dom";
import Navbar from "../sections/NavbarSection";
import { Footer } from "../sections/FooterSection";

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />

      <Outlet />
      <Footer />
    </div>
  );
};
