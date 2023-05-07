const catchError = require("../utils/catchError");
const User = require("../models/User");

const getAll = catchError(async (req, res) => {
	const users = await User.findAll();
	return res.json(users);
});
const create = catchError(async (req, res) => {
	const { firs_name, last_name, email, password, birthday } = req.body;
	const user = await User.create({
		firs_name,
		last_name,
		email,
		password,
		birthday,
	});
	return res.status(201).json(user);
});
const getOne = catchError(async (req, res) => {
	const { id } = req.params;
	const user = await User.findByPk(id);
	return res.json(user);
});
const remove = catchError(async (req, res) => {
	const { id } = req.params;
	const user = await User.destroy({ where: { id } });
	return res.sendStatus(204);
});
const update = catchError(async (req, res) => {
	const { id } = req.params;
	const { firs_name, last_name, email, password, birthday } = req.body;

	const user = await User.update(
		{
			firs_name,
			last_name,
			email,
			password,
			birthday,
		},
		{
			where: { id },
			returning: true,
		}
	);

	if (!user) {
		return res.status(404).json({ message: "Cliente no encontrado" });
	}

	return res.status(200).json({ message: "Cliente actualizado" });
});

module.exports = {
	getAll,
	create,
	getOne,
	remove,
	update,
};
