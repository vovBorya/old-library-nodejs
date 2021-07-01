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

    const {
        lastName,
        firstName,
        birthDay,
        address,
        phoneNumber,
        email
    } = req.body;

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
exports.update = async (req, res) => {
    const id = req.params.id;

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

    Client.update({
        lastName,
        firstName,
        birthDay,
        address,
        phoneNumber,
        email
    }, {
        where: { id }
    }).then(async () => {
        const client = await Client.findByPk(id);
        res.send(client);
    }).catch(() => {
        res.send({
            message: `Cannot update Client with id=${id}. Maybe Client was not found!`
        })
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = async (req, res) => {
    const id = req.params.id;

    const num = await Client.destroy({where: {id}});

    console.log({num});
    if (num === 1) {
        res.send({id});
    } else {
        res.send({
            message: `Cannot delete Client with id=${id}. Maybe Client was not found!`
        });
    }
};
