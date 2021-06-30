const db = require("../db");
const Client = db.clients;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    // if (!req.body.title) {
    //     res.status(400).send({
    //         message: "Content can not be empty!"
    //     });
    //     return;
    // }

    console.log("lastName > ", req.body.lastName);

    // Create a Tutorial
    const {
        lastName,
        firstName,
        birthDay,
        address,
        phoneNumber,
        email
    } = req.body;

    console.log({
        lastName,
        firstName,
        birthDay,
        address,
        phoneNumber,
        email
    });

    // Save Tutorial in the database
    Client.create({
        lastName,
        firstName,
        birthDay,
        address,
        phoneNumber,
        email
    }).then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {
    const clients = await Client.findAll();
    res.send(clients);
};

// Find a single Tutorial with an id
exports.findOne = async (req, res) => {
    const id = req.params.id;

    const client = await Client.findByPk(id);

    if (client) {
        res.send(client);
    } else {
        res.status(500).send({
            message: "Error retrieving Client with id: " + id
        });
    }
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};
