import { getReservedDatesApi } from "../../services/apiReservations"
import { useQuery } from "@tanstack/react-query"


export function useGetReservedDates(roomId:string){
    
    const {data : reservedDates, isLoading,error} = useQuery({
        queryKey:["reservedDates",roomId],
        queryFn: () => getReservedDatesApi(roomId),
        staleTime:0
       
    },)

    return {
        reservedDates,isLoading,error
    }
}