"use strict";
const axios = require("axios");
const csv = require("csvtojson/v2");

const BASE_PATH_URL =
  "https://raw.githubusercontent.com/CSSEGISandData/2019-nCoV/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-";
const BASE_DAILY_PATH_URL =
  "https://raw.githubusercontent.com/CSSEGISandData/2019-nCoV/master/csse_covid_19_data/csse_covid_19_daily_reports/";

const categories = {
  CONFIRMED: "Confirmed",
  RECOVERED: "Recovered",
  DEATHS: "Deaths"
};

/**
 * Get Confirmed cases
 **/
exports.confirmed = async function() {
  const res = await axios.get(`${BASE_PATH_URL}${categories.CONFIRMED}.csv`);
  const jsonArray = await csv().fromString(res.data);

  return jsonArray;
};

/**
 * Get Latest cases
 **/
exports.confirmedByCountry = async function(country) {
  const res = await axios.get(`${BASE_PATH_URL}${categories.CONFIRMED}.csv`);
  const jsonArray = await csv().fromString(res.data);

  const records = jsonArray.filter(entry => {
    return entry["Country/Region"] === country;
  });

  return records;
};

/**
 * Get Death cases
 **/
exports.deaths = async function(petId, api_key) {
  const res = await axios.get(`${BASE_PATH_URL}${categories.DEATHS}.csv`);
  const jsonArray = await csv().fromString(res.data);

  return jsonArray;
};

/**
 * Get Latest cases
 **/
exports.deathsByCountry = async function(country) {
  const res = await axios.get(`${BASE_PATH_URL}${categories.DEATHS}.csv`);
  const jsonArray = await csv().fromString(res.data);

  const records = jsonArray.filter(entry => {
    return entry["Country/Region"] === country;
  });

  return records;
};

/**
 * Get Latest cases
 **/
exports.latest = async function(today) {
  try {
    const res = await axios.get(`${BASE_DAILY_PATH_URL}${today}.csv`);
    const jsonArray = await csv().fromString(res.data);

    return jsonArray;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Get Latest cases
 **/
exports.latestByCountry = async function(country) {
  const today = getTodayDateMMDDYYYY();
  const res = await axios.get(`${BASE_DAILY_PATH_URL}${today}.csv`);

  const jsonArray = await csv().fromString(res.data);

  const records = jsonArray.filter(entry => {
    return entry["Country/Region"] === country;
  });

  return records;
};

/**
 * Get Latest cases
 **/
exports.latestByDate = async function(date) {
  const res = await axios.get(`${BASE_DAILY_PATH_URL}${date}.csv`);

  console.log(res);

  const jsonArray = await csv().fromString(res.data);

  return jsonArray;
};

/**
 * Get Recovered cases
 **/
exports.recovered = async function(petId, api_key) {
  const res = await axios.get(`${BASE_PATH_URL}${categories.RECOVERED}.csv`);
  const jsonArray = await csv().fromString(res.data);

  return jsonArray;
};

/**
 * Get Latest cases
 **/
exports.recoveredByCountry = async function(country) {
  const res = await axios.get(`${BASE_PATH_URL}${categories.RECOVERED}.csv`);
  const jsonArray = await csv().fromString(res.data);

  const records = jsonArray.filter(entry => {
    return entry["Country/Region"] === country;
  });

  return records;
};
