const express = require("express");
const router = express.Router();
const controllers = require("../controllers/Covid");

/* GET Confirmed. */
router.get("/confirmed", controllers.getConfirmed);
router.post("/confirmed", controllers.getConfirmedByCountry);

/* GET Recoverd. */
router.get("/recovered", controllers.getRecovered);
router.post("/recovered", controllers.getRecoveredByCountry);

/* GET Deaths. */
router.get("/deaths", controllers.getDeaths);
router.post("/deaths", controllers.getDeathsByCountry);

/* GET Latest. */
router.get("/latest", controllers.getLatest);
router.post("/latest", controllers.getLatestByCountry);

module.exports = router;
