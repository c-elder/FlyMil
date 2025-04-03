import { config } from "../../config.ts";
import { API } from "../types/api_response.ts";

export async function fetchAircraftData(): Promise<API> {
  const URL = config.url;

  const response = await fetch(`${URL}/aircraft`);

  if (!response.ok) {
    throw new Error(`[ADSB] Error: ${response.status}`);
  }
  return response.json();
}
