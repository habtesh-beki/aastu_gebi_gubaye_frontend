// routes.ts
import { RouteObject, Navigate } from "react-router";
import HomePage from "@/pages";

const routes: RouteObject[] = [
  {
    path: "/dashboard",
    element: <HomePage />,
  },
  {
    path: "/admins",
    element: <HomePage />,
  },
  {
    path: "/all-members",
    element: <HomePage />,
  },
  {
    path: "/message",
    element: <HomePage />,
  },
  {
    path: "/my-profile",
    element: <HomePage />,
  },
  //   catch all routes
  {
    path: "*",
    element: <Navigate to="/dashboard" replace />,
  },
];

export default routes;
