const express = require("express");
const router = express.Router();

const products = require("./productRouter");

//middleware
router.use("/productos", products);

module.exports = router;

