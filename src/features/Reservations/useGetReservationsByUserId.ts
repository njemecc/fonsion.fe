import { getReservationsByUserIdApi } from "../../services/apiReservations"
import { useQuery } from "@tanstack/react-query"


export function useGetReservationByUserId(userId:string){
    
    const {data : reservations, isLoading,error} = useQuery({
        queryKey:["reservations",userId],
        queryFn: () => getReservationsByUserIdApi(userId),
    },)

    return {
        reservations,isLoading,error
    }
}