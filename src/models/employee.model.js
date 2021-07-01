const { DataTypes } = require("sequelize");

module.exports = sequelize => {
    return sequelize.define("Employee", {
        lastName: {
            type: DataTypes.STRING,
            field: "last_name"
        },
        firstName: {
            type: DataTypes.STRING,
            field: "first_name"
        },
        birthDay: {
            type: DataTypes.DATE,
            field: "birth_day"
        },
        hourSalary: {
            type: DataTypes.DECIMAL(10,2),
            field: "hour_salary"
        },
        address: {
            type: DataTypes.STRING,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            field: "phone_number"
        },
        email: {
            type: DataTypes.STRING
        }
    }, {
        tableName: "employees",
        timestamps: false
    })
}