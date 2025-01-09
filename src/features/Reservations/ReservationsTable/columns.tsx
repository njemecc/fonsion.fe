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
import { useCancelReservation } from "../hooks/useCancelReservation";

const ReservationActions = ({ reservationId }: { reservationId: string }) => {
  const { cancelReservation } = useCancelReservation();

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
          onClick={() => navigator.clipboard.writeText(reservationId)}
        >
          Copy room name
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          {" "}
          <Button onClick={() => cancelReservation(reservationId)}>
            <MdCancel />
            Cancel reservation
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const columns: ColumnDef<GetReservationByUserIdResponse>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const reservation = row.original;
      return <ReservationActions reservationId={reservation.reservationId} />;
    },
  },

  {
    accessorKey: "images",
    header: "Images",
    cell: ({ row }) => {
      const images = row.getValue("images") as string[];
      const imageUrl = images[0];
      return (
        <div className="flex items-center justify-center">
          <img
            src={imageUrl}
            alt="Room"
            className="h-14 w-24 object-cover rounded"
          />
        </div>
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
      return <div>{formatDate(date, "dd/MM/yyyy")}</div>;
    },
  },
  {
    accessorKey: "toDate",
    header: "To Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("toDate"));
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

      return <div className=" font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      const statusClass =
        status === 0
          ? "bg-red-500 text-white" // Canceled: red
          : status === 1
          ? "bg-green-500 text-white" // Active: green
          : "bg-yellow-500 text-black"; // Pending: yellow

      const statusText =
        status === 0 ? "Canceled" : status === 1 ? "Active" : "Pending";

      return (
        <div
          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusClass}`}
        >
          {statusText}
        </div>
      );
    },
  },
];
