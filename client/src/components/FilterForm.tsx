import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { useCountryFilter } from "../hooks/useCountryFilter";
import { API } from "../types/api_response";
import { options } from "../utils/filter-options";

import "@radix-ui/react-select";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type FormFields = { country: string };

type Props = {
  data: API | undefined;
};

export function FilterForm({ data }: Props) {
  const { setFilter } = useCountryFilter();

  const { handleSubmit, control } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (formData) => {
    if (data) {
      if (formData.country === "all") formData.country = "";
      setFilter(formData.country);
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
      className="flex justify-end gap-x-4"
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
