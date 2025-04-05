const { StatusCodes } = require("http-status-codes");
const { CityService } = require("../services");
const { ErrorResponse, SuccessResponse } = require("../utils/common");

/**
 * POST : /city
 * req-body {name: ranchi}
 */

async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });
    (SuccessResponse.message = "Successfully created an city"),
      (SuccessResponse.data = city);
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    (ErrorResponse.message = "someting went wrong while creating an city"),
      (ErrorResponse.error = error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}


module.exports = {
    createCity
}