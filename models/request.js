//This page finds the question type

module.exports = function (sequelize, DataTypes) {
    const Request = sequelize.define(define("Request", {
        question: {
            type: DataTypes.String,
            allowNull: false
        },
        answer: {
            type: DataTypes.String,
            allowNull: true
        },

    }))
}
// {
//     classMethods: {
//         associate: (models) => {
//             Request.belongsTo(models.User, {
//                 foriegnKey: 'user_id'
//             })
//         }
//     }
// }
return Request;