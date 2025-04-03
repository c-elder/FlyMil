import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "uskyu13n",
  dataset: "production",
  apiVersion: "2025-04-02",
  useCdn: true,
});
