import FilterRangeCalendar from "./FilterRangeCalendar";
import { RoomCard } from "./RoomCard";
import RoomsPagination from "./RoomsPagination";
import { useGetAllRooms } from "./useGetAllRooms";

const AllRoomCards = () => {
  const { rooms, isLoading } = useGetAllRooms();

  if (isLoading) return <div>Loading...</div>;

  console.log(rooms);

  return (
    <div className="container mx-auto px-4 mt-36  ">
      <div className="flex justify-end mb-6">
        <div className="p-4 bg-white shadow-md rounded-md w-full sm:w-auto">
          <FilterRangeCalendar />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms?.items?.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
      <RoomsPagination count={rooms ? rooms.totalCount : 0} />
    </div>
  );
};

export default AllRoomCards;
