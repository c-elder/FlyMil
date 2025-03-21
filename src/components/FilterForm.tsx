import { z } from "zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { useCountryFilter } from "../hooks/useCountryFilter";
import {  API } from "../types/api_response";
import { options } from "../utils/filter-options";
import { IdentifyCountry } from "../utils/identification";
import { zodResolver } from "@hookform/resolvers/zod";

import "@radix-ui/react-select";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const schema = z.object({
  country: z.string(),
});

type FormFields = z.infer<typeof schema>;

type Props = {
  // setFilteredAC: (data: AircraftDetails[]) => void;
  data: API | undefined;
};

export function FilterForm({ data,  }: Props) {
  const { setFilter } = useCountryFilter();

  const { handleSubmit, control } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = (formData) => {
    if (data) {
      if (formData.country === "all") formData.country = "";
      setFilter(formData.country);
      data.ac.filter(
        (aircraft) => IdentifyCountry(aircraft.hex).code === formData.country,
      );
      // setFilteredAC(filteredData);
    }
  };

  const selectItems = options.map((option) => (
    <SelectItem key={option.value} value={option.value}>
      {option.label}
    </SelectItem>
  ));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-end gap-x-4 p-4"
    >
      <Controller
        control={control}
        render={({ field: { onChange } }) => (
          <Select onValueChange={onChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a country..." />
            </SelectTrigger>
            <SelectContent className="z-[9999]">
              <SelectItem value="all">All Countries</SelectItem>
              {selectItems}
            </SelectContent>
          </Select>
        )}
        name="country"
      />

      <button
        type="submit"
        className="cursor-pointer rounded-lg bg-[#4f39a2] px-4 text-white shadow transition duration-300 ease-in hover:bg-[#4f4083]"
      >
        Filter
      </button>
    </form>
  );
}
