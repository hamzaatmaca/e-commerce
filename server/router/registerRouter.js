const express = require("express");
const router = express.Router();
const { createRegister } = require("../controller/registerController");

router.route("/").post(createRegister);

module.exports = router;
