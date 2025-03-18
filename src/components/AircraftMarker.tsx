import L, { LatLngExpression } from "leaflet";
import { Marker, Popup } from "react-leaflet";

import { AircraftDetails } from "../types/api_response";

type Props = {
  aircraft: AircraftDetails;
  setCurrAC: (ac: AircraftDetails) => void;
};

export function AircraftMarker({ aircraft, setCurrAC }: Props) {
  const position: LatLngExpression = [aircraft.lat, aircraft.lon];

  if (!aircraft.lat || !aircraft.lon) {
    return null;
  }

  const icon = L.divIcon({
    html: `
          <div style="transform: rotate(${180 + aircraft.track}deg);">
            <svg width="32" height="32">
                <defs>
                    <image width="25" height="25" id="img1" href="/aircraft-pointer.svg"/>
              </defs>
                <use id="" href="#img1" x="4" y="4"/>
            </svg>
          </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    className: "",
  });

  return (
    <Marker
      position={position}
      icon={icon}
      alt={aircraft.flight}
      eventHandlers={{
        click: () => {
          setCurrAC(aircraft);
        },
      }}
    >
      <Popup closeButton={false}>
        <h2 className="text-center text-xs">
          {aircraft.flight || "No Callsign"}
        </h2>
      </Popup>
    </Marker>
  );
}
