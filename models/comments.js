module.exports = function(sequelize, DataTypes) {
    let Update = sequelize.define("Update", {
        user: DataTypes.STRING,
        editable: DataTypes.BOOLEAN,
        description: DataTypes.STRING,
        comments: DataTypes.INTEGER
    });

    Update.associate = function(models) {
        //Each Update has only One Timeline
        Update.belongsTo(models.Timeline, {
            foreignKey: {
                allowNull: false
            }
        });
        //Each Update can have many comments
        Update.hasMany(models.Comment, {
            onDelete: "cascade"
        });
    };
    return Update;
};
