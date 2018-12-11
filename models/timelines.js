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
            type: DataTypes.STRING
        },
        timelimit: {
            defaultValue: 0,
            type: DataTypes.INTEGER
        },
        events: {
            default: 0,
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
        //Each Timeline has many Updates
        // Timeline.hasMany(models.Event, {
        //     onDelete: "cascade"
        // });
    };
    return Timeline;
};
