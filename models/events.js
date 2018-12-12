module.exports = function(sequelize, DataTypes) {
    let Event = sequelize.define("Event", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        editable: {
            type: DataTypes.BOOLEAN,
            default: true,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
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
