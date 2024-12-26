
import { Room } from "../features/Rooms/roomTypes";
import axios from "axios"
import { ErrorOrResponse, PaginatedResult } from "../types/globalTypes";
import { backendUrl } from "./backendUrl";


export async function getAllRooms(fromDate:string | null,toDate:string | null, page: number = 0, pageSize: number = 5):Promise<PaginatedResult<Room>>{

 const params = new URLSearchParams()

 if (fromDate) params.append("fromDate", fromDate);
 if (toDate) params.append("toDate", toDate);
 params.append("page", page.toString());
 params.append("pageSize", pageSize.toString());

    const response = await axios.get<ErrorOrResponse<PaginatedResult<Room>>>(`${backendUrl}/api/room`,{params})
    

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




