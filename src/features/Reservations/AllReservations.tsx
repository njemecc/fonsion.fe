import { useUser } from "@clerk/clerk-react";
import { columns } from "../Reservations/ReservationsTable/columns";
import { DataTable } from "../Reservations/ReservationsTable/data-table";
import { useGetReservationByUserId } from "./hooks/useGetReservationsByUserId";

export default function AllReservations() {
  const { user } = useUser();

  const { reservations, isLoading } = useGetReservationByUserId(
    //@ts-ignore
    user?.publicMetadata.userId
  );

  return (
    <div className="container mx-auto mt-36 py-10">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <DataTable columns={columns} data={reservations!} />
      )}
    </div>
  );
}
