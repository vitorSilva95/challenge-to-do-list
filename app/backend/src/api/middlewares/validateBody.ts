import { TodoListSchema } from '../../interfaces/TodoList';
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';


const validateBody = (req:Request, res:Response, next:NextFunction) => {
  const body = req.body;
  const parsed = TodoListSchema.safeParse(body);

  if (!parsed.success) {
    return res.status(StatusCodes.BAD_REQUEST).json({error: parsed.error.issues[0].message});
  }

  next();
};

export default validateBody;