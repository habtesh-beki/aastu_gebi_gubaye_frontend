// routes.ts
import { RouteObject, Navigate } from "react-router";
import Dashboard from "./features/dashboard/Dashboard";
import AddConfession from "./features/Confession/AddConfession/AddConfession";
import AllMembers from "@/features/AllMembers/AllMembers";
import Admins from "@/features/Admins/Admins";
import UpdateStudent from "@/features/UpdateStudent/UpdateStudent";
import { FetchParamsProvider } from "@/features/AllMembers/context/filterParamContex";

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
    element: (
      <FetchParamsProvider>
        <AllMembers />
      </FetchParamsProvider>
    ),
  },
  {
    path: "message",
    element: <UpdateStudent />,
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
