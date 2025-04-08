const express = require("express");
const {FlightMiddlewares} = require("../../middlewares")

const {FlightController} = require("../../controllers")

const router = express.Router();

// /api/v1/flights POST
router.post('/', FlightMiddlewares.validateRequest,FlightController.createFlight);

// /api/v1/flights?trips=IXR-PAT GET
router.get('/', FlightController.getAllFlights);



module.exports=router