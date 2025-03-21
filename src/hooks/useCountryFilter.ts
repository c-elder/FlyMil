import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export function useCountryFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const country = searchParams.get("country");

  const setFilter = useCallback((country: string) => {
    setSearchParams((params) => {
      if (country !== undefined) {
        params.set("country", country);
      }

      return params;
    });
  }, []);

  return { country, setFilter };
}
