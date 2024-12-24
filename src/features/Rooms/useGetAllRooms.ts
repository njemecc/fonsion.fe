import { useSearchParams } from "react-router"
import { getAllRooms } from "../../services/apiRooms"
import { useQuery } from "@tanstack/react-query"


export function useGetAllRooms(){

    const [searchParams] = useSearchParams();

    const fromDate = searchParams.get("fromDate")
    const toDate = searchParams.get("toDate")

    console.log(fromDate, toDate)
    
    const {data : rooms, isLoading,error} = useQuery({
        queryKey:["rooms",fromDate,toDate],
        queryFn:() => getAllRooms(fromDate,toDate)
    })

    return {
        rooms,isLoading,error
    }
}