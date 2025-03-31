const prod = {
  url: "https://example.com",
};

const dev = {
  url: "http://localhost:3000",
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
