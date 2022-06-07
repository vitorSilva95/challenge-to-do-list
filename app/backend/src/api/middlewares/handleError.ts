import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction} from 'express';

const handleError = (err: any, _req:Request, res:Response, _next:NextFunction) => {
  return res.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
    error: err.message || 'Internal Server Error',
  });
};

export default handleError;