import { useSearchParams } from "react-router"
import { getAllRooms } from "../../../services/apiRooms"
import { useQuery } from "@tanstack/react-query"
import { PAGESIZE } from ".././constants";

export function useGetAllRooms(){

    const [searchParams] = useSearchParams();

    //pagination
    const page = !searchParams.get("page") ? 0 : Number(searchParams.get("page"));
    const pageSize = PAGESIZE

    //filter by dates

    const fromDate = searchParams.get("fromDate")
    const toDate = searchParams.get("toDate")

    const {data : rooms, isLoading,error} = useQuery({
        queryKey:["rooms",fromDate,toDate,page,pageSize],
        queryFn:() => getAllRooms(fromDate,toDate,page,pageSize)
    })

    return {
        rooms,isLoading,error
    }
}