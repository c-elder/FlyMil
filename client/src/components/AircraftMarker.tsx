import L, { LatLngExpression } from "leaflet";
import { Marker, Popup } from "react-leaflet";

import { AircraftContent } from "../types/aircraft-content";
import { AircraftDetails } from "../types/api_response";
import { IdentifyAircraft } from "../utils/identification";

type Props = {
  aircraft: AircraftDetails;
  setCurrAC: (ac: AircraftDetails) => void;
  content: AircraftContent | undefined;
};

export function AircraftMarker({ aircraft, setCurrAC, content }: Props) {
  const position: LatLngExpression = [aircraft.lat, aircraft.lon];

  if (!content) {
    return <></>;
  }

  const aircraftType = IdentifyAircraft(aircraft.t, content);

  if (!aircraft.lat || !aircraft.lon) {
    return null;
  }

  const icon = L.divIcon({
    html: `
          <div style="transform: rotate(${aircraft.track}deg);">
            <img src="${aircraftType.icon.asset.url}"/>
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
