const Flight = require('../models/flight');

module.exports = {
  new: newFlight,
  create,
  index
}

function newFlight(req, res) {
  res.render('flights/new');
}

function create(req, res) {
  console.log(req.body);
  Flight.create(req.body);
  res.redirect('/flights/index')
}

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', {
      flights,
      title: 'All Flights'
    });
  });

}
