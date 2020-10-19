
module.exports.authenticateUser = function(username, password){

    // authenticates username and password and returns token id

    return 'NEW-TOKEN-ID';
};

module.exports.resetPassword = function(username, oldPassword, newPassword){
    //resets user password
};

module.exports.verifyUser = function(username){

    //send link to verify user
}

module.exports.validateTokenId = function(tokenId){

    //validates toke id is till active and returns basic user info
    return {
        userId: '123456',
        premium: true,
        optIn: true
    };
}

module.exports.renewTokeId = function(tokenId){

    //validates toke id is till active

    return "NEW-TOKEN-ID";
}
