const mongoose =require("mongoose");

//creamos el modelo 
const EsquemaChistes = new mongoose.Schema({
        setup:{type:String,minlength:[10,"el chiste debe tener al menos 10 caracteres"]},
        punchline:{type:String, minlength:[3,"la linea final/remate debe tener almenos 3 caracteres"]}
});

const Bromas = mongoose.model("chistes",EsquemaChistes)

module.exports = Bromas; //exportando el objeto para los controladores


//go to controllers bro!!