
const { Router } = require("express");
const routes = Router();

const { 
   getAllConsoles,
   setConsole
 } = require("../controllers/consola.controller"); //requiero las funciones del controlador


routes.get('/', (req,res) => {
   console.log("Si realizó la conexion");
   res.send("Si realizo la conexion");
});

routes.get("/listConsolas", getAllConsoles);

routes.post("/saveConsola",setConsole)

module.exports = routes;