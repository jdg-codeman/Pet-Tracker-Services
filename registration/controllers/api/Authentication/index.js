
const Authentication = require('../../../service/Authentication');


module.exports = function(app) {


    app.post('/', function(req, res, next) {

        let token = Authentication.authenticateUser(req.body.username, req.body.password);

        res.json({token});
    });


    app.get('/:username', function(req, res, next) {

        Authentication.verifyUser(req.params.username);

        res.json({username: req.params.username, verified: true});
    });

    //API for Reset Password

    //API for validate Token Id


};
