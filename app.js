const express = require("express");
const app = express();

//importo el router (index.js)
const router = require("./routes") 

let PORT = 8080;

//middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

//creo el servidor
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando el puerto: ${server.address().port}`);
});

server.on("error", (error) => `El servidor a tenido un error:${error}`);