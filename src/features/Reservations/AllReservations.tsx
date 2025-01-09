import { columns } from "../Reservations/ReservationsTable/columns";
import { DataTable } from "../Reservations/ReservationsTable/data-table";
import { useGetReservationByUserId } from "./hooks/useGetReservationsByUserId";

export default function AllReservations() {
  const { reservations, isLoading } = useGetReservationByUserId(
    "6c96ade0-6e3c-4de3-bd0f-6c09b863a3c4"
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
