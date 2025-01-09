
import axios from "axios";
import { ErrorOrResponse } from "../types/globalTypes";
import { backendUrl } from "./backendUrl";
import { CreateReservationRequestDto, GetReservationByUserIdResponse } from "../features/Reservations/reservationTypes";


export async function cancelReservationApi(reservationId:string):Promise<ErrorOrResponse<string>> {

  const response = await axios.get<ErrorOrResponse<string>>(`${backendUrl}/api/reservation/cancelReservation/${reservationId}`)

  if (response.data.isError) {
    const errorMessage =
      response.data.firstError?.code || "Unknown error occurred";
    throw new Error(errorMessage);
  }

  if (response.data.value) {
    return response.data;
  }

  throw new Error("Unexpected response format")
}

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

    export async function getReservedDatesApi (roomId:string) :Promise<Array<string>>{

        const response = await axios.get<ErrorOrResponse<Array<string>>>(`${backendUrl}/api/reservation/occupied-dates/${roomId}`)

        if (response.data.isError) {
            const errorMessage =
              response.data.firstError?.description || "Unknown error occurred";
            throw new Error(errorMessage);
          }
      
          if (response.data.value) {
            return response.data.value;
          }
      
          throw new Error("Unexpected response format");
    }


    export async function getReservationsByUserIdApi(userId: string): Promise<Array<GetReservationByUserIdResponse>> {
      const response = await axios.get<ErrorOrResponse<Array<GetReservationByUserIdResponse>>>(`${backendUrl}/api/reservation/getByUser/${userId}`);
    
      if (response.data.isError) {
        const errorMessage = response.data.firstError?.description || "Unknown error occurred";
        throw new Error(errorMessage);
      }
    
      if (response.data.value) {
        return response.data.value;
      }
    
      throw new Error("Unexpected response format");
    }

