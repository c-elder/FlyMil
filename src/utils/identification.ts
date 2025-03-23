import { aircraftTypes } from "./aircraft-details";
import { countryCodes } from "./country-codes";

export function IdentifyCountry(hexCode: string) {
  return countryCodes[hexCode.substring(0, 3).toUpperCase()] || "UNKNOWN";
}

export function IdentifyAircraft(type: string) {
  return aircraftTypes[type] || { name: "UNKNOWN", type: "UNKNOWN" };
}
