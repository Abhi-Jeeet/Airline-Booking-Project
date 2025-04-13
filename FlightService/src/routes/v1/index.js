const express = require("express");
const { InfoController } = require("../../controllers");
const router = express.Router();
const airplaneRoutes = require("./airplane-routes")
const cityRoutes = require("./city-routes")
const airportRoutes = require("./airport-routes")
const flightRoutes = require('./flight-routes')
const bookingRoutes = require('./booking-routes')

router.use('/airplanes', airplaneRoutes);

router.use('/cities',cityRoutes );

router.use('/airports',airportRoutes );

router.use('/flights', flightRoutes);

router.use('/bookings', bookingRoutes);



router.get('/info', InfoController.info);

module.exports = router;