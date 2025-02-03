// routes.ts
import { RouteObject, Navigate } from "react-router";
import Dashboard from "./features/dashboard/Dashboard";
import AddConfession from "./features/Confession/AddConfession/AddConfession";
import AllMembers from "@/features/AllMembers/AllMembers";
import Admins from "@/features/Admins/Admins";

const routes: RouteObject[] = [
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "admins",
    element: <Admins />,
  },
  {
    path: "all-members",
    element: <AllMembers />,
  },
  {
    path: "message",
    element: <Dashboard />,
  },
  {
    path: "my-profile",
    element: <AddConfession />,
  },
  {
    path: "*",
    element: <Navigate to="/dashboard" replace />,
  },
];

export default routes;
