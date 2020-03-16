const express = require("express");
const router = express.Router();
const controllers = require("../controllers/Covid");
const { name, version, description } = require("../package.json");

router.get("/", function(req, res, next) {
  res.json({
    version: version,
    api: "OK",
    endpoints: {
      confirmed: {
        GET: "/confirmed",
        POST: {
          route: "/confirmed",
          body: {
            country: "YOUR COUNTRY"
          }
        }
      },
      recovered: {
        GET: "/recovered",
        POST: {
          route: "/recovered",
          body: {
            country: "YOUR COUNTRY"
          }
        }
      },
      deaths: {
        GET: "/deaths",
        POST: {
          route: "/deaths",
          body: {
            country: "YOUR COUNTRY"
          }
        }
      },
      latest: {
        GET: "/latest",
        POST: {
          route: "/latest",
          body: {
            country: "YOUR COUNTRY"
          }
        }
      }
    }
  });
});

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
