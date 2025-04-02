const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { ErrorResponse, SuccessResponse } = require("../utils/common");

/**
 * POST : /airplane
 * req-body {modelNumber: 'Boeing777', capacity:400}
 */

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    (SuccessResponse.message = "Successfully created an airplane"),
      (SuccessResponse.data = airplane);
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    (ErrorResponse.message = "someting went wrong while creating an airplane"),
      (ErrorResponse.error = error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function getAirplanes(req, res) {
  try {
    const airplane = await AirplaneService.getAirplanes();
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse = error;
    return res.status(error.StatusCodes).json(ErrorResponse);
  }
}

module.exports = {
  createAirplane,
  getAirplanes
};
