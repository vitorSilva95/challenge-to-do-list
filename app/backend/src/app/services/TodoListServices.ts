import { TodoList } from '../../interfaces/TodoList';
import TodoListModel from '../model/TodoListModel';

class TodoListServices {
  constructor(public model = new TodoListModel() ){}
  async getAll() {
    const result = await this.model.getAll();
    return result;
  }
  async create(body:TodoList): Promise<TodoList> {
    const result = await this.model.create(body);
    return result;
  }
}

export default TodoListServices;