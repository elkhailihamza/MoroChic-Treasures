import { Outlet } from "react-router-dom";
import Navbar from "../sections/NavbarSection";
import { Footer } from "../sections/FooterSection";

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="max-w-8xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
