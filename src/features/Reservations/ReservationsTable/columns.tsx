import { ColumnDef } from "@tanstack/react-table";
import { MdCancel } from "react-icons/md";

import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { GetReservationByUserIdResponse } from "../reservationTypes";
import { formatDate } from "date-fns";

export const columns: ColumnDef<GetReservationByUserIdResponse>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const reservation = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(reservation.roomName)
              }
            >
              Copy room name
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <MdCancel /> Cancel reservation
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: "roomName",
    header: "Room",
  },
  {
    accessorKey: "fromDate",
    header: "From Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("fromDate"));
      return <div>{formatDate(date, "dd/MM/yyyy")}</div>; // Custom format like "DD/MM/YYYY"
    },
  },
  {
    accessorKey: "toDate",
    header: "To Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("fromDate"));
      return <div>{formatDate(date, "dd/MM/yyyy")}</div>;
    },
  },
  {
    accessorKey: "totalPrice",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },

    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalPrice"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];
