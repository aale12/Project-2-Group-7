module.exports = function(sequelize, DataTypes) {
    let Timeline = sequelize.define("Timeline", {
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        public: {
            allowNull: false,
            defaultValue: true,
            type: DataTypes.BOOLEAN
        },
        editable: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        description: {
            allowNull: false,
            type: DataTypes.STRING
        },
        timelimit: {
            defaultValue: 0,
            type: DataTypes.INTEGER
        },
        timelimitCheck: {
            defaultValue: 0,
            type: DataTypes.INTEGER
        },
        // eslint-disable-next-line camelcase
        events_count: {
            defaultValue: 0,
            allowNull: false,
            type: DataTypes.INTEGER
        }
    });

    Timeline.associate = function(models) {
        //Each Timeline will belong to 1 User
        Timeline.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
        //Each Timeline has many Events
        Timeline.hasMany(models.Event, {
            as: "events",
            foreignKey: "userId",
            targetKey: "userId",
            onDelete: "cascade"
        });
    };
    return Timeline;
};
