import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { Button } from "@/shared/components/ui/button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  needsPagination?: boolean,
  pagination?: {
    pageIndex: number;
    pageSize: number;
  },
  setPagination?: React.Dispatch<React.SetStateAction<{
    pageIndex: number;
    pageSize: number;
  }>>,
  pageNumber?: number
}

export function DataTable<TData, TValue>({
  columns,
  data,
  needsPagination = false,
  pagination,
  setPagination,
  pageNumber
}: DataTableProps<TData, TValue>) {

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount: pageNumber,
    rowCount: 10,
    onPaginationChange: (prop) => {
      if(setPagination) setPagination(prop);
    },
    state: {
      pagination
    }
  });


  return (
    <div className="rounded-xl overflow-hidden">
      <Table>
        <TableHeader className="bg-blue-800 rounded-md">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="hover:bg-blue-800">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="text-white py-5 mb-2 border border-gray-200 first:border-none last:border-none"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <div className="h-4"></div>
        <TableBody className=" bg-white">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="border border-gray-200 first:border-none last:border-none"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {needsPagination ? <div className="mt-4 p-2 px-4 bg-white flex items-center justify-between rounded-b-lg">
        <div>
          <p>{pagination ? pagination?.pageIndex + 1 : ""} of {pageNumber} pages</p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="bg-blue-700"
          >
            {'<'}
          </Button>
          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="bg-blue-700"
          >
            {'>'}
          </Button>
        </div>
      </div> : ""}
    </div>
  );
}
