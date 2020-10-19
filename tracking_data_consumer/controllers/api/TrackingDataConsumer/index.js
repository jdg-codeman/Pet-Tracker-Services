
const TrackingData = require('../../../service/TrackingData');

module.exports = function(app) {


    app.get('/:userId', function(req, res, next) {

        let list = TrackingData.get(req.param);

        res.json({list});
    });

    //OTHER APIs here

};
