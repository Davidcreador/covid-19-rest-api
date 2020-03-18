"use strict";

const { Serializer } = require("jsonapi-serializer");
const utils = require("../src/utils/writer.js");
const CovidService = require("../src/service/CovidService");

module.exports.getConfirmed = function getConfirmed(req, res, next) {
  CovidService.confirmed()
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

module.exports.getConfirmedByCountry = function getConfirmed(req, res, next) {
  const { country } = req.body;
  CovidService.confirmedByCountry(country)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRecovered = function getConfirmed(req, res, next) {
  CovidService.recovered()
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRecoveredByCountry = function getConfirmed(req, res, next) {
  const { country } = req.body;
  CovidService.recoveredByCountry(country)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDeaths = function getConfirmed(req, res, next) {
  CovidService.deaths()
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDeathsByCountry = function getConfirmed(req, res, next) {
  const { country } = req.body;
  CovidService.deathsByCountry(country)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLatest = function getConfirmed(req, res, next) {
  CovidService.latest()
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      res.json({
        error: response.error
      });
    });
};

module.exports.getLatestByCountry = function getConfirmed(req, res, next) {
  const { country } = req.body;
  CovidService.latestByCountry(country)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLatestByDate = function getConfirmed(req, res, next) {
  const { date } = req.body;
  CovidService.latestByDate(date)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};
