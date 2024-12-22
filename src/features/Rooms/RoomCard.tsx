import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import { IoPeopleSharp } from "react-icons/io5";
import { Room } from "./roomTypes";
import { MdNightlight } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { DialogHeader } from "../../components/ui/dialog";
import CreateReservationForm from "../Reservations/CreateReservationForm";

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <CardContainer className="inter-var ">
      <CardBody className="bg-appNavy relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white dark:text-white"
        >
          {room.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {room.description}
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
        <div className=" text-white flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <div className="flex items-center gap-1 space-x-1 ">
              <MdNightlight className="text-appBrown" />
              {`$${room.pricePerNight.toFixed()}`}
            </div>

            <div className="flex items-center gap-1 space-x-1">
              <IoPeopleSharp className="text-appBrown" />
              {`${room.capacity}`}
            </div>
          </CardItem>
          <Dialog>
            <DialogTrigger>
              <a
                className="
                px-4
                py-2
                rounded-xl
                bg-appBrown
                dark:bg-white
                dark:text-black
                text-white
                text-xs
                font-bold"
              >
                Reserve
              </a>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Reserve {room.name} Room</DialogTitle>
                <DialogDescription>{room.description}</DialogDescription>
              </DialogHeader>
              <img
                src={room.imageUrls[0]}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
              <CreateReservationForm room={room} />
            </DialogContent>
          </Dialog>
        </div>
      </CardBody>
    </CardContainer>
  );
}
