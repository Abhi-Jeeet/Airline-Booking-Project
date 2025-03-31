const {StatusCodes} = require("http-status-codes"); 
function validateRequest(req,res, next){
    if(!req.body.modelNumber){
        return res.status(StatusCodes.BAD_REQUEST).json({
            success:false,
            message:"Error while creating an airplane",
            data:{},
            error:{explanation:"Something went wrong from the client side"}
        })
    }
    next();
}

module.exports={
    validateRequest
}