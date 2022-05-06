const Bromas = require("../models/chistes.models"); //importacion del modelo del projecto

//retorna la lista de bromas/chistes
module.exports.findAlljokes = (req,res)=>{
        Bromas.find()
            .then(allBromas => res.json({chiste: allBromas}))
            .catch(err => res.json({message:"algo salio mal"+err}));
};

module.exports.findOneJoke=(req,res)=>{
        Bromas.findOne({_id:req.params.id})
            .then(broma => res.json({chiste:broma}))
            .catch(err => res.json({message:"algo malio sal"+err}));
}

// Devolver un chiste random.
module.exports.findOneRandom = (req,res) => {
    Bromas.aggregate([{ $sample: { size: 1 } }])
        .then(broma => res.json({chiste: broma}))
        .catch(err => res.json({message: "Hubo un error"+err}));
}

module.exports.createJoke =(req,res) =>{
        Bromas.create(req.body)
            .then(broma => res.json({chiste:broma}))
            .catch(err => res.json({message:"algo malio sal " +err}));
}

module.exports.updateJokes = (req,res)=>{
        Bromas.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
            .then(broma => res.json({chiste:broma}))
            .catch(err=> res.json({menssage:"hubo un error"+err}));
}

module.exports.deleteJokes = (req,res)=>{
    Bromas.deleteOne({_id:req.params.id},req.body)
        .then(result =>res.json({result:result}))
        .catch(err =>res.json({message:"hubo un error"+err}))
}
//go  to routes ---------->