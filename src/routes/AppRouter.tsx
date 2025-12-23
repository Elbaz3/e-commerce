import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { lazy } from "react";

// pages
const Product = lazy(() => import("@pages/Product/Product"));
const AboutUs = lazy(() => import("@pages/AboutUs/AboutUs"));
const Login = lazy(() => import("@pages/Login/Login"));
const SignUp = lazy(() => import("@pages/SignUp/SignUp"));
const Cart = lazy(() => import("@pages/Cart/Cart"));
const WishList = lazy(() => import("@pages/WishList/WishList"));
const Checkout = lazy(() => import("@pages/CheckOut/Checkout"));
const Contact = lazy(() => import("@pages/ContactUs/Contact"));
const Profile = lazy(() => import("@pages/Profile"));

import Error from "@pages/Error";
import MainLayout from "@layouts/MainLayout/MainLayout";
import Home from "@pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },

      { path: "product", element: <Product /> },
      { path: "cart", element: <Cart /> },
      { path: "wishlist", element: <WishList /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "checkout", element: <Checkout /> },
      { path: "profile", element: <Profile /> },

      { path: "error", element: <Error /> },

      {
        path: "*",
        element: <Navigate to="/error" replace />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
