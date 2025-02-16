// routes.ts
import { RouteObject, Navigate } from "react-router";
import Dashboard from "./features/dashboard/Dashboard";
import AllMembers from "@/features/AllMembers/AllMembers";
import Admins from "@/features/Admins/Admins";
import { FetchParamsProvider } from "@/features/AllMembers/context/filterParamContex";
import Message from "./features/Messageing/Message";
import MyProfile from "./features/MyProfile/MyProfile";

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
        element: <Message />,
    },
    {
        path: "my-profile",
        element: <MyProfile />,
    },
    {
        path: "*",
        element: <Navigate to="/dashboard" replace />,
    },
];

export default routes;
