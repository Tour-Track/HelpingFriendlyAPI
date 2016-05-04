const {Shows} = require('../db.js');

var ShowsModel = module.exports = {

    getAllShows: function () {
        return Shows.find();
    },
    getShowById: function (id) {
        return Shows.find({id});
    }
}