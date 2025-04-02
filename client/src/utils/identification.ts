import { AircraftContent } from "../types/aircraft-content";
import { countryCodes } from "./country-codes";

export function IdentifyCountry(hexCode: string) {
  return countryCodes[hexCode.substring(0, 3).toUpperCase()] || "UNKNOWN";
}

export function IdentifyAircraft(type: string, content: AircraftContent) {
  const aircraftMatch = content.find((element) => element.code === type);
  return (
    aircraftMatch || {
      name: "UNKNOWN",
      type: "UNKNOWN",
      icon: { asset: { _id: "UNKNOWN", url: "/ARROW.png" } },
    }
  );
}
