const express = require("express");
const cors = require("cors");

require("dotenv").config();

const db = require("./src/db");
const CRUDRouter = require("./src/CRUDRouter");

const clientController = require("./src/controllers/client.controllers");
const employeeController = require("./src/controllers/employee.controllers");
const fineController = require("./src/controllers/fine.controllers");

const port = process.env.PORT || 3000;

const app = express();

const corsOptions = {
    origin: `http://localhost:${port}`
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// app.use(express.bodyParser());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync();

CRUDRouter(app, employeeController, "employees");
CRUDRouter(app, clientController, "clients");
CRUDRouter(app, fineController, "fines");

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
