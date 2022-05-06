const express = require("express");
const app = express();

//Inicializa BD
require("./server/config/chistes.config");

//Para usar Json y obtener datos de url
app.use(express.json(),express.urlencoded({extended:true}));

const misRutas = require("./server/routes/chistes.routes");

misRutas(app);

//Ejecutamos el server
app.listen(8000,() => console.log("Servidor Listo ;) "));
