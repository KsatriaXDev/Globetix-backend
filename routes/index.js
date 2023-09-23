const { Router } = require("express");
const router = Router();

const regionRoutes = require("./regions.routes");
const destinationsRoutes = require("./destinations.routes");

const routes = [regionRoutes, destinationsRoutes];
routes.forEach((route) => router.use("/api", route));

module.exports = router;
