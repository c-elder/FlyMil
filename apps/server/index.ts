import Fastify from "fastify";

import cors from "@fastify/cors";

import "dotenv/config";

import { config } from "./config";
import * as redis from "redis";

const server = Fastify({});

const URL = config.url;

const redisClient = redis.createClient();
redisClient.on("error", (err) => console.log("Redis Client Error", err));

server.register(cors, {
  origin: URL,
  methods: ["GET"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
});

server.get("/aircraft", async function getAircraft(request, reply) {
  if (await redisClient.exists("aircraft")) {
    const data = await redisClient.get("aircraft");
    if (data) {
      return data;
    }
  } else {
    const apiKey = process.env.API_KEY;
    const url = "https://adsbexchange-com1.p.rapidapi.com/v2/mil/";

    if (!apiKey) {
      throw new Error(
        "API key is undefined... Please set the API_KEY environment variable."
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

    const responseData = await response.json();

    redisClient.setEx("aircraft", 60 * 15, JSON.stringify(responseData));

    return responseData;
  }
});

const start = async () => {
  try {
    await server.listen({ port: 3000 });
    await redisClient.connect();
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
