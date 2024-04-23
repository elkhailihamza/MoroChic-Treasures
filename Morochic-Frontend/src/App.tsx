import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { Login } from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/main/Home";
import { AboutUs } from "./pages/main/AboutUs";
import { Profile } from "./pages/main/Profile";
import { Catalog } from "./pages/main/Catalog";

import { RootLayout } from "./layouts/RootLayout";
import { MainLayout } from "./layouts/MainLayout";
import { AuthLayout } from "./layouts/AuthLayout";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { UserProvider } from "./contexts/UserContext";
import { ReactNode } from "react";
import { Item } from "./pages/main/Item";

export const LOGIN = "/auth/login";
export const HOME = "/";
export const SETTINGS = "/settings";
export const PROFILE = "/profile";
export const CATALOG = "/catalog";

const withAuth = (WrappedRoute: any) => {
  return (props: any): ReactNode => {
    const { isLoggedIn } = useAuth();
    if (!isLoggedIn) {
      return <Navigate to={LOGIN} />;
    }

    return <WrappedRoute {...props} />;
  };
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="profile" element={<Profile />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/:id" element={<Item />} />
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
        <RouterProvider router={router} />
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
