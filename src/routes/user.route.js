const {
	getAll,
	create,
	getOne,
	remove,
	update,
} = require("../controllers/user.controllers");
const express = require("express");

const userRoute = express.Router();

userRoute.route("/").get(getAll).post(create);
userRoute.route("/:id").get(getOne).delete(remove).put(update);

module.exports = userRoute;
