const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-errors");

const { AirplaneRepository } = require("../repositories");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    console.log(error);
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    console.log(error);
  }
}

async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {
    console.log(error);
  }
}

async function destroyAirplane(id){
    try {
        const destroyAirplane = await airplaneRepository.destroy(id);
        return destroyAirplane;
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane
};
