import { ColumnDef } from "@tanstack/react-table";
import {
    DetailInfoHeader,
    DetailInfoBody,
    DetailInfoFooter,
} from "@/features/DetailInfo/DetailInfo";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";

export type Data = {
    id: string;
    uid: string;
    first_name: string;
    last_name: string;
    fullName: string;
    baptismal_name: string;
    gender: string;
    student_id: string;
    department: string;
    service: { id: string; name: string }[];
    language: { id: string; name: string }[];
    current_year: string;
    password: string;
    confession: string;
    role: string;
    phone_number: string;
    phoneNumber: string;
    email: string;
};
export const columns: ColumnDef<Data>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "fullName",
        header: "Full Name",
    },
    {
        accessorKey: "gender",
        header: "Gender",
    },
    {
        accessorKey: "phoneNumber",
        header: "Phone Number",
    },
    {
        accessorKey: "department",
        header: "Department",
    },
    {
        accessorKey: "role",
        header: "Role",
    },
    {
        id: "actions",
        cell: (props) => {
            return (
                <Dialog>
                    <DialogTrigger className="px-4 py-2 rounded-md bg-white border text-black border-blue-200 hover:text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-1">
                        More
                    </DialogTrigger>
                    <DialogContent className="p-0 overflow-hidden">
                        <DialogHeader className="px-6 py-4 bg-bg_login">
                            <DetailInfoHeader />
                        </DialogHeader>
                        <DialogDescription>
                            <div className="p-6">
                                <DetailInfoBody
                                    studentDetail={props.row.original}
                                />
                            </div>
                        </DialogDescription>

                        <DialogFooter className="px-6 py-4 bg-bg_login">
                            <DetailInfoFooter
                                studentId={props.row.original.uid}
                            />
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            );
        },
        header: "Action",
    },
];
