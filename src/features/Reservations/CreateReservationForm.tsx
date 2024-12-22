import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { createReservationFormValidationScheme } from "../../lib/validations/reservations/createReservationFormValidation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { CalendarIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { Calendar } from "../../components/ui/calendar";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Room } from "../Rooms/roomTypes";
import { useCreateReservation } from "./useCreateReservation";
import { useEffect, useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";

interface CreateReservationFormProps {
  room: Room;
}

const CreateReservationForm = ({ room }: CreateReservationFormProps) => {
  const form = useForm<z.infer<typeof createReservationFormValidationScheme>>({
    resolver: zodResolver(createReservationFormValidationScheme),
  });

  const { createReservation, isCreating } = useCreateReservation();

  const [totalPrice, setTotalPrice] = useState(0);

  const fromDate = form.watch("fromDate");
  const toDate = form.watch("toDate");

  useEffect(() => {
    if (fromDate && toDate) {
      const diffTime = Math.abs(toDate.getTime() - fromDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setTotalPrice(diffDays * room.pricePerNight);
    } else {
      setTotalPrice(0);
    }
  }, [fromDate, toDate, room.pricePerNight]);

  const onSubmit = (
    values: z.infer<typeof createReservationFormValidationScheme>
  ) => {
    createReservation({
      userId: "6c96ade0-6e3c-4de3-bd0f-6c09b863a3c4",
      roomId: room.id,
      ...values,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fromDate"
          render={({ field }) => (
            <FormField
              control={form.control}
              name="fromDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>From</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className="bg-white border border-gray-200 shadow-md rounded-lg p-0 w-auto"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="toDate"
          render={({ field }) => (
            <FormField
              control={form.control}
              name="toDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>To</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className="bg-white border border-gray-200 shadow-md rounded-lg p-0 w-auto"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="guestCompanions"
          render={({ field }) => (
            <FormItem className="space-y-4">
              <FormLabel>Other Guests </FormLabel>
              {Array.from({ length: room.capacity - 1 }, (_, index) => (
                <div key={index} className="flex gap-4">
                  <FormControl>
                    <Input
                      placeholder={`First Name ${index + 1}`}
                      {...form.register(`guestCompanions.${index}.firstName`)}
                    />
                  </FormControl>
                  <FormControl>
                    <Input
                      placeholder={`Last Name ${index + 1}`}
                      {...form.register(`guestCompanions.${index}.lastName`)}
                    />
                  </FormControl>
                </div>
              ))}
              <FormDescription>
                Add the details of each companion.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="promoCodeId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Promo Code</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>If you have it.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold text-gray-800">{`Total price: $${totalPrice}`}</p>
          <DialogClose disabled={!form.formState.isValid}>
            <Button
              type="submit"
              className="ml-auto"
              disabled={!form.formState.isValid || isCreating}
            >
              {isCreating ? "Creating..." : "Submit"}
            </Button>
          </DialogClose>
        </div>
      </form>
    </Form>
  );
};

export default CreateReservationForm;
