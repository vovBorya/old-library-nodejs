const { DataTypes } = require("sequelize");

module.exports = sequelize => {
    return sequelize.define("Fine", {
        termDaysCount: {
            type: DataTypes.INTEGER,
            field: "term_days_count"
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            field: "amount"
        }
    }, {
        tableName: "fines",
        timestamps: false
    })
}