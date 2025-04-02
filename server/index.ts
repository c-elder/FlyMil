import Fastify from "fastify";

import cors from "@fastify/cors";

import "dotenv/config";

import { config } from "./config";

const server = Fastify({
  logger: true,
});

const URL = config.url;

server.register(cors, {
  origin: URL,
  methods: ["GET"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
});

server.get("/aircraft", async function getAircraft(request, reply) {
  const apiKey = process.env.API_KEY;
  console.log(`API KEY: ${apiKey}`);
  const url = "https://adsbexchange-com1.p.rapidapi.com/v2/mil/";

  if (!apiKey) {
    throw new Error(
      "API key is undefined. Please set the API_KEY environment variable.",
    );
  }

  const options: RequestInit = {
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
});

const start = async () => {
  try {
    await server.listen({ port: 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
