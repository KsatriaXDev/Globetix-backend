const { Router } = require("express");
const { regionControllers } = require("../controllers");
const router = Router();

router.get("/region", regionControllers.getAll);

module.exports = router;
