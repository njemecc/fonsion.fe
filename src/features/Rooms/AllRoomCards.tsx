import FilterRangeCalendar from "./FilterRangeCalendar";
import { RoomCard } from "./RoomCard";
import { useGetAllRooms } from "./useGetAllRooms";

const AllRoomCards = () => {
  const { rooms, isLoading } = useGetAllRooms();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 mt-8">
      {/* Sekcija za filter */}
      <div className="flex justify-end mb-6">
        <div className="p-4 bg-white shadow-md rounded-md w-full sm:w-auto">
          <FilterRangeCalendar />
        </div>
      </div>

      {/* Sekcija za kartice */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms?.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default AllRoomCards;
