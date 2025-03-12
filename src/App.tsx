import "./App.css";

import { LatLngExpression } from "leaflet";
import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import { ACMarker } from "./components/ACMarker";
import { InfoBar } from "./components/InfoBar";
import { AppSidebar } from "./components/Sidebar";
import { SidebarProvider } from "./components/ui/sidebar";
import { APIResponse } from "./types/api_response";

function App() {
  const position: LatLngExpression = [51.505, -0.09];
  const [acData, setACData] = useState<APIResponse[] | null>();

  function onFetchData(data: APIResponse[]) {
    setACData(data);
  }

  return (
    <SidebarProvider>
      <AppSidebar onFetchData={onFetchData} />
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
          {acData
            ? acData.map((item) => {
                return <ACMarker key={item.r} {...item} />;
              })
            : null}
          <InfoBar />
        </MapContainer>
      </div>
    </SidebarProvider>
  );
}

export default App;
