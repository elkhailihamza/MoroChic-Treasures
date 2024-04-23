import { Outlet } from "react-router-dom";
import Navbar from "../sections/Main/NavbarSection";
import { Footer } from "../sections/Main/FooterSection";

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="mt-[65px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
