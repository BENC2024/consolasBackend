
const {
   listadoConsolas,
   guardarConsola
} = require('../services/consola.services');

const consolaController = {}; //Creo objeto de controladores

//la peticion y respuesta
consolaController.getAllConsoles = async (req,res) => {
	 const listConsolas = await listadoConsolas(); //esperar a que la funcion asincrona se complete, trayendo los resultado del servicio
    res.json(listConsolas);
};

consolaController.setConsole = async (req,res) => {
    await guardarConsola(req.body)
    res.send("Guardado correctamente");
}

module.exports = consolaController;