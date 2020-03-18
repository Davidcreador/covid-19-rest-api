"use strict";
require("@babel/core");
require("dotenv").config();

const fs = require("fs");
const path = require("path");
const Cors = require("cors");
const logger = require("morgan");
const swaggerUi = require("swagger-ui-express");
const express = require("express");
const redis = require("redis");
const routes = require("./src/routes");
const { name, version, description } = require("./package.json");

const app = express();
const jsyaml = require("js-yaml");
const serverPort = process.env.API_PORT || 5000;

// create and connect redis client to local instance.
const client = redis.createClient(6379);

// echo redis errors to the console
client.on("error", err => {
  console.log("Error " + err);
});

app.use(express.json());
app.use(logger("dev"));
app.use(
  Cors({
    origin:
      process.env.NODE_ENV === "DEVELOPMENT"
        ? "http://localhost:3000"
        : "https://covid-19-data.now.sh"
  })
);

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
const spec = fs.readFileSync(
  path.join(__dirname, "src/api/swagger.yaml"),
  "utf8"
);
const swaggerDoc = jsyaml.safeLoad(spec);

app.get("/swagger.json", function(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerDoc);
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get("/", (req, res, next) => {
  const response = {
    version: version,
    api: "OK",
    endpoints: {
      confirmed: {
        method: "GET"
      },
      "confirmed/:country": {
        method: "POST",
        body: {
          country: "YOUR COUNTRY"
        }
      },
      "confirmed/:date": {
        method: "POST",
        body: {
          date: "YOUR DATE"
        }
      },
      recovered: {
        method: "GET"
      },
      "recovered/:country": {
        method: "POST",
        body: {
          country: "YOUR COUNTRY"
        }
      },
      "recovered/:date": {
        method: "POST",
        body: {
          date: "YOUR DATE"
        }
      },
      deaths: {
        method: "GET"
      },
      "latest/:country": {
        method: "POST",
        body: {
          country: "YOUR COUNTRY"
        }
      },
      "deaths/:date": {
        method: "POST",
        body: {
          date: "YOUR DATE"
        }
      },
      latest: {
        method: "GET"
      },
      "latest/:country": {
        method: "POST",
        body: {
          country: "YOUR COUNTRY"
        }
      },
      "latest/:date": {
        method: "POST",
        body: {
          date: "YOUR DATE"
        }
      }
    }
  };
  res.send(response);
});

// APP ROUTES
app.use("/", routes);

// Start the server
console.log("<--------- YOU ARE RUNNING ON --------->", process.env.NODE_ENV);
app.listen(serverPort, function() {
  console.log(
    "Your server is listening on port %d (http://localhost:%d)",
    serverPort,
    serverPort
  );
  console.log(
    "Swagger-ui is available on http://localhost:%d/api-docs",
    serverPort
  );
});
