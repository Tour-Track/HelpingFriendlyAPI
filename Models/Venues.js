const {Venues} = require('../db.js');

var VenuesModel = module.exports = {

    getAllVenues: function () {
        console.log(Venues.find());
        return Venues.find();
    }
}