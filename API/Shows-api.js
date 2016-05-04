const koa = require('koa');
const ShowsModel = require("../Models/Shows.js")

module.exports.getAllShows = function * (next) {
  if ('GET' != this.method) return yield next;
  this.body = yield ShowsModel.getAllShows();
};

module.exports.getShowById = function * (next) {
  if ('GET' != this.method) return yield next;
  this.body = yield ShowsModel.getShowById(+this.params.id);
};

// This must be avoided, use ajax in the view.
module.exports.getSetlistsByShowId = function * (next) {
  if ('GET' != this.method) return yield next;
  this.body = yield ["Setlist for shows returned here"];
};
