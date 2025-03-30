const express = require("express");
const {AirplaneMiddlewares} = require("../../middlewares")

const {AirplaneController} = require("../../controllers")

const router = express.Router();

// /api/v1/airplanes POST
router.post('/', AirplaneMiddlewares.validateRequest,AirplaneController.createAirplane)

module.exports=router