
const {BookingRepository} = require('../repositories');
const db = require('../models');
const FlightService = require('../services/flight-service');


async function createBooking(data){
    try {
        const result = await db.sequelize.transaction(async function bookingImpl(t) {
            const flight = await FlightService.getFlight(data.flightId);
            // Add your booking logic here using the flight data
            console.log(flight)
        });
    } catch (error) {
        console.error('Error creating booking:', error);
        throw error;
    }
}

module.exports={
    createBooking
}