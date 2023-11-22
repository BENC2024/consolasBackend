
const consolaSchema = require("../models/consola.model");

const listadoConsolas = async () => {
	return await consolaSchema.find();
};

module.exports = { listadoConsolas };

