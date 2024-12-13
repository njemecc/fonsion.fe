import { getAllRooms } from "../../services/apiRooms"
import { useQuery } from "@tanstack/react-query"


export function useGetAllRooms(){
    
    const {data : rooms, isLoading,error} = useQuery({
        queryKey:["rooms"],
        queryFn:getAllRooms
    })

    return {
        rooms,isLoading,error
    }
}