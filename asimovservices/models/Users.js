'use strict';
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        usersid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING
        },
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.ENUM('0', '1', '2', '3')
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    return Users;
};