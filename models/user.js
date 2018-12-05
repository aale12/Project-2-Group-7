module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("user", {
        username: DataTypes.STRING,
        password: DataTypes.STRING
    });
    //Each User has many Timeslines, updates, and comments
    User.associate = function(models) {
        User.hasMany(models.Timeline, {
            onDelete: "cascade"
        });
        User.hasMany(models.Event, {
            onDelete: "cascade"
        });
        User.hasMany(models.Comment, {
            onDelete: "cascade"
        });
    };
    return User;
};
