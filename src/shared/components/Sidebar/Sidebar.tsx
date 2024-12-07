import { NavLink } from "react-router";
import { motion } from "motion/react";
import { LogOut, User } from "lucide-react";
import { Separator } from "@/shared/components/ui/separator";

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
  return (
    <aside
      className={`h-screen p-12 w-80 bg-background flex flex-col justify-between ${style}`}
    >
      <div className="">
        <h2 className="text-lg mb-8 text-gray-400">Main Menu</h2>
        <div className="text-gray-500 text-xl flex flex-col gap-2">
          {items.map((item) => {
            return (
              <NavLink key={item.name} to={item.path}>
                {({ isActive }) => (
                  <motion.div
                    className={`w-56 px-4 py-3 flex gap-2 items-center `}
                    layout
                    initial={false}
                    animate={
                      isActive
                        ? {
                            color: "rgb(29 78 216)",
                            backgroundColor: "rgb(219 234 254)",
                            borderLeftColor: "rgb(29 78 216)",
                            borderLeftWidth: "4px",
                          }
                        : {
                            backgroundColor: "transparent",
                            borderLeftColor: "transparent",
                            borderLeftWidth: "0px",
                          }
                    }
                    whileHover={
                      !isActive
                        ? {
                            color: "rgb(29 78 216)",
                            backgroundColor: "rgb(219 234 254)",
                            borderLeftColor: "rgb(29 78 216)",
                            borderLeftWidth: "4px",
                          }
                        : {}
                    }
                  >
                    <item.icon className="w-6" />
                    <span className="justify-end">{item.name}</span>
                  </motion.div>
                )}
              </NavLink>
            );
          })}
          <Separator />
          <NavLink to="my-profile">
            {({ isActive }) => (
              <motion.div
                className={`w-56 px-4 py-3 flex gap-2 items-center `}
                layout
                initial={false}
                animate={
                  isActive
                    ? {
                        color: "rgb(29 78 216)",
                        backgroundColor: "rgb(219 234 254)",
                        borderLeftColor: "rgb(29 78 216)",
                        borderLeftWidth: "4px",
                      }
                    : {
                        backgroundColor: "transparent",
                        borderLeftColor: "transparent",
                        borderLeftWidth: "0px",
                      }
                }
                whileHover={
                  !isActive
                    ? {
                        color: "rgb(29 78 216)",
                        backgroundColor: "rgb(219 234 254)",
                        borderLeftColor: "rgb(29 78 216)",
                        borderLeftWidth: "4px",
                      }
                    : {}
                }
              >
                <User className="w-6" />
                <span className="justify-end">My Profile</span>
              </motion.div>
            )}
          </NavLink>
        </div>
      </div>
      <div>
        <motion.button
          className="flex gap-1 items-center text-gray-500"
          whileHover={{ color: "hsl(var(--destructive))", x: 4 }}
        >
          <span>LogOut</span>
          <LogOut className="h-5" />
        </motion.button>
      </div>
    </aside>
  );
}
