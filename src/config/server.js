
const express = require("express");
const app = express();
const puerto = 3000;
const consolaRoutes = require("../routes/consola.routes");

app.use(express.json()); // Utilice el formato json //MALDITOS PARENTESIS
app.use(consolaRoutes);

app.set("puerto",process.env.PORT || puerto);

module.exports = app;

