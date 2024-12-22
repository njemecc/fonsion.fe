import * as z from "zod";

const guestCompanioScheme = z.object({
    firstName : z.string(),
    lastName: z.string()
})

export const createReservationFormValidationScheme = z.object({

    fromDate : z.date({
        required_error:"Start date is required"
    }),
    toDate: z.date({
        required_error:"End date is required"
    }),
    guestCompanions: z.array(guestCompanioScheme).optional(),
    promoCodeId: z.string().optional(),
  
  });
