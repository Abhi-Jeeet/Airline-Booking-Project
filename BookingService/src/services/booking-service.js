const { BookingRepository } = require("../repositories");
const db = require("../models");
const AppError = require("../utils/errors/app-errors");
const { StatusCodes } = require("http-status-codes");
const axios = require("axios");

const bookingRepository = new BookingRepository();

async function createBooking(data) {
  const transaction = await db.sequelize.transaction();
  try {
    const flight = await axios.get(`http://localhost:3000/api/v1/flights/${data.flightId}`);
    const flightData = flight.data.data;

    if (data.noOfSeats > flightData.totalSeats) {
      throw new AppError("Not enough seats available", StatusCodes.BAD_REQUEST);
    }

    const totalBillingAmount = data.noOfSeats * flightData.price;
    const bookingPayload = { ...data, totalCost: totalBillingAmount };

    const booking = await bookingRepository.create(bookingPayload, transaction);
    
    await axios.patch(`http://localhost:3000/api/v1/flights/${data.flightId}/seats`,{
      seats:data.noOfSeats
    })

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
