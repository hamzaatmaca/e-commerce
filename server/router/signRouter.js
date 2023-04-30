const express = require("express");
const router = express.Router();
const { createSign } = require("../controller/signController");

router.route("/").post(createSign);

module.exports = router;
