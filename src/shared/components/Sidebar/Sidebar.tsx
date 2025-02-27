import { NavLink } from "react-router";
import { motion } from "motion/react";
import { LogOut, User } from "lucide-react";
import { Sidebar as ShadcnSidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, useSidebar, SidebarGroupLabel } from "@/shared/components/ui/sidebar";
import LOGO from "@/assets/logo.png";

type SidebarItem = {
    name: string;
    icon: React.ElementType;
    path: string;
};

type SidebarProps = {
    items: SidebarItem[];
    style?: string;
};

export default function Sidebar({ items, style }: SidebarProps) {
    const { state } = useSidebar();

    return (
        <ShadcnSidebar collapsible="icon" className={`bg-background flex flex-col justify-between ${style}`}>
            <div className={`pt-4 ${state === "expanded" ? "px-4" : ""}`}>
                <SidebarHeader>
                    <NavLink to="/dashboard" className="flex items-center gap-4">
                        <img
                            src={LOGO}
                            className="h-12 w-12 object-contain rounded-full"
                            alt="Mahibere kidusan logo"
                        />
                        {state === "expanded" && <div>
                            <h1 className="text-xl text-[#0335BA] font-medium">
                                AASTU Gebi Gubae
                            </h1>
                            <h3 className="text-lg text-[#8C8C98]">Main Portal</h3>
                        </div>}
                    </NavLink>
                </SidebarHeader>
                <SidebarContent className="mt-4">
                    <div>
                        <SidebarGroup>
                            <SidebarGroupLabel>
                                <h2 className="text-lg text-gray-400">Main Menu</h2>
                            </SidebarGroupLabel>
                            <SidebarGroupContent className="mt-2 text-gray-500 text-xl">
                                <SidebarMenu>
                                    {items.map((item) => {
                                        return (
                                            <SidebarMenuItem key={item.name}>
                                                <NavLink key={item.name} to={item.path}>
                                                    {({ isActive }) => (
                                                        <motion.div
                                                            className={`py-3 flex items-center gap-2 ${state === "expanded" ? "px-4" : "px-1 justify-center"}`}
                                                            layout
                                                            initial={false}
                                                            animate={
                                                                isActive
                                                                    ? {
                                                                        color: "rgb(29 78 216)",
                                                                        backgroundColor:
                                                                            "rgb(219 234 254)",
                                                                        borderLeftColor:
                                                                            "rgb(29 78 216)",
                                                                        borderLeftWidth: "4px",
                                                                    }
                                                                    : {
                                                                        color: "currentColor",
                                                                        backgroundColor:
                                                                            "transparent",
                                                                        borderLeftColor:
                                                                            "transparent",
                                                                        borderLeftWidth: "0px",
                                                                    }
                                                            }
                                                            whileHover={
                                                                !isActive
                                                                    ? {
                                                                        color: "rgb(29 78 216)",
                                                                        backgroundColor:
                                                                            "rgb(219 234 254)",
                                                                        borderLeftColor:
                                                                            "rgb(29 78 216)",
                                                                        borderLeftWidth: "4px",
                                                                    }
                                                                    : {}
                                                            }
                                                        >
                                                            <item.icon className="w-6" />
                                                            {state === "expanded" && <span className="justify-end">
                                                                {item.name}
                                                            </span>}
                                                        </motion.div>
                                                    )}
                                                </NavLink>
                                            </SidebarMenuItem>
                                        );
                                    })}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                        <SidebarGroup className="mt-2">
                            <SidebarGroupContent className="text-gray-500 text-xl ">
                                <NavLink to="my-profile">
                                    {({ isActive }) => (
                                        <motion.div
                                            className={`px-1 py-3 flex gap-2 items-center ${state === "expanded" ? "px-4" : "px-1 justify-center"}`}
                                            layout
                                            initial={false}
                                            animate={
                                                isActive
                                                    ? {
                                                        color: "rgb(29 78 216)",
                                                        backgroundColor:
                                                            "rgb(219 234 254)",
                                                        borderLeftColor: "rgb(29 78 216)",
                                                        borderLeftWidth: "4px",
                                                    }
                                                    : {
                                                        color: "currentColor",
                                                        backgroundColor: "transparent",
                                                        borderLeftColor: "transparent",
                                                        borderLeftWidth: "0px",
                                                    }
                                            }
                                            whileHover={
                                                !isActive
                                                    ? {
                                                        color: "rgb(29 78 216)",
                                                        backgroundColor:
                                                            "rgb(219 234 254)",
                                                        borderLeftColor: "rgb(29 78 216)",
                                                        borderLeftWidth: "4px",
                                                    }
                                                    : {}
                                            }
                                        >
                                            <User className="w-6" />
                                            {state === "expanded" && <span className="justify-end">My Profile</span>}
                                        </motion.div>
                                    )}
                                </NavLink>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </div>
                </SidebarContent>
            </div>
            <SidebarFooter className={`mt-auto pb-4 ${state === "expanded" ? "px-4" : ""}`}>
                <motion.button
                    className={`px-2 flex gap-1 items-center text-gray-500 ${state === "expanded" ? "" : "justify-center"}`}
                    whileHover={{ color: "hsl(var(--destructive))", x: 4 }}
                >
                    {state === "expanded" && <span>LogOut</span>}
                    <LogOut className="h-5" />
                </motion.button>
            </SidebarFooter>
        </ShadcnSidebar>
    );
}
