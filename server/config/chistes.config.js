const mongoose = require("mongoose");// guarda la coneccion

mongoose.connect("mongodb://0.0.0.0:27017/chistes",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=> console.log("Conexion con DB"))
    .catch(err => console.log("Algo malio sal :c no se pudo conectar con la DB "+err));

    
// go to Controllers 