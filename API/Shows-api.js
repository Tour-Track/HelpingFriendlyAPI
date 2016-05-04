const koa = require('koa');

module.exports.getAllShows = function * (next) {
    console.log(next);
  if ('POST' != this.method) return yield next;
  this.body = yield [""];
};

module.exports.getShowById = function * (next) {
    console.log(this);
  if ('GET' != this.method) return yield next;
  this.body = yield ["METHOD to DB call here"];
};

// This must be avoided, use ajax in the view.
module.exports.getSetlistsByShowId = function * (next) {
  if ('GET' != this.method) return yield next;
  this.body = yield ["Setlist for shows returned here"];
};

// router.get('/', function *(next) {  
//     title = decodeURI(title);
//   var res = yield Array.apply(null, {length: 100}).forEach( () => { console.log('logging')} )
//   this.body = res;
// });
