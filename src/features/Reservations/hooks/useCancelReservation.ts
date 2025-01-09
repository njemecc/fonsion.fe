import toast from "react-hot-toast";
import { cancelReservationApi } from "../../../services/apiReservations"
import { useMutation, useQueryClient } from "@tanstack/react-query"


export function useCancelReservation(){

    const queryClient = useQueryClient()
    
    const {mutate : cancelReservation, isPending ,error} = useMutation({
        mutationFn: cancelReservationApi,

        onSuccess: () => {
            toast.success("Your reservation is successfully canceled.");
            queryClient.invalidateQueries({
              queryKey: ["reservations"],
            });
          },
          onError: (err) => {
            toast.error(err.message);
          },
       
    },)

    return {
        cancelReservation,isPending,error
    }
}