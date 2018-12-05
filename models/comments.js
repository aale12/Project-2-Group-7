module.exports = function(sequelize, DataTypes) {
    let Comment = sequelize.define("comment", {
        user: DataTypes.STRING,
        editable: DataTypes.BOOLEAN,
        description: DataTypes.STRING,
        comments: DataTypes.INTEGER
    });

    // Comment.associate = function(models) {
    //     //Each Comment has only One Update
    //     Comment.belongsTo(models.Event, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    return Comment;
};
