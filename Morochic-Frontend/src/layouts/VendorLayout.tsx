import { Outlet } from "react-router-dom"
import Navbar from "../sections/Vendor/NavbarSection"

export const VendorLayout = () => {
  return (
    <div className="vendor-layout">
        <Navbar />
        <Outlet />
    </div>
  )
}
