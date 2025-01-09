import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { createReservationApi } from "../../../services/apiReservations";

export function useCreateReservation() {
  const queryClient = useQueryClient();

  const { mutate: createReservation, isPending: isCreating } = useMutation({
    mutationFn: createReservationApi,
    onSuccess: () => {
      toast.success("Your reservation is successfully created.");
      queryClient.invalidateQueries({
        queryKey: ["reservations"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { createReservation, isCreating };
}
