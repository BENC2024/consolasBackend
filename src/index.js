
const server = require("./config/server");

require("./config/database");

//Conexion con el puerto
const handle = server.get("puerto");

server.listen(handle, ()=>{
	console.log("Conexion con el puerto ",handle);
});

