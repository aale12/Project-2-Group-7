module.exports = function(sequelize, DataTypes) {
    let Event = sequelize.define("Event", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        percentage: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    Event.associate = function(models) {
        Event.belongsTo(models.Timeline, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Event;
};
