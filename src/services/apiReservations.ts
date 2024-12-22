
import axios from "axios";
import { ErrorOrResponse } from "../types/globalTypes";
import { backendUrl } from "./backendUrl";
import { CreateReservationRequestDto } from "../features/Reservations/reservationTypes";


export async function createReservationApi(request:CreateReservationRequestDto):Promise<string>{

    const response = await axios.post<ErrorOrResponse<string>>(`${backendUrl}/api/reservation`,request)
    

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




