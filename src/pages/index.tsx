import { LayoutDashboard, Shield, Users, Mail } from "lucide-react";
import { Navbar } from "@/shared/components";
import { Sidebar } from "@/shared/components";
import { Outlet } from "react-router";

export default function HomePage() {
    return (
        <div className="bg-[#dbeafe]">
            <Navbar style="fixed left-0 right-0 top-0 z-10" />
            <main className="flex h-screen">
                <Sidebar
                    items={[
                        {
                            name: "Dashboard",
                            icon: LayoutDashboard,
                            path: "dashboard",
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
                    style="pt-32"
                />
                <div className="w-full overflow-y-scroll">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
