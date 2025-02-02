import { ColumnDef } from "@tanstack/react-table";

export type Data = {
  number: number;
  serviceName: string;
};

export const columns: ColumnDef<Data>[] = [
  {
    accessorKey: "number",
    header: "",
  },
  {
    accessorKey: "serviceName",
    header: "Service Name",
  },
];
