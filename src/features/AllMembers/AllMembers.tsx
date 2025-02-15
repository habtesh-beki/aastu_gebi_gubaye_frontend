import { columns } from "@/features/AllMembers/components/columns";
import { DataTable } from "@/shared/components/DataTable/DataTable";
import { FilterMembers } from "./components/FilterMembers";

import useGetStudents from "@/shared/hooks/useGetStudents";

export default function AllMembers() {
    const { isPending, error, data } = useGetStudents();

    return (
        <div className="container mx-auto pt-32 pb-12 px-8 space-y-12">
            <FilterMembers />
            {isPending ? (
                <div className="w-full py-6 text-center bg-white rounded-xl overflow-hidden">
                    Loading Student Data
                </div>
            ) : !error ? (
                <DataTable columns={columns} data={data} />
            ) : (
                <div className="w-full py-6 text-center bg-white rounded-xl overflow-hidden">
                    {error.toString()}
                </div>
            )}
        </div>
    );
}
