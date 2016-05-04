const {Venues} = require('../db.js');

var VenuesModel = module.exports = {

    getAllVenues: function () {
        return Venues.find();
    },
    getVenueById: function (id) {
        return Venues.find({id});
    }
}