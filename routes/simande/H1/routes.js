const express = require("express");
const app = express();

const Customer = require("../../../application/controllers/H1/CustomerController");
const Stnk = require("../../../application/controllers/H1/StnkController");
// const Stnk = require("../../../application/controllers/H1/stnk");


app.use("/tes", Customer);
app.use("/api/stnkbpkb", Stnk);

module.exports = app;
