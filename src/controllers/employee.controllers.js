const db = require("../db");
const Employee = db.employee;

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
        hourSalary,
        phoneNumber,
        email
    } = req.body;

    Employee.create({
        lastName,
        firstName,
        birthDay,
        address,
        hourSalary,
        phoneNumber,
        email
    }).then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Employee."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {
    const employee = await Employee.findAll();
    res.send(employee);
};

// Find a single Tutorial with an id
exports.findOne = async (req, res) => {
    const id = req.params.id;

    const employee = await Employee.findByPk(id);

    if (employee) {
        res.send(employee);
    } else {
        res.status(500).send({
            message: "Error retrieving Employee with id: " + id
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
        hourSalary,
        phoneNumber,
        email
    } = req.body;

    Employee.update({
        lastName,
        firstName,
        birthDay,
        address,
        hourSalary,
        phoneNumber,
        email
    }, {
        where: { id }
    }).then(async () => {
        const employee = await Employee.findByPk(id);
        res.send(employee);
    }).catch(() => {
        res.send({
            message: `Cannot update Employee with id=${id}. Maybe Employee was not found!`
        })
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = async (req, res) => {
    const id = req.params.id;

    const num = await Employee.destroy({where: {id}});

    if (num == 1) {
        res.send({id});
    } else {
        res.send({
            message: `Cannot delete Employee with id=${id}. Maybe Employee was not found!`
        });
    }
};
