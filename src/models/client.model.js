const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("Client", {
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
        tableName: "clients",
        timestamps: false
    });
};