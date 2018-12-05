module.exports = function(sequelize, DataTypes) {
    let Event = sequelize.define("event", {
        user: DataTypes.STRING,
        editable: DataTypes.BOOLEAN,
        description: DataTypes.STRING,
        comments: DataTypes.INTEGER
    });

    // Event.associate = function(models) {
    //     //Each Event has only One Timeline
    //     // Event.hasOne(models.Timeline, {
    //     //     foreignKey: {
    //     //         allowNull: false
    //     //     }
    //     // });
    //     //Each Event can have many comments
    //     Event.hasMany(models.Comment, {
    //         onDelete: "cascade"
    //     });
    // };
    return Event;
};
