const{StatusCodes} = require("http-status-codes")
const {AirplaneService} = require("../services");


/**
 * POST : /airplane
 * req-body {modelNumber: 'Boeing777', capacity:400}
 */

async function createAirplane(req,res){
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message: "Successfully create an airplane",
            data: airplane,
            error:{}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"someting went wrong while creating an airplane",
            data:{},
            error:error
        });
    }
}

module.exports={
    createAirplane
}