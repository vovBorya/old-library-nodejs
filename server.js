const express = require("express");
const cors = require("cors");

require("dotenv").config();

const db = require("./src/db");
const clientsRouter = require("./src/routes/clients.route");

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

clientsRouter(app);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
