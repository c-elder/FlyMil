import L, { LatLngExpression } from "leaflet";
import { Marker, Popup } from "react-leaflet";

import { APIResponse } from "../types/api_response";
import { IdentifyAircraft, IdentifyCountry } from "../utils/identification";

export function ACMarker(aircraft: APIResponse) {
  const position: LatLngExpression = [aircraft.lat, aircraft.lon];
  if (!aircraft.lat || !aircraft.lon) {
    return <></>;
  }

  const country = IdentifyCountry(aircraft.hex);
  const aircraftType = IdentifyAircraft(aircraft.t);
  const icon = L.divIcon({
    html: `
          <div style="transform: rotate(${180 + aircraft.track}deg);">
            <svg width="32" height="32">
                <defs>
                    <image width="25" height="25" id="img1" href="../../../../public/aircraft-pointer.svg"/>
              </defs>
                <use id="" href="#img1" x="4" y="4"/>
            </svg>
          </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    className: "",
  });

  return (
    <Marker position={position} icon={icon} alt={aircraft.flight}>
      <Popup>
        <h2>
          {aircraft.flight ? aircraft.flight : "No Callsign"}
          {aircraft.r ? aircraft.r : "Registration unknown"}
        </h2>
        <p>Country: {country}</p>
        <p>Make & Model: {aircraftType.name}</p>
        <p>Type: {aircraftType.type}</p>
      </Popup>
    </Marker>
  );
}
