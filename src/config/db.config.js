const { DB, HOST, PASSWORD } = process.env;

module.exports = {
    DB,
    HOST,
    USER: "root",
    PASSWORD,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
