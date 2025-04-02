import { AircraftContent } from "../types/aircraft-content";
import { AircraftDetails } from "../types/api_response";
import { IdentifyAircraft, IdentifyCountry } from "../utils/identification";
import { Badge } from "./ui/badge";

type Props = {
  aircraft: AircraftDetails;
  content: AircraftContent | undefined;
};

export function InfoBar({ aircraft, content }: Props) {
  const country = IdentifyCountry(aircraft.hex);
  if (!content) return <></>;
  const aircraftType = IdentifyAircraft(aircraft.t, content);

  return (
    <div className="font-inter absolute bottom-0 left-1/2 right-1/2 z-[9999] w-full -translate-x-1/2 transform text-left md:w-fit">
      <div className="flex-col gap-x-12 rounded-xl bg-[#4f39a2] md:flex">
        <div className="p-4">
          <div className="flex items-center gap-x-2">
            <h3 className="text-2xl font-bold text-white">
              {aircraft.flight?.trim().length > 0 ? aircraft.flight : "UNKNOWN"}
            </h3>
            <Badge variant="default" className="h-4 rounded bg-[#7353e9] p-2">
              {aircraft.r?.trim().length > 0 ? aircraft.r : "UNKNOWN"}
            </Badge>
            <Badge className="h-4 rounded bg-[#d1d1d1] p-2 text-[#222222]">
              {aircraftType.name?.toUpperCase() || "UNKNOWN"}
            </Badge>
          </div>
          <p className="text-gray-300">
            MILITARY / GOVERNMENT OF{" "}
            {country.country?.toUpperCase() || "UNKNOWN"}
          </p>
        </div>
        <div className="gap-x- divide-x-1 flex whitespace-nowrap bg-white p-4 md:p-6">
          <div className="flex-col gap-x-2 pr-2">
            <p className="text-slate-500">Type:</p>
            <p className="mr-4 pb-2 font-semibold text-gray-800 md:text-base">
              {aircraftType.type.toUpperCase()}
            </p>
            <p className="text-slate-500">Ground Speed:</p>
            <p className="mr-4 pb-2 font-semibold text-gray-800 md:text-base">
              {aircraft.gs?.toString().length > 1
                ? `${aircraft.gs}  kts`
                : "N/A"}
            </p>
            <p className="text-slate-500">True Airspeed:</p>
            <p className="pb-2 font-semibold text-gray-800 md:text-base">
              {aircraft.tas ? `${aircraft.tas} kts` : "N/A"}
            </p>
          </div>

          <div className="flex-col gap-x-2 pl-4 pr-2 md:pl-6">
            <p className="text-slate-500">Indicated Speed:</p>
            <p className="pb-2 font-semibold text-gray-800 md:text-base">
              {aircraft.ias ? `${aircraft.ias} kts` : "N/A"}
            </p>
            <p className="text-slate-500">Baro. Altitude:</p>
            <p className="pb-2 font-semibold text-gray-800 md:text-base">
              {aircraft.alt_baro ? `${aircraft.alt_baro} ft` : "N/A"}
            </p>
            <p className="text-slate-500">Position (lat, lon):</p>
            <p className="pb-2 font-semibold text-gray-800 md:text-base">
              {aircraft.lon
                ? `${aircraft.lat.toFixed(3)}, ${aircraft.lon.toFixed(3)}`
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
