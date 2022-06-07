import { Router } from 'express';
import TodoListController from '../../app/controllers/todoListController';
import validateBody from '../middlewares/validateBody';

const todoListRouter = Router();
const todoListController = new TodoListController();

todoListRouter.get('/',async (_req,res) =>{
  const result = await todoListController.getAll();
  return res.status(200).json(result);
} );
todoListRouter.post('/', validateBody, async (req,res)=> {
  const result = await todoListController.create(req.body);
  return res.status(201).json(result);
});
todoListRouter.put('/:id', async (req,res)=> {
  const { id } = req.params;
  const result = await todoListController.update(id, req.body);
  return res.status(200).json(result);
});
todoListRouter.delete('/:id', async (req,res)=> {
  const { id } = req.params;
  const result = await todoListController.delete(id);
  return res.status(200).json(result);
}); 

export default todoListRouter;