import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

// pages
const Products = lazy(() => import("@pages/Products"));
const Product = lazy(() => import("@pages/Product"));
const AboutUs = lazy(() => import("@pages/AboutUs"));
const Login = lazy(() => import("@pages/Login"));
const SignUp = lazy(() => import("@pages/SignUp"));
const Cart = lazy(() => import("@pages/Cart"));
const WishList = lazy(() => import("@pages/WishList"));
const Account = lazy(() => import("@pages/Account"));
const Orders = lazy(() => import("@pages/Orders"));
const Checkout = lazy(() => import("@pages/Checkout"));
const Payment = lazy(() => import("@pages/Payment"));
const Contact = lazy(() => import("@pages/Contact"));
const Profile = lazy(() => import("@pages/Profile"));

import Error from "@pages/Error";
import MainLayout from "@layouts/MainLayout/MainLayout";
import Home from "@pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "categories/products/:prefix",
        element: <Products />,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              status: 404,
              statusText: "Category Not Found",
            });
          }
          return true;
        },
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            index: true,
            element: <Account />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
        ],
      },
    ],
  },
]);
const AppRouter = () => {
  return (
    // <Suspense fallback={<PageSuspenseFallback />}>
    <RouterProvider router={router} />
    // </Suspense>
  );
};

export default AppRouter;
