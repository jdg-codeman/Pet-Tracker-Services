

module.exports.get = function(context){

    const {userId, premium, trackerId, startDate, endDate} = context;

    //Verify user
    //if NOT premium then reset the query to last 24 hours

    return getTrackList(trackerId, startDate, endDate);

};

module.exports.getTrackList = function(trackerId, startDate, endDate){

    return [
        {
            timestamp: 1603001321290,
            latitude: 44.968046,
            longitude: -94.420307
        },
        {
            timestamp: 1603001321290,
            latitude: 44.968046,
            longitude: -94.420307
        },
        {
            timestamp: 1603001321290,
            latitude: 44.968046,
            longitude: -94.420307
        },
        {
            timestamp: 1603001321290,
            latitude: 44.968046,
            longitude: -94.420307
        },
        {
            timestamp: 1603001321290,
            latitude: 44.968046,
            longitude: -94.420307
        },
        {
            timestamp: 1603001321290,
            latitude: 44.968046,
            longitude: -94.420307
        },
        {
            timestamp: 1603001321290,
            latitude: 44.968046,
            longitude: -94.420307
        },
    ];
};
