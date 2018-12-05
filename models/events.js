module.exports = function(sequelize, DataTypes) {
    let Event = sequelize.define("Event", {
        user: DataTypes.STRING,
        editable: DataTypes.BOOLEAN,
        description: DataTypes.STRING,
        comments: DataTypes.INTEGER
    });

    Event.associate = function(models) {
        //Each Event has only One Timeline
        Event.belongsTo(models.Timeline, {
            foreignKey: {
                allowNull: false
            }
        });
        //Each Event can have many comments
        Event.hasMany(models.Comment, {
            onDelete: "cascade"
        });
    };
    return Event;
};
