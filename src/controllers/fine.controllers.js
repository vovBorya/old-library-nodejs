const db = require("../db");
const Fines = db.fines;


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
        termDaysCount,
        amount
    } = req.body;

    Fines.create({
        termDaysCount,
        amount
    }).then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Fine."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {
    const fines = await Fines.findAll();
    res.send(fines);
};

// Find a single Tutorial with an id
exports.findOne = async (req, res) => {
    const id = req.params.id;

    const fines = await Fines.findByPk(id);

    if (fines) {
        res.send(fines);
    } else {
        res.status(500).send({
            message: "Error retrieving Fine with id: " + id
        });
    }
};

// Update a Tutorial by the id in the request
exports.update = async (req, res) => {
    const id = req.params.id;

    const {
        termDaysCount,
        amount
    } = req.body;

    Fines.update({
        termDaysCount,
        amount
    }, {
        where: { id }
    }).then(async () => {
        const fines = await Fines.findByPk(id);
        res.send(fines);
    }).catch(() => {
        res.send({
            message: `Cannot update Fine with id=${id}. Maybe Fine was not found!`
        })
    });
};

// Delete a Fine with the specified id in the request
exports.delete = async (req, res) => {
    const id = req.params.id;

    const num = await Fines.destroy({where: {id}});

    if (num === 1) {
        res.send({id});
    } else {
        res.send({
            message: `Cannot delete Fine with id=${id}. Maybe Fine was not found!`
        });
    }
};
