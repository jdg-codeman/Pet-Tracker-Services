
const chai = require('chai');

module.exports = function (){

    describe('Tracking Data Consumer Test', function(){

        const TrackingData = require('../service/TrackingData');

        it('Test TrackingData Service', function(done){

            let list = TrackingData.get({userId: 1234});

            chai.assert(list !== undefined, 'List invalid!');
        });

    });

};
