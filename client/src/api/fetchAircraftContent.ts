import { client } from "../../sanity";
import { AircraftContent } from "../types/aircraft-content";

export async function fetchAircraftContent(): Promise<AircraftContent> {
  const response = await client.fetch(`*[_type == "aircraft"]{
        name,
        code,
        type,
        manufacturer,
        icon{
            asset->{
            _id,
            url},    
        },}`);

  return response;
}
