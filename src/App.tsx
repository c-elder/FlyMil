import "./App.css";

import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";

import { AppSidebar } from "./components/Sidebar";
import { SidebarProvider } from "./components/ui/sidebar";
import { ACMarker, ResponseStructure } from "./components/ACMarker";
import { useState } from "react";

function App() {
  const position: LatLngExpression = [51.505, -0.09];
  const [acData, setACData] = useState<ResponseStructure[] | null>();

  function onFetchData(data: ResponseStructure[]) {
    setACData(data)
  }

  return (
    <SidebarProvider>
      <AppSidebar onFetchData={onFetchData} />
      <div id="leaflet-map" className="absolute inset-0">
        <MapContainer center={position} zoom={4}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {acData ? acData.map(item => {
            return <ACMarker key={item.r} {...item} />
          }) : null}
        </MapContainer>
      </div>
    </SidebarProvider>
  );
}

export default App;
