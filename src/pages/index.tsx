import { LayoutDashboard, Shield, Users, Mail } from "lucide-react";
import { Navbar } from "@/shared/components";
import { Sidebar } from "@/shared/components";
import { Outlet } from "react-router";
import {
    SidebarProvider,
    SidebarTrigger,
} from "@/shared/components/ui/sidebar";

export default function HomePage() {
    return (
        <div className="bg-[#dbeafe]">
            <SidebarProvider
                style={{
                    "--sidebar-width": "20rem",
                    "--sidebar-width-mobile": "20rem",
                    "--sidebar-width-icon": "4rem",
                }}
            >
                <Sidebar
                    items={[
                        {
                            name: "Dashboard",
                            icon: LayoutDashboard,
                            path: "",
                        },
                        {
                            name: "Admins",
                            icon: Shield,
                            path: "admins",
                        },
                        {
                            name: "All members",
                            icon: Users,
                            path: "all-members",
                        },
                        {
                            name: "Message",
                            icon: Mail,
                            path: "message",
                        },
                    ]}
                />
                {/*  */}
                <main className="w-full overflow-x-scroll">
                    <Navbar />
                    <div>
                        <SidebarTrigger />
                    </div>
                    <Outlet />
                </main>
            </SidebarProvider>
        </div>
    );
}
