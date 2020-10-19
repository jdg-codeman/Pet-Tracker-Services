
const Authentication = require('../../../service/Authentication');


module.exports = function(app) {


    app.post('/', function(req, res, next) {

        let token = Authentication.authenticateUser(req.body.username, req.body.password);

        res.json({token});
    });

    //API for Reset Password

    //API for validate Token Id


};
