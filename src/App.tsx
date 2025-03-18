import "./App.css";

import { LatLngExpression } from "leaflet";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import { AircraftMarker } from "./components/AircraftMarker";
import { InfoBar } from "./components/InfoBar";
import { AircraftDetails, API } from "./types/api_response";

function App() {
  const position: LatLngExpression = [51.505, -0.09];
  const [currAC, setCurrAC] = useState<AircraftDetails | null>();

  const { data } = useQuery({
    queryKey: ["aircraftData"],
    queryFn: fetchAPI,
    staleTime: 300000,
    refetchInterval: 300000,
  });

  return (
    <div id="leaflet-map" className="absolute inset-0">
      <MapContainer
        center={position}
        zoom={4}
        minZoom={3}
        maxBounds={[
          [-180, -180],
          [180, 180],
        ]}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap={true}
          bounds={[
            [-180, -180],
            [180, 180],
          ]}
        />

        {data
          ? data.ac.map((item) => {
              return (
                <AircraftMarker
                  key={item.lat}
                  aircraft={item}
                  setCurrAC={setCurrAC}
                />
              );
            })
          : null}

        {currAC && <InfoBar aircraft={currAC} />}
      </MapContainer>
    </div>
  );
}

async function fetchAPI(): Promise<API> {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = "https://adsbexchange-com1.p.rapidapi.com/v2/mil/";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "adsbexchange-com1.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
}

export default App;
