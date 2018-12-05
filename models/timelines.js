module.exports = function(sequelize, DataTypes) {
    let Timeline = sequelize.define("timeline", {
        user: DataTypes.STRING,
        public: DataTypes.BOOLEAN,
        editable: DataTypes.BOOLEAN,
        description: DataTypes.STRING,
        events: DataTypes.INTEGER
    });

    // Timeline.associate = function(models) {
    //     //Each Timeline will belong to 1 User
    //     // Timeline.belongsTo(models.User, {
    //     //     foreignKey: {
    //     //         allowNull: false
    //     //     }
    //     // });
    //     //Each Timeline has many Updates
    //     Timeline.hasMany(models.Event, {
    //         onDelete: "cascade"
    //     });
    // };
    return Timeline;
};
