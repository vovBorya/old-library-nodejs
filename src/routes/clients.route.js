const router = require("express").Router();

module.exports = app => {
    const clientsController = require("../controllers/client.controllers");

    //CREATE
    router.post("/", clientsController.create);

    // ALL
    router.get("/", clientsController.findAll);

    //ONE
    router.get('/:id', clientsController.findOne);

    app.use("/api/clients", router);
}