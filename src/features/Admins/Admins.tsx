import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/shared/components/ui/tabs";
import { DataTable } from "@/shared/components/DataTable/DataTable";
import { columns as ServiceColumns } from "./components/ServicesColumns";
import { columns as ConfessionFatherColumns } from "./components/ConfessionFatherColumns";
import AddStudent from "@/features/AddStudent/Addstudent";
import AddConfession from "@/features/Confession/AddConfession/AddConfession";
import useGetConfessionFathers from "@/shared/hooks/useGetConfessionFathers";
import useGetService from "@/shared/hooks/useGetService";

export default function Admins() {
    const { isPending, error, data } = useGetConfessionFathers();
    const {
        isPending: isServicePending,
        error: serviceError,
        data: serviceData,
    } = useGetService();

    return (
        <Tabs
            defaultValue="account"
            className="container mx-auto pt-10 pb-12 px-8 space-y-6"
        >
            <TabsList className="bg-white h-12 p-2">
                <TabsTrigger
                    value="account"
                    className="text-base data-[state=active]:bg-blue-700 data-[state=active]:text-white"
                >
                    Add Member
                </TabsTrigger>
                <TabsTrigger
                    value="password"
                    className="text-base data-[state=active]:bg-blue-700 data-[state=active]:text-white"
                >
                    View Members
                </TabsTrigger>
            </TabsList>
            <div className="grid lg:grid-cols-2 items-start justify-stretch gap-6">
                <div className="">
                    <TabsContent value="account">
                        <AddStudent />
                    </TabsContent>
                    <TabsContent value="password">
                        {isServicePending ? (
                            "Pending"
                        ) : serviceError ? (
                            "Error"
                        ) : (
                            <DataTable
                                columns={ServiceColumns}
                                data={serviceData}
                            />
                        )}
                    </TabsContent>
                </div>
                <div className="">
                    <TabsContent value="account">
                        <AddConfession />
                    </TabsContent>
                    <TabsContent value="password">
                        {isPending ? (
                            "Pending"
                        ) : error ? (
                            "Error"
                        ) : (
                            <DataTable
                                columns={ConfessionFatherColumns}
                                data={data}
                            />
                        )}
                    </TabsContent>
                </div>
            </div>
        </Tabs>
    );
}
