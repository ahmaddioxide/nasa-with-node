const http = require("http");

const PORT = process.env.PORT || 8000;

const app = require("./app");

const { loadPlanetData } = require("./models/planets.model");

const server = http.createServer(app);


async function startServer() {
  await loadPlanetData();
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();