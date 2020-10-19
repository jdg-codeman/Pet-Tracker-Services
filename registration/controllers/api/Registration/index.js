
const Registration = require('../../../service/Registration');

module.exports = function(app) {


    app.get('/:userId', function(req, res, next) {

        let user = Registration.getUser(req.param.userId);

        res.json({user});
    });

    //API for createUser

    //API for updateUser

    //API for Delete/Disable user
};
