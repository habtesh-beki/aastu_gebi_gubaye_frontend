// routes.ts
import { RouteObject, Navigate } from "react-router";
import Dashboard from "./features/dashboard/Dashboard";
import AddConfession from "./features/Confession/AddConfession/AddConfession";
import AllMembers from "@/features/AllMembers/AllMembers";
import UpdateStudent from "./features/UpdateStudent/UpdateStudent";

const routes: RouteObject[] = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admins",
    element: <UpdateStudent />,
  },
  {
    path: "/all-members",
    element: <AllMembers />,
  },
  {
    path: "/message",
    element: <Dashboard />,
  },
  {
    path: "/my-profile",
    element: <AddConfession />,
  },
  //   catch all routes
  {
    path: "*",
    element: <Navigate to="/dashboard" replace />,
  },
];

export default routes;
