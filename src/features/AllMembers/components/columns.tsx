import { ColumnDef } from "@tanstack/react-table";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/shared/components/ui/dialog";
import {
  DetailInfoHeader,
  DetailInfoBody,
  DetailInfoFooter,
} from "@/features/DetailInfo/DetailInfo";

export type Data = {
  id: string;
  fullName: string;
  gender: string;
  phoneNumber: string;
  department: string;
  role: string;
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
    cell: () => {
      return (
        <Dialog>
          <DialogTrigger className="px-4 py-2 rounded-md bg-white border text-black border-blue-200 hover:text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-1">
            More
          </DialogTrigger>
          <DialogContent className="p-0 overflow-hidden">
            <DialogHeader className="px-6 py-4 bg-bg_login">
              <DetailInfoHeader />
            </DialogHeader>
            <div className="p-6">
              <DetailInfoBody />
            </div>
            <DialogFooter className="px-6 py-4 bg-bg_login">
              <DetailInfoFooter />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    },
    header: "Action",
  },
];
