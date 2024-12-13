import { CardBody, CardContainer, CardItem } from "../../ui/3d-card";
import { IoPeopleSharp } from "react-icons/io5";
import { Room } from "./types";
import { MdNightlight } from "react-icons/md";

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {room.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {room.desc}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={room.imageUrls[0]}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <div className="flex items-center gap-1 space-x-1 ">
              <MdNightlight />
              {`$${room.pricePerNight.toFixed()}`}
            </div>

            <div className="flex items-center gap-1 space-x-1">
              <IoPeopleSharp />
              {`${room.capacity}`}
            </div>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Reserve
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}