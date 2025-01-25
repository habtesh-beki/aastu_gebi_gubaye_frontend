// routes.ts
import { RouteObject, Navigate } from "react-router";
import HomePage from "@/pages";
import Dashboard from "./features/dashboard/Dashboard";
import AddStudent from "./features/AddStudent/Addstudent";
import Filter from "./features/Filter/Filter";
import AddConfession from "./features/Confession/AddConfession/AddConfession";
import AllMembers from "@/features/AllMembers/AllMembers";

const routes: RouteObject[] = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admins",
    element: <AddStudent />,
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
