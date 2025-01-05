import { Payment, columns } from "../Reservations/ReservationsTable/columns";
import { DataTable } from "../Reservations/ReservationsTable/data-table";

function getData(): Payment[] {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];
}

export default function AllReservations() {
  const data = getData();

  return (
    <div className="container mx-auto mt-36 py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
