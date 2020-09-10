const { Model } = require("sequelize/types");


Model.exports = function(app) {
    app.post("api/signup"), passport.authenticate("local"), function(req, res) {
        db.user.create({
            email: req.body.username,
            password: req.body.password
        })
    }
}