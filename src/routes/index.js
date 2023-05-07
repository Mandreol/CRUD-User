const express = require("express");
const router = express.Router();
const userRoutes = require("./user.route");

// colocar las rutas aquí
router.use("/user", userRoutes);

module.exports = router;
