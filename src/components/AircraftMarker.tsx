import L, { LatLngExpression } from "leaflet";
import { Marker, Popup } from "react-leaflet";

import { AircraftDetails } from "../types/api_response";
import { getIcon } from "../utils/aircraft-icons";
import { IdentifyAircraft } from "../utils/identification";

type Props = {
  aircraft: AircraftDetails;
  setCurrAC: (ac: AircraftDetails) => void;
};

export function AircraftMarker({ aircraft, setCurrAC }: Props) {
  const position: LatLngExpression = [aircraft.lat, aircraft.lon];

  const aircraftType = IdentifyAircraft(aircraft.t);

  if (!aircraft.lat || !aircraft.lon) {
    return null;
  }

  const icon = L.divIcon({
    html: `
          <div style="transform: rotate(${aircraft.track}deg);">
            ${getIcon(aircraftType.image)}
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
