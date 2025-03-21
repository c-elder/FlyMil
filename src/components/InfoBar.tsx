import { AircraftDetails } from "../types/api_response";
import { IdentifyAircraft, IdentifyCountry } from "../utils/identification";

type Props = {
  aircraft: AircraftDetails;
};

export function InfoBar({ aircraft }: Props) {
  const country = IdentifyCountry(aircraft.hex);
  const aircraftType = IdentifyAircraft(aircraft.t);

  return (
    <div className="absolute right-1/2 bottom-0 left-1/2 z-[9999] w-full -translate-x-1/2 transform flex-col gap-x-12 rounded-xl border-t border-r border-l border-slate-300 bg-white p-4 text-left shadow-2xl md:bottom-4 md:flex md:w-3/5">
      <h3 className="mb-1 text-base md:text-lg">Aircraft Info</h3>
      <div className="flex divide-x-1">
        <div className="flex-col first:pr-4">
          <p className="md:text-base">Callsign:</p>
          <p className="pb-2 text-slate-500">{aircraft.flight || "Unknown"}</p>
          <p className="md:text-base">Registration:</p>
          <p className="pb-2 text-slate-500">{aircraft.r}</p>
          <p className="md:text-base">Country of Registration:</p>
          <p className="text-slate-500">{country.country}</p>
        </div>

        <div className="flex-col px-4">
          <p className="md:text-base">Aircraft Manufacturer:</p>
          <p className="pb-2 text-slate-500">
            {aircraftType.manufacturer || "Unknown"}
          </p>
          <p className="md:text-base">Aicraft Model:</p>
          <p className="pb-2 text-slate-500">{aircraftType.name}</p>
          <p className="md:text-base">Aircraft Type:</p>
          <p className="text-slate-500">{aircraftType.type}</p>
        </div>

        <div className="flex-col px-4">
          <p className="md:text-base">Ground Speed:</p>
          <p className="pb-2 text-slate-500">{aircraft.gs} kts</p>
          <p className="md:text-base">True Airspeed:</p>
          <p className="pb-2 text-slate-500">
            {aircraft.tas ? `${aircraft.tas} kts` : "N/A"}
          </p>
          <p className="md:text-base">Indicated Airspeed:</p>
          <p className="text-slate-500">
            {aircraft.ias ? `${aircraft.ias} kts` : "N/A"}
          </p>
        </div>

        <div className="flex-col last:pl-4">
          <p className="md:text-base">Baro Altitude:</p>
          <p className="pb-2 text-slate-500">
            {aircraft.alt_baro ? `${aircraft.alt_baro} ft` : "N/A"}
          </p>
          <p className="md:text-base">Track:</p>
          <p className="pb-2 text-slate-500">
            {aircraft.track ? `${aircraft.track} degrees` : "N/A"}
          </p>
          <p className="md:text-base">Position:</p>
          <p className="text-slate-500">
            {aircraft.lon ? `${aircraft.lat}, ${aircraft.lon}` : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
