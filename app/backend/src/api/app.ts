import express from 'express';
import dotenv from 'dotenv';
import  todoListRouter from './routes/todoListRouter';
import 'express-async-errors';
import handleError from './middlewares/handleError';

dotenv.config();

const app = express();

app.use(express.json());
app.use(todoListRouter);
app.use(handleError);


export default app;