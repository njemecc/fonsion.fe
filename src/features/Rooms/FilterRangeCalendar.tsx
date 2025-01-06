import { useState } from "react";
import { useSearchParams } from "react-router";
import { Calendar } from "../../components/ui/calendar";

const FilterRangeCalendar = () => {
  const [selectedRange, setSelectedRange] = useState<{
    fromDate: Date | null;
    toDate: Date | null;
  }>({
    fromDate: null,
    toDate: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const handleDateRangeChange = (range: {
    fromDate: Date | null;
    toDate: Date | null;
  }) => {
    const params = new URLSearchParams(searchParams.toString());

    if (range.fromDate) {
      params.set("fromDate", range.fromDate.toISOString()); // Puni ISO format
    } else {
      params.delete("fromDate");
    }

    if (range.toDate) {
      params.set("toDate", range.toDate.toISOString());
    } else {
      params.delete("toDate");
    }

    setSearchParams(params); // Ažurira query string
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;

    if (
      !selectedRange.fromDate ||
      (selectedRange.fromDate && selectedRange.toDate)
    ) {
      setSelectedRange({ fromDate: date, toDate: null });
    } else if (date < selectedRange.fromDate) {
      setSelectedRange({ fromDate: date, toDate: selectedRange.fromDate });
    } else {
      const newRange = { ...selectedRange, toDate: date };
      setSelectedRange(newRange);
      handleDateRangeChange(newRange);
    }
  };

  const isInRange = (date: Date) => {
    const { fromDate, toDate } = selectedRange;
    return !!fromDate && !!toDate && date >= fromDate && date <= toDate;
  };

  return (
    <div className="p-4 bg-white rounded-md ">
      <Calendar
        mode="single"
        selected={selectedRange.fromDate || undefined}
        onSelect={handleDateSelect}
        modifiers={{
          selectedRange: isInRange,
        }}
        modifiersClassNames={{
          selected: "bg-blue-500 text-white",
          selectedRange: "bg-blue-100 text-blue-500",
        }}
      />
    </div>
  );
};

export default FilterRangeCalendar;
