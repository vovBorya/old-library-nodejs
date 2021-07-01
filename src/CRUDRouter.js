const router = require("express").Router();

module.exports = (app, controller, resourceName) => {

    // CREATE
    router.post("/", controller.create);

    // ALL
    router.get("/", controller.findAll);

    // ONE
    router.get('/:id', controller.findOne);

    // UPDATE
    router.put("/:id", controller.update);

    // DELETE
    router.delete("/:id", controller.delete);

    app.use(`/api/${resourceName}`, router);
};
