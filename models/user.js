"use strict";

module.exports = function(sequelize, Sequelize) {
    let User = sequelize.define("user", {
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        username: {
            type: Sequelize.TEXT
        },
        about: {
            type: Sequelize.TEXT
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        // eslint-disable-next-line camelcase
        last_login: {
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.ENUM("active", "inactive"),
            defaultValue: "active"
        }
    }); //Each User has many Timeslines, updates, and comments
    User.associate = function(models) {
        User.hasOne(models.Timeline, {
            onDelete: "cascade"
        });
        User.hasMany(models.Event, {
            onDelete: "cascade"
        });
        // User.hasMany(models.Comment, {
        //     onDelete: "cascade"
        // });
    };
    return User;
};
