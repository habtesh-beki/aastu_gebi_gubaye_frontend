import { ColumnDef } from "@tanstack/react-table";

export type Data = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
};

export const columns: ColumnDef<Data>[] = [
    {
        accessorKey: "firstName",
        header: "Confession Father Name",
    },
    {
        accessorKey: "lastName",
        header: "Last Name",
    },
    {
        accessorKey: "phoneNumber",
        header: "Phone Number",
    },
];
