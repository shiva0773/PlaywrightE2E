// testSetup.js

const loginpega = require('./POM/Login.js');
const data = require('./Data/Pega.json');
const selectbeverage = require('./POM/Selectbeverage.js');
const placeorder = require('./POM/placeorder.js');
const billinginfo = require('./POM/Billing_Address.js');
const cardinfo = require('./POM/Card_Details.js');
require('dotenv').config();

const today = new Date().toISOString().slice(0, 10);

module.exports = {
  loginpega,
  data,
  selectbeverage,
  placeorder,
  billinginfo,
  cardinfo,
  today
};
