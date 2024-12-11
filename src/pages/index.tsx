import { LayoutDashboard, Shield, Users, Mail } from "lucide-react";
import { Navbar } from "@/shared/components";
import { Sidebar } from "@/shared/components";
import Warning from "@/features/Warning/Warning";
import Filter from "@/features/Filter/Filter";
// import Footer from "@/features/UpdateStudent/components/Footer";
// import UpdateStudent from "@/features/UpdateStudent/Update";
import DetailInfo from "@/features/DetailInfo/DetailInfo";
import Dashboard from "@/features/dashboard/Dashboard";
// import AddStudent from "@/features/AddStudent/Addstudent";

export default function HomePage() {
  return (
    <div className="bg-[#dbeafe]">
      {/*  */}
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
        {/* <Dashboard/> */}
        {/* <AddStudent/> */}
        {/* <DetailInfo /> */}
        {/* <Warning /> */}
        <Filter />
        {/* <UpdateStudent /> */}
      </main>
    </div>
  );
}
