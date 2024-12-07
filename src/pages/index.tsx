import { LayoutDashboard, Shield, Users, Mail } from "lucide-react";
import { Navbar } from "@/shared/components";
import { Sidebar } from "@/shared/components";

export default function HomePage() {
  return (
    <div className="bg-[#ECF2FF]">
      <Navbar style="fixed left-0 right-0 top-0" />
      <main>
        <Sidebar
          items={[
            {
              name: "Dashboard",
              icon: LayoutDashboard,
              path: "/dashboard",
            },
            {
              name: "Admins",
              icon: Shield,
              path: "/admins",
            },
            {
              name: "All members",
              icon: Users,
              path: "/all-members",
            },
            {
              name: "Message",
              icon: Mail,
              path: "/message",
            },
          ]}
          style="pt-32"
        />
      </main>
    </div>
  );
}
