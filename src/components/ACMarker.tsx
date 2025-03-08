import { LatLngExpression } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { IdentifyAircraft, IdentifyCountry } from "../utils/identification";

export type ResponseStructure = {
    hex: string;
    type: string;
    flight: string;
    r: string;
    t: string;
    dbFlags: number;
    alt_baro: number;
    alt_geom: number;
    gs: number;
    track: number;
    baro_rate: number;
    geom_rate: number;
    squawk: string;
    emergency: string;
    category: string;
    lat: number;
    lon: number;
    nic: number;
    rc: number;
    seen_pos: number;
    version: number;
    nic_baro: number;
    nac_p: number;
    nac_v: number;
    sil: number;
    sil_type: string;
    gva: number;
    sda: number;
    alert: number;
    spi: number;
    mlat: string[];
    tisb: string[];
    messages: number;
    seen: number;
    rssi: number;
}

export function ACMarker(aircraft: ResponseStructure) {
    const position: LatLngExpression = [aircraft.lat, aircraft.lon];
    if (!aircraft.lat || !aircraft.lon) {
         return <></>
    }

    const country = IdentifyCountry(aircraft.hex);
    const typeOfAircraft = IdentifyAircraft(aircraft.t);

    return (
        <Marker position={position}>
            <Popup>
              <h2>{aircraft.flight ? aircraft.flight : "No Callsign"} - {aircraft.r ? aircraft.r : "Registration unknown"}</h2>
              <p>Country: {country}</p>
              <p>Type: {typeOfAircraft}</p>
            </Popup>
          </Marker>
    )
}