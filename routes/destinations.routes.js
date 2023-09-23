const { Router } = require("express");
const { destinationControllers } = require("../controllers");
const router = Router();

router.get("/destinations", destinationControllers.getAll);

module.exports = router;
