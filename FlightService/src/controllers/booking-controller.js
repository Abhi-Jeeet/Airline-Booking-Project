const { StatusCodes } = require("http-status-codes");
const { BookingService } = require("../services");
const { ErrorResponse, SuccessResponse } = require("../utils/common");



async function createBooking(req, res) {
  try {
    const booking = await BookingService.createBooking({
      flightId: req.body.flightId,
      noOfSeats: req.body.noOfSeats,
      userId: req.body.userId,
    });
    (SuccessResponse.message = "Successfully created an booking"),
      (SuccessResponse.data = booking);
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    (ErrorResponse.message = "someting went wrong while creating an booking"),
      (ErrorResponse.error = error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}


module.exports={
    createBooking
}