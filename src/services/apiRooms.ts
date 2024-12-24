
import { Room } from "../features/Rooms/roomTypes";
import axios from "axios"
import { ErrorOrResponse } from "../types/globalTypes";
import { backendUrl } from "./backendUrl";


export async function getAllRooms(fromDate:string | null,toDate:string | null):Promise<Room[]>{

    const response = await axios.get<ErrorOrResponse<Room[]>>(`${backendUrl}/api/room/${fromDate}/${toDate}`)
    

    if (response.data.isError) {
        const errorMessage =
          response.data.firstError?.description || "Unknown error occurred";
        throw new Error(errorMessage);
      }
  
      if (response.data.value) {
        return response.data.value;
      }
  
      throw new Error("Unexpected response format");
    };




