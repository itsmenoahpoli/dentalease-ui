import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { LazyLoadComponent } from "@/components";
import { AuthLayout } from "@/layouts";

/**
 * Auth Pages
 */
const SigninPage = LazyLoadComponent(React.lazy(() => import("@/views/auth/SignInPage")));

const router = createBrowserRouter([
  // {
  //   path: "*",
  //   element: ErrorPage,
  // },
  {
    path: "/",
    element: <Navigate to="/dashboard/overview" />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/signin",
        element: SigninPage,
      },
    ],
  },
]);

export default router;
