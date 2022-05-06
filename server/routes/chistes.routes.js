const chistesController = require("../controllers/chistes.controllers");

//rutas
module.exports = app =>{
    app.get("/api/jokes",chistesController.findAlljokes)
    app.get("/api/jokes/random",chistesController.findOneRandom)
    app.get("/api/jokes/:id",chistesController.findOneJoke)
    app.post("/api/jokes/new",chistesController.createJoke)
    app.put("/api/jokes/update/:id",chistesController.updateJokes)
    app.delete("/api/jokes/delete/:id",chistesController.deleteJokes)
}