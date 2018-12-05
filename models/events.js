module.exports = function(sequelize, DataTypes) {
    let Update = sequelize.define("Update", {
        user: DataTypes.STRING,
        editable: DataTypes.BOOLEAN,
        description: DataTypes.STRING,
        comments: DataTypes.INTEGER
    });

    Update.associate = function(models) {
        Update.belongsTo(models.Timeline, {
            foreignKey: {
                allowNull: false
            }
        });
        Update.hasMany(models.Comment, {
            onDelete: "cascade"
        });
    };
    return Update;
};
