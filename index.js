const koa = require('koa');
const router = require('koa-router')();
const app = module.exports = koa();
const shows = require('./API/Shows-api.js');
const {db, Venues, Shows} = require('./db.js');

app.use(router.routes());
app.use(router.allowedMethods());

// app.use(router.get('/users', list));
router.get('/shows/', shows.getAllShows);
router.get('/shows/:id/', shows.getShowById);
router.get('/shows/:id/setlists', shows.getSetlistsByShowId);


if (!module.parent) app.listen(3000);
console.log('running on 3000')

app.use(function * (){
  this.body = "<body><div style='background-color:black;color:white;text-align:center;padding:5px;' id=''header''><h1>Helping Friendly APP</h1></div><div style='line-height:30px;background-color:#eeeeee;height:300px;width:100px;float:left;padding:5px;'id=''nav''>Phish<br><br></div><div style='width:350px;float:left;padding:10px;' 'id=''section''><h1>Documentation</h1><p>In Progress</p></div><div style='background-color:black;color:white;clear:both;text-align:center;padding:5px; 'id=''footer''></div></body>";
});