
const { Schema, model } = require("mongoose");

const ConsolaSchema = new Schema({ 
   nombre: { type: String },
   fabricante: { type: String },
   lanzamiento: { type: String },
   almacenamiento: { type: String },
   precio: { type: Number },
   enlaceImagen: { type: String }
});

module.exports = model("consolas", ConsolaSchema, "Consolas");
//Nombre, esquema y nombre de la coleccion