import { ScrollArea } from "@/shared/components/ui/scroll-area";
import { DepartmentChart } from "./components/departmentChart";
import { YearChart } from "./components/currentYearChart";
import { ServiceChart } from "./components/serviceChart";
import { Header } from "./components/statesChart";

export default function Dashboard() {
    return (
        <ScrollArea className="flex justify-center items-center  mb-5  w-full">
            <div className="m-4">
                <Header />
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5">
                    <DepartmentChart />
                    <ServiceChart />
                </div>
                <YearChart />
            </div>
        </ScrollArea>
    );
}
