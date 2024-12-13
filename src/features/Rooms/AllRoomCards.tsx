import { RoomCard } from "./RoomCard";
import { useGetAllRooms } from "./useGetAllRooms";

const AllRoomCards = () => {
  const { rooms, isLoading } = useGetAllRooms();

  isLoading && <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
      {rooms?.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
};

export default AllRoomCards;
