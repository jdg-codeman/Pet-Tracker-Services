
const chai = require('chai');

module.exports = function (){

    describe('RegistrationService Test', function(){

        const Registration = require('../service/Registration');

        it('Test Registration Service', function(done){

            let user = Registration.getUser(1234);

            chai.assert(user !== undefined, 'User invalid!');
        });

    });

    describe('AuthenticationService Test', function(){

        const Authentication = require('../service/Authentication');

        it('Test Authentication Service', function(done){

            let tokenId = Authentication.authenticateUser('username', 'password');

            chai.assert(tokenId !== undefined, 'TokenId invalid!');
        });

    });

};
