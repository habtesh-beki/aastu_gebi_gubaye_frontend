import { LayoutDashboard, Shield, Users, Mail } from "lucide-react";
import { Navbar } from "@/shared/components";
import { Sidebar } from "@/shared/components";
import Dashboard from "@/features/dashboard/Dashboard";
// import AddStudent from "@/features/AddStudent/Addstudent";


export default function HomePage() {
  return (
    <div className="bg-[#ECF2FF]">
      <Navbar style="fixed left-0 right-0 top-0" />
      <main className="flex h-screen">
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
        <Dashboard/>
        {/* <AddStudent/> */}
      </main>
    </div>
  );
}
