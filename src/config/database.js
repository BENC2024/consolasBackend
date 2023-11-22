
const mongoose = require("mongoose");

//Para conocer si existe o no la conexion la base de datos
mongoose.connect("mongodb://127.0.0.1:27017/ConsolaGames")
   .then(() => {
      console.log("Conexion exitosa de la base de datos");
   })
   .catch((e) => {
      console.log("No se pudo conectar a la base de datos: " + e);
   });

