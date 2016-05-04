const router = require('koa-router')({
  prefix: '/API'
});
const shows = require('./API/Shows-api.js');
const venues = require('./API/Venues-api.js');
const {db, Venues, Shows} = require('./db.js');
const app = require('./index.js');

app.use(router.routes());
app.use(router.allowedMethods());

//SHOWS API LAYER TODO: abstract to seperate file
router.get('/shows/', shows.getAllShows);
router.get('/shows/:id/', shows.getShowById);
router.get('/shows/:id/setlists', shows.getSetlistsByShowId);

router.get('/venues/', venues.getAllVenues);
router.get('/venues/:id/', venues.getVenueById);
