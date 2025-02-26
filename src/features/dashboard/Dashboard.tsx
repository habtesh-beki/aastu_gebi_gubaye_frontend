import { ScrollArea } from "@/shared/components/ui/scroll-area";
import { DepartmentChart } from "./components/departmentChart";
import { YearChart } from "./components/currentYearChart";
import { ServiceChart } from "./components/serviceChart";
import { Header } from "./components/statesChart";

export default function Dashboard() {
    return (
        <ScrollArea className="mt-36 ml-10 mr-10 w-11/12 mb-5">
            <Header />
            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5">
                <DepartmentChart />
                <ServiceChart />
            </div>

            <YearChart />
        </ScrollArea>
    );
}
