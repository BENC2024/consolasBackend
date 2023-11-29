
const express = require("express");
const app = express();
const puerto = 3000;
const consolaRoutes = require("../routes/consola.routes");
const cors = require('cors');

app.use(cors()); //MUY IMPORTANTE EL ORDEN DE EJECUCION DEL USE
app.use(express.json()); // Utilice el formato json
app.use(consolaRoutes);

app.set("puerto",process.env.PORT || puerto);

module.exports = app;

