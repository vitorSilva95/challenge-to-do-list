import mongoose from 'mongoose';
import { TodoList } from '../interfaces/TodoList';


export interface TodoListDocument extends TodoList, mongoose.Document{}

const TodoListSchema = new mongoose.Schema<TodoListDocument>({
  task: String,
  isDone: Boolean,
}, {versionKey:false});

class TodoListDAO {
  model: mongoose.Model<TodoListDocument>;
  constructor() {
    this.model = mongoose.model('TodoList', TodoListSchema);
  }
}
export default TodoListDAO;