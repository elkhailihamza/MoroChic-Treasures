import { Outlet } from "react-router-dom";
import Navbar from "../sections/Main/NavbarSection";
import { Footer } from "../sections/Main/FooterSection";
// import { useEffect, useState } from "react";
// import Cookies from 'js-cookie';

export const MainLayout = () => {
  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   const items = Cookies.get("cartItems");
  //   if (items) {
  //     setCartItems(items);
  //   }
  // }, []);
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
