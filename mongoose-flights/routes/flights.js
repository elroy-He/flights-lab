var express = require('express');
var router = express.Router();
const flightController = require('../controllers/flights');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/new', flightController.new);
router.post('/', flightController.create);

router.get('/index', flightController.index);
module.exports = router;
