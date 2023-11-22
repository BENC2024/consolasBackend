
const consolaSchema = require("../models/consola.model");

const listadoConsolas = async () => {
	return await consolaSchema.find();
};

const guardarConsola = async (consola) => {
   let nuevaConsola = new consolaSchema(consola);
   return await nuevaConsola.save();
 };

module.exports = { listadoConsolas };

