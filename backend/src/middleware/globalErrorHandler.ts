import type { Request, Response , NextFunction} from "express";
import type createHttpError = require("http-errors");
import envConfig = require("../config/config");


const globalErrorHandler=(err:createHttpError.HttpError,req:Request,res:Response,next:NextFunction)=>{
const statusCode=err.statusCode || 500
res.status(statusCode).json({
    message:err.message,
    errorStack : envConfig.environment==='devlopment'? err.stack:"something went wrong"
})
}

export = globalErrorHandler