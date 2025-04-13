const { BookingRepository } = require("../repositories");
const db = require("../models");
const FlightService = require("./flight-service");
const AppError = require("../utils/errors/app-errors");
const { StatusCodes } = require("http-status-codes");

const bookingRepository = new BookingRepository();

async function createBooking(data) {
  const transaction = await db.sequelize.transaction();
  try {
    // ✅ Input validation
    if (!data.flightId || !data.noOfSeats || !data.userId) {
      throw new AppError(
        "Missing required fields: flightId, noOfSeats, or userId",
        StatusCodes.BAD_REQUEST
      );
    }

    const flight = await FlightService.getFlight(data.flightId);
    const flightData = flight;

    if (data.noOfSeats > flightData.totalSeats) {
      throw new AppError("Not enough seats available", StatusCodes.BAD_REQUEST);
    }

    const totalBillingAmount = data.noOfSeats * flightData.price;
    const bookingPayload = { ...data, totalCost: totalBillingAmount };

    const booking = await bookingRepository.create(bookingPayload, transaction);
    console.log("Updating seats with:", {
      flightId: data.flightId,
      noOfSeats: data.noOfSeats
    });

    await FlightService.updateSeats({flightId: data.flightId,
      seats: data.noOfSeats,
      dec: true, 
      });

    await transaction.commit();
    return booking;
  } catch (error) {
    console.error("Error creating booking:", error);
    await transaction.rollback();
    throw error;
  }
}

module.exports = {
  createBooking,
};
