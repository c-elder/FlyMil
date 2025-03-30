import Fastify from "fastify";

const server = Fastify({
    logger: true
});

// route
server.get("/", async function handler (request, reply) {
    return { hello: "world"}
})


server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`)
})
