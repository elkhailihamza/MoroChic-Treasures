import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { Login } from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import HomeMain from "./pages/main/Home";
import { AboutUs } from "./pages/main/AboutUs";
import { Profile } from "./pages/main/Profile";
import { Catalog } from "./pages/main/Catalog";

import HomeVendor from "./pages/vendor/Home";

import { RootLayout } from "./layouts/RootLayout";
import { MainLayout } from "./layouts/MainLayout";
import { AuthLayout } from "./layouts/AuthLayout";
import { AuthProvider } from "./contexts/AuthContext";
import { UserProvider } from "./contexts/UserContext";
// import { ReactNode } from "react";
import { Item } from "./pages/main/Item";
import { VendorLayout } from "./layouts/VendorLayout";
import { ErrorLayout } from "./layouts/ErrorLayout";
import { Unauthorized } from "./pages/error/Unauthorized";
import { NotFound } from "./pages/error/NotFound";
import { ShoppingCart } from "./pages/main/ShoppingCart";
import { NewProduct } from "./pages/vendor/NewProduct";
import { ProductProvider } from "./contexts/ProductContext";
import { ProductTemplate } from "./pages/vendor/ProductTemplate";
import { UserLayout } from "./layouts/UserLayout";
import { Explore } from "./pages/main/Explore";

export const LOGIN = "/auth/login";
export const REGISTER = "/auth/register";
export const HOME = "/";
export const SETTINGS = "/settings";
export const PROFILE = "/profile";
export const CATALOG = "/catalog";
export const CART = "/cart";
export const EXPLORE = "/catalog/explore";
export const VENDORTEMPLATE = "/vendor/create/template";
export const VENDORCREATE = "/vendor/create";
export const UNAUTHORIZED = "/401";
export const NOTFOUND = "/404";

export const NEWPRODUCT = "/vendor/create";

// const withAuth = (WrappedRoute: any) => {
//   return (props: any): ReactNode => {
//     const { isLoggedIn } = useAuth();
//     if (!isLoggedIn) {
//       return <Navigate to={LOGIN} />;
//     }

//     return <WrappedRoute {...props} />;
//   };
// };

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route element={<MainLayout />}>
        <Route index element={<HomeMain />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/explore" element={<Explore />} />
        <Route path="catalog/product/:id" element={<Item />} />
        <Route path="cart" element={<ShoppingCart />} />
      </Route>
      <Route element={<UserLayout />}>
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="vendor" element={<VendorLayout />}>
        <Route index element={<HomeVendor />} />
        <Route path="create" element={<NewProduct />} />
        <Route path="create/template" element={<ProductTemplate />} />
      </Route>
      <Route element={<ErrorLayout />}>
        <Route path="/401" element={<Unauthorized />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <ProductProvider>
          <RouterProvider router={router} />
        </ProductProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
