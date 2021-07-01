const router = require("express").Router();

module.exports = (app, controller, resourceName) => {

    // CREATE
    app.post(`/api/${resourceName}/`, controller.create);

    // ALL
    app.get(`/api/${resourceName}/`, controller.findAll);

    // ONE
    app.get(`/api/${resourceName}/:id`, controller.findOne);

    // UPDATE
    app.put(`/api/${resourceName}/:id`, controller.update);

    // DELETE
    app.delete(`/api/${resourceName}/:id`, controller.delete);
};
